// Config classes

let checkboxClass = 'cheghost-checkbox';
let hiddenClass = 'cheghost-hidden';

// Core

// 1. Wrap checkboxes (and their corresponding labels)
function wrap(selectorToWrap) {

    // Get all checkboxes with passed to cheghost() selector
    let checkboxes = document.querySelectorAll(selectorToWrap);

    for (let c = 0; c < checkboxes.length; c++) {
        let checkbox = checkboxes[c];
        checkbox.className = checkboxClass;

        // Get name attribute of checkbox
        let checkboxName = checkbox.name;

        // Get label
        let labelId = checkbox.id;
        let label;
        if (labelId) {
            label = document.querySelector(`[for=${labelId}]`);
        }

        // Create wrapper
        let wrapper = document.createElement('div');
        wrapper.className = 'cheghost';

        // Create hidden field
        let hidden = document.createElement('input');
        hidden.type = 'hidden';
        hidden.name = checkboxName;
        hidden.className = hiddenClass;

        // Delete name attribute from checkbox
        checkbox.removeAttribute('name');

        // Insert wrapper
        checkbox.parentNode.insertBefore(wrapper, null);

        // Insert checkbox into wrapper
        wrapper.appendChild(checkbox);

        // Insert hidden into wrapper
        wrapper.appendChild(hidden);

        // Insert label into wrapper
        if (label) {
            wrapper.appendChild(label);
        }

    }
}

// 2. Set values for hidden
function values() {
    // All visible checkboxes
    let checkboxes = document.getElementsByClassName(checkboxClass);

    // Set initial
    for (let i = 0; i < checkboxes.length; i++) {
        // For each checkbox
        let checkbox = checkboxes[i];
        set(checkbox);
    }

    // Set on click
    for (let i = 0; i < checkboxes.length; i++) {
        // For each checkbox
        let checkbox = checkboxes[i];
        checkbox.addEventListener('click', () => {
            set(checkbox);
        });
    }
}
function set(checkbox) {
    // Get wrapper
    let wrapper = checkbox.parentNode;

    // Get wrapper's childs
    let childs = Array.prototype.slice.call(wrapper.childNodes);

    // Get hidden
    let hidden = childs.filter((child) => {
        return child.type == "hidden"
    })[0];

    // Set value for hidden
    hidden.value = checkbox.checked ? "1" : "0"
}

export function cheghost(selectorToWrap) {
    wrap(selectorToWrap);
    values();
}