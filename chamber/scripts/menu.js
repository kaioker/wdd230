document.getElementById("menubutton").addEventListener("click", function(){
    document.getElementById("mainnav").classList.toggle("responsive");
}, false);
if(document.getElementById("time")){
    var lastVisit = localStorage.getItem("lastVisit") || new Date().getTime();
    var thisVisit = new Date().getTime();
    localStorage.setItem("lastVisit", thisVisit);
    var timeDiff = Math.abs(thisVisit - lastVisit);
    //console.log(timeDiff);
    var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
    document.getElementById("time").innerHTML = "You last visited this page " + diffDays + " day" + (diffDays == 1 ? "" : "s") + " ago.";
}
if(document.getElementById("datetime")){
    var d = new Date();
    var n = d.toISOString();
    document.getElementById("datetime").value = n;
}
const url = '/wdd230/chamber/data/members.json';

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

function doAThing(jsObject) {
    let members = document.getElementById('members');
    members.innerHTML = '';
    jsObject.forEach(element => {
        let card = document.createElement('div');
        card.classList.add('card');
        var picture = document.createElement('picture');
        var img = document.createElement('img');
        img.setAttribute('src', element.icon);
        img.setAttribute('alt', element.name);
        picture.appendChild(img);
        card.appendChild(picture);
        var hr1 = document.createElement('hr');
        card.appendChild(hr1);
        var name = document.createElement('h3');
        name.textContent = element.name;
        card.appendChild(name);
        var address = document.createElement('p');
        address.textContent = element.address;
        card.appendChild(address);
        var phone = document.createElement('p');
        phone.textContent = element.phone;
        card.appendChild(phone);
        var website = document.createElement('a');
        website.href = element.website;
        website.textContent = element.website.replace(/^https?:\/\//, '').replace(/\/$/, '').replace(/^www\./, '');
        card.appendChild(website);
        var description = document.createElement('p');
        description.textContent = element.description;
        card.appendChild(description);
        var hr2 = document.createElement('hr');
        card.appendChild(hr2);
        var membership = document.createElement('p');
        membership.classList.add('membership');
        membership.classList.add(element.membership.toLowerCase());
        membership.textContent = element.membership + ' Member';
        card.appendChild(membership);
        members.appendChild(card);
    });
}
if(document.getElementById('members')){
    apiFetch();
    document.getElementById('toggle').addEventListener('click', function() {
        let members = document.getElementById('members');
        members.classList.toggle('list');
        if(members.classList.contains('list')){
            document.getElementById('toggle').textContent = 'Grid View';
        } else {
            document.getElementById('toggle').textContent = 'List View';
        }
    });
}