const items = document.querySelectorAll("li");

items.forEach(item => {
    item.addEventListener("click", e => {
        // e.target.classList.add("line-through");
        e.target.remove();
    })
});