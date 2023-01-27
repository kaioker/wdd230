document.getElementById("menubutton").addEventListener("click", function(){
    document.getElementById("mainnav").classList.toggle("responsive");
}, false);
document.getElementById("range").addEventListener("change", function(){
    popup("the range was changed to value " + this.value);
});
document.getElementById("form").addEventListener("submit", function(e){
    e.preventDefault();

    if(document.getElementById("user1").value != document.getElementById("user2").value){
        popup("the usernames do not match");
        return;
    }

    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var rating = document.getElementById("range").value;
    var username = document.getElementById("user1").value;

    var div = document.createElement("div");

    var h2 = document.createElement("h2");
    h2.innerHTML = "Form Input";
    div.appendChild(h2);

    var table = document.createElement("table");
    var tr = document.createElement("tr");
    var th = document.createElement("th");
    th.innerHTML = "Field";
    tr.appendChild(th);
    th = document.createElement("th");
    th.innerHTML = "Value";
    tr.appendChild(th);
    table.appendChild(tr);

    var tr = document.createElement("tr");
    var td = document.createElement("td");
    td.innerHTML = "Name";
    tr.appendChild(td);
    td = document.createElement("td");
    td.innerHTML = name;
    tr.appendChild(td);
    table.appendChild(tr);

    var tr = document.createElement("tr");
    var td = document.createElement("td");
    td.innerHTML = "Email";
    tr.appendChild(td);
    td = document.createElement("td");
    td.innerHTML = email;
    tr.appendChild(td);
    table.appendChild(tr);

    var tr = document.createElement("tr");
    var td = document.createElement("td");
    td.innerHTML = "Rating";
    tr.appendChild(td);
    td = document.createElement("td");
    td.innerHTML = rating;
    tr.appendChild(td);
    table.appendChild(tr);

    var tr = document.createElement("tr");
    var td = document.createElement("td");
    td.innerHTML = "Username";
    tr.appendChild(td);
    td = document.createElement("td");
    td.innerHTML = username;
    tr.appendChild(td);
    table.appendChild(tr);

    div.appendChild(table);

    document.getElementById("formtable").appendChild(div);
    document.getElementById("formtable").style.display = "block";

    document.getElementById("form").reset();
});