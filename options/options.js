const instance = document.getElementById("instance");
const apiKey = document.getElementById("apiKey")
const defSourceLg = document.getElementById("defSourceLg");
const defTargetLg = document.getElementById("defTargetLg");
const heightSlider = document.getElementById("heightSlider");
const heightSliderValue = document.getElementById("heightSliderValue");
const widthSlider = document.getElementById("widthSlider");
const widthSliderValue = document.getElementById("widthSliderValue");
const fontSizeSlider = document.getElementById("fontSizeSlider");
const fontSizeSliderValue = document.getElementById("fontSizeSliderValue");
const previewTextArea = document.getElementById("previewTextArea");
const saveBtn = document.getElementById("saveBtn");

document.addEventListener("DOMContentLoaded", async () => {
    const storage = await chrome.storage.local.get({
        instance: "https://ltranslate.blablalinux.be",
        apiKey: "",
        sourceLg: 'auto',
        targetLg: 'fr',
        textareaHeight: 140,
        textareaWidth: 500,
        fontSize: 16
    });

    instance.value = storage.instance;
    apiKey.value = storage.apiKey;
    defSourceLg.value = storage.sourceLg;
    defTargetLg.value = storage.targetLg;
    heightSlider.value = storage.textareaHeight;
    heightSliderValue.textContent = storage.textareaHeight;
    widthSlider.value = storage.textareaWidth;
    widthSliderValue.textContent = storage.textareaWidth;
    fontSizeSlider.value = storage.fontSize;
    fontSizeSliderValue.textContent = storage.fontSize;
    previewTextArea.style.height = storage.textareaHeight + "px";
    previewTextArea.style.minHeight = storage.textareaHeight + "px";
    previewTextArea.style.width = storage.textareaWidth + "px";
    previewTextArea.style.minWidth = storage.textareaWidth + "px";
    previewTextArea.style.fontSize = storage.fontSize + "px";
});

document.getElementById("settings").addEventListener("submit", async (e) => {
    e.preventDefault();

    if (!instance.value.length) {
        alert("Please fill out all fields!");
    } else {
        await chrome.storage.local.set({
            instance: instance.value,
            apiKey: apiKey.value,
            sourceLg: defSourceLg.value,
            targetLg: defTargetLg.value,
            textareaHeight: heightSlider.value,
            textareaWidth: widthSlider.value,
            fontSize: fontSizeSlider.value
        });
        saveBtn.disabled = true;
        saveBtn.innerText = "Saved!";
        setTimeout(() => {
            saveBtn.disabled = false;
            saveBtn.innerText = "Save";
        }, 3000);
    }
})

heightSlider.addEventListener("input", () => {
    previewTextArea.style.height = heightSlider.value + "px";
    previewTextArea.style.minHeight = heightSlider.value + "px";
    heightSliderValue.textContent = heightSlider.value;
})

widthSlider.addEventListener("input", () => {
    previewTextArea.style.width = widthSlider.value + "px";
    previewTextArea.style.minWidth = widthSlider.value + "px";
    widthSliderValue.textContent = widthSlider.value;
})

fontSizeSlider.addEventListener("input", () => {
    previewTextArea.style.fontSize = fontSizeSlider.value + "px";
    fontSizeSliderValue.textContent = fontSizeSlider.value;
})
