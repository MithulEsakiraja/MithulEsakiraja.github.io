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
        document.createElement("option").text = langinput.value;
        langinput.value = "";
    };

    add.addEventListener("click", addLanguage);
    add.form?.addEventListener("submit", addLanguage);
}

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initializeLanguageList, { once: true });
} else {
    initializeLanguageList();
}
