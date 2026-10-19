const add = document.getElementById("submit");
const list = document.getElementById("list");
const langinput = document.getElementById("LangInput");

add.addEventListener("click", (event) => {
    event.preventDefault();
    const value = langinput.value.trim();
    if (!value) return;

    list.add(new Option(value, value));
    langinput.value = "";
});
