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

var requestURL = 'https://byui.projectpine.com/wdd230/menu.json';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
request.onload = function() {
    displayActivities(request.response);
}
function displayActivities(activities){
    var activitybox = document.getElementById("activities");

    for(i=0;i<Object.keys(activities).length;i++){
        var li = document.createElement("li");
        var items = activities[Object.keys(activities)[i]];
        var span = document.createElement("span");
        span.innerHTML = Object.keys(activities)[i]+": ";
        li.appendChild(span);
        for(j=0;j<Object.keys(items).length;j++){
            if(j != 0){
                var span2 = document.createElement("span");
                span2.innerHTML = " | ";
                li.appendChild(span2);
            }
            var a = document.createElement("a");
            a.href = items[Object.keys(items)[j]];
            a.innerHTML = Object.keys(items)[j];
            if(!a.href.includes("javascript:")) a.target = "_blank"; //if it's not a javascript link, open in new tab
            li.appendChild(a);
        }
        activitybox.appendChild(li);
    }
}

const url = 'https://byui.projectpine.com/api_proxy.php?q=London,GB&units=metric';

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
        const data = await response.json();
        doAThing(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        //console.log(error);
    }
}

apiFetch();

function doAThing(jsObject) {
    document.getElementById('icon').src = "https://openweathermap.org/img/w/"+jsObject.weather[0].icon+".png";
    document.getElementById('temp').textContent = "Feels Like: "+jsObject.main.feels_like+ "°C";
    document.getElementById('condition').textContent = jsObject.weather[0].description;
}