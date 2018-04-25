var saniye = document.querySelector(".saniye");
var deqiqe = document.querySelector(".deqiqe");
var saat = document.querySelector(".saat");
var now = new Date();
var nowdeq = now.getMinutes() * 6;
var nowsan = now.getSeconds() * 6;
var nowsaat = (now.getHours() % 12) * 30+nowdeq/12;


saniye.style.transform = "rotate(" + nowsan + "deg)";
deqiqe.style.transform = "rotate(" + nowdeq + "deg)";
saat.style.transform = "rotate(" + nowsaat + "deg)";

setInterval(function () {
    nowsan += 6;
    saniye.style.transform = "rotate(" + nowsan + "deg)";
}
    , 1000)
setInterval(function () {
    nowdeq += 6;
    deqiqe.style.transform = "rotate(" + nowdeq + "deg)";

}
    , 60000)

setInterval(function () {
    nowsaat += 6;
    saat.style.transform = "rotate(" + nowsaat + "deg)";
}
    , 360000)
