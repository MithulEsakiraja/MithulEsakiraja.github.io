const add = getElementById("add");
const list = getElementById("list")
const langinput = getElementById("LangInput");
add.addEventListener('click', (event)=>{
    const li = document.createElement('option');
    const liText = document.createTextNode(langinput.value);
    li.appendChild(liText)
    list.appendChild(li);
    langinput.value;
})
