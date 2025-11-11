function translate(prefix, attribute) {
    const elements = document.querySelectorAll('[class*="' + prefix + '"]');

    if (elements.length > 0) {
        for (let i = 0; i < elements.length; i++) {
            const element = elements[i];

            element.classList.forEach(className => {
                if (className.startsWith(prefix))
                    element[attribute] = chrome.i18n.getMessage(`${className.substring(prefix.length)}`);
            })
        }
    }
}

document.addEventListener("DOMContentLoaded", () => {
    translate("ti_", "innerText");
    translate("tv_", "value");
    translate("tt_", "title");
});
