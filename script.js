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
    const wordValue = wordInput.value.trim();
    if (!wordValue) return;
    
    const addWord = (event) => {
        event.preventDefault();
        const value1 = wordInput.value.trim();
        if (!value1) return;

        const wordList = document.getElementById("wordList");
        const listItem = document.createElement("li");
        listItem.textContent = value1;
        wordList.appendChild(listItem);

        wordInput.value = "";
    };

    add.addEventListener("click", addLanguage);
    add.form?.addEventListener("submit", addLanguage);
    
}

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initializeLanguageList, { once: true });
} else {
    initializeLanguageList();
}
