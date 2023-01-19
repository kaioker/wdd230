const input = document.getElementById("favchap");
const button = document.querySelector("button");
const list = document.querySelector("ul");

button.addEventListener("click", function() {
    if (input.value.length > 0) {
        var li = document.createElement("li");
        var del = document.createElement("button");
        li.innerHTML = input.value;
        del.innerHTML = "❌";
        li.appendChild(del);
        list.appendChild(li);
        del.addEventListener("click", function() {
            list.removeChild(li);
        });
    }
    input.value = "";
    input.focus();
});