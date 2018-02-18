export function addClickHandler (selector, onClick) {
    const elements: Element[] = Array.from(document.querySelectorAll(selector));
    for (let element of elements) {
        element.addEventListener('click', (e) => {
            if (e && e.preventDefault) 
                e.preventDefault();
                onClick(e.target);
            });
    }
}
export function toggleClass(element, toggleClass) {
    const currentClass = element.className;
    let newClass;
    if (currentClass.split(" ").indexOf(toggleClass) > -1){
        newClass = currentClass.replace(new RegExp('\\b' + toggleClass + '\\b', 'g'), "");
    } else {
        newClass = currentClass + " " + toggleClass;
    }
    element.className = newClass.trim();
}

export function setClass(element, toggleClass, remove) {
    const currentClass = element.className;
    let newClass;
    if (remove && currentClass.split(" ").indexOf(toggleClass) > -1){
        newClass = currentClass.replace(new RegExp('\\b' + toggleClass + '\\b', 'g'), "");
    } else if (!remove) {
        newClass = currentClass + " " + toggleClass;
    }
    if (newClass) {
        element.className = newClass.trim();
    }
}