const items = document.querySelectorAll("li");
const addBtn = document.querySelector("button");

items.forEach(item => {
    item.addEventListener("click", e => {
        // e.target.classList.add("line-through");
        e.target.remove();
    })
});

addBtn.addEventListener("click", e=>{

});