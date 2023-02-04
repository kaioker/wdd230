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