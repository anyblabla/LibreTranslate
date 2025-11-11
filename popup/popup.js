const source = document.getElementById("source")
const switchButton = document.getElementById("switchButton")
const target = document.getElementById("target")
const query = document.getElementById("query")
const translation = document.getElementById("translation");
const copyButton = document.getElementById("copyButton");

chrome.storage.local.get("textToTranslate", (data) => {
	if (data.textToTranslate) {
		query.value = data.textToTranslate;
		chrome.storage.local.remove("textToTranslate");
		getTranslation();
	}
});

chrome.storage.local.get({
	sourceLg: "auto",
	targetLg: "fr",
	textareaHeight: 140,
	textareaWidth: 500,
	fontSize: 16
}).then((storage) => {
	source.value = storage.sourceLg;
	target.value = storage.targetLg;
	query.style.height =
		query.style.minHeight =
			translation.style.height =
				translation.style.minHeight =
					storage.textareaHeight + "px";

	query.style.width =
		query.style.minWidth =
			translation.style.width =
				translation.style.minWidth =
					storage.textareaWidth + "px";

	query.style.fontSize =
		translation.style.fontSize =
			storage.fontSize + "px";
});

let timer;
source.onchange = () => {
	getTranslation();
	chrome.storage.local.set({
		sourceLg: source.value
	});
};
target.onchange = () => {
	getTranslation();
	chrome.storage.local.set({
		targetLg: target.value
	});
}

query.addEventListener("input", () => {
	clearTimeout(timer);
	timer = setTimeout(getTranslation, 500)
})

switchButton.onclick = () => {
	if (source.value != "auto") {
		let curSource = source.value;
		source.value = target.value;
		target.value = curSource;
		getTranslation();
		chrome.storage.local.set({
			targetLg: target.value,
			sourceLg: source.value
		});
	}
	else {
		source.style.backgroundColor = "#d22";
		setTimeout(() => {
			source.style.backgroundColor = "#333";
		}, 1500);
	}
};

copyButton.onclick = () => {
	navigator.clipboard.writeText(translation.value);
};


async function getTranslation() {
	if (query.value === "")
		translation.value = "";

	else {
		translation.value = "...";
		
		const storage = await chrome.storage.local.get({
			instance: "https://ltranslate.blablalinux.be",
			apiKey: ""
		});

		try {
			const resp = await fetch(storage.instance + "/translate", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({
					q: query.value,
					source: source.value,
					target: target.value,
					format: "text",
					api_key: storage.apiKey
				}),
			});
			const res = await resp.json();
			translation.value = res.translatedText;
		} catch(ex) {
			translation.value = chrome.i18n.getMessage("translationError") + `\n\n${ex}`;
		}
	}
}
