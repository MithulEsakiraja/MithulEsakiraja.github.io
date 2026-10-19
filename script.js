function initializeLanguageList() {
    const add = document.getElementById("submit");
    const list = document.getElementById("lang");
    const langinput = document.getElementById("LangInput");

    if (!add || !list || !langinput) return;

    const addLanguage = (event) => {
        event.preventDefault();
        const value = langinput.value.trim();
        if (!value) return;

        list.add(new Option(value, value));
        langinput.value = "";
    };

    add.addEventListener("click", addLanguage);
    add.form?.addEventListener("submit", addLanguage);
}

function addWord1() {
    const wordInput = document.getElementById("Word");
    const wordList = document.getElementById("wordList");
    if (!wordInput || !wordList) return;

    const wordValue = wordInput.value.trim();
    if (!wordValue) return;

    const listItem = document.createElement("li");
    listItem.textContent = wordValue;
    wordList.appendChild(listItem);
    wordInput.value = "";
}

function initializeWordList() {
    const wordInput = document.getElementById("Word");
    const wordForm = wordInput?.closest("form");
    wordForm?.addEventListener("submit", addWord1);
}

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => {
        initializeLanguageList();
        initializeWordList();
    }, { once: true });
} else {
    initializeLanguageList();
    initializeWordList();
}
