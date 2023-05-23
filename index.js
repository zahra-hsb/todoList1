const items = document.querySelectorAll("li");
const addBtn = document.querySelector("button");
const ul = document.querySelector("ul");

addBtn.addEventListener("click", ()=>{
    const li = document.createElement("li");
    li.textContent = 'zahra';
    ul.prepend(li)
});

items.forEach(item => {
    item.addEventListener("click", e => {
        // e.target.classList.add("line-through");
        e.target.remove();
    })
});