var datestart = new Date("Jan 01, 2020 00:00:00").getTime();
var d1start =   new Date("Dec 16, 2020 14:00:00").getTime();
var d1end =     new Date("Dec 17, 2020 00:00:00").getTime();
var d2start =   new Date("Dec 17, 2020 14:00:00").getTime();
var d2end =     new Date("Dec 18, 2020 00:00:00").getTime();
var d3start =   new Date("Dec 18, 2020 14:00:00").getTime();
var d3end =     new Date("Dec 19, 2020 00:00:00").getTime();
var d4start =   new Date("Dec 19, 2020 14:00:00").getTime();
var d4end =     new Date("Dec 20, 2020 00:00:00").getTime();
var d5start =   new Date("Dec 20, 2020 14:00:00").getTime();
var d5end =     new Date("Dec 21, 2020 00:00:00").getTime();
var d6start =   new Date("Dec 21, 2020 14:00:00").getTime();
var d6end =     new Date("Dec 22, 2020 00:00:00").getTime();
var d7start =   new Date("Dec 22, 2020 14:00:00").getTime();
var d7end =     new Date("Dec 23, 2020 00:00:00").getTime();
var d8start =   new Date("Dec 23, 2020 14:00:00").getTime();
var d8end =     new Date("Dec 24, 2020 00:00:00").getTime();
var d9start =   new Date("Dec 24, 2020 14:00:00").getTime();
var d9end =     new Date("Dec 25, 2020 00:00:00").getTime();
var d10start =  new Date("Dec 25, 2020 14:00:00").getTime();
var d10end =    new Date("Dec 26, 2020 00:00:00").getTime();

//Banner Timers
updateTimer("banner-unknown", 50, datestart, d1start, updateBanner, endUnknownBanner);
updateTimer("banner-d1",      50, d1start, d1end, updateBanner, makeDisplayNone);
updateTimer("banner-unknown", 50, d1end, d2start, updateBanner, endUnknownBanner);
updateTimer("banner-d2",      50, d2start, d2end, updateBanner, makeDisplayNone);
updateTimer("banner-unknown", 50, d2end, d3start, updateBanner, endUnknownBanner);
updateTimer("banner-d3",      50, d3start, d3end, updateBanner, makeDisplayNone);
updateTimer("banner-unknown", 50, d3end, d4start, updateBanner, endUnknownBanner);
updateTimer("banner-d4",      50, d4start, d4end, updateBanner, makeDisplayNone);
updateTimer("banner-unknown", 50, d4end, d5start, updateBanner, endUnknownBanner);
updateTimer("banner-d5",      50, d5start, d5end, updateBanner, makeDisplayNone);
updateTimer("banner-unknown", 50, d5end, d6start, updateBanner, endUnknownBanner);
updateTimer("banner-d6",      50, d6start, d6end, updateBanner, makeDisplayNone);
updateTimer("banner-unknown", 50, d6end, d7start, updateBanner, endUnknownBanner);
updateTimer("banner-d7",      50, d7start, d7end, updateBanner, makeDisplayNone);
updateTimer("banner-unknown", 50, d7end, d8start, updateBanner, endUnknownBanner);
updateTimer("banner-d8",      50, d8start, d8end, updateBanner, makeDisplayNone);
updateTimer("banner-unknown", 50, d8end, d9start, updateBanner, endUnknownBanner);
updateTimer("banner-d9",      50, d9start, d9end, updateBanner, makeDisplayNone);
updateTimer("banner-unknown", 50, d9end, d10start, updateBanner, endUnknownBanner);
updateTimer("banner-d10",     50, d10start, d10end, updateBanner, day10BannerEnd);

//Thumbnail Timers
updateTimer("thumbnail-d1", 50, datestart, d1start, updateThumbnail, endThumbnail);
updateTimer("thumbnail-d2", 50, datestart, d2start, updateThumbnail, endThumbnail);
updateTimer("thumbnail-d3", 50, datestart, d3start, updateThumbnail, endThumbnail);
updateTimer("thumbnail-d4", 50, datestart, d4start, updateThumbnail, endThumbnail);
updateTimer("thumbnail-d5", 50, datestart, d5start, updateThumbnail, endThumbnail);
updateTimer("thumbnail-d6", 50, datestart, d6start, updateThumbnail, endThumbnail);
updateTimer("thumbnail-d7", 50, datestart, d7start, updateThumbnail, endThumbnail);
updateTimer("thumbnail-d8", 50, datestart, d8start, updateThumbnail, endThumbnail);
updateTimer("thumbnail-d9", 50, datestart, d9start, updateThumbnail, endThumbnail);
updateTimer("thumbnail-d10", 50, datestart, d10start, updateThumbnail, endThumbnail);

function updateBanner(id, str) {
    var doc = document.getElementById(id);
    document.getElementById(id).style.display = "Block";
    for (var i = 0; i < doc.childNodes.length; i++) {
        if (doc.childNodes[i].className == "timer-label" || doc.childNodes[i].className == "tiny-timer-label") {
            doc.childNodes[i].textContent = str;
            break;
        }        
    }
}

function endUnknownBanner(id, str) {
    makeDisplayNone(id, str);
    var doc = document.getElementById(id);
    if (str === "EXPIRED" && Notification.permission === "default") {
        for (var i = 0; i < doc.childNodes.length; i++) {
            if (doc.childNodes[i].className == "day-label") {
                alert(doc.childNodes[i].textContent);
                break;
            }        
        }
    }
}

function makeDisplayNone(id, str) {
    document.getElementById(id).style.display = "None";
}

function makeDisplayBlock(id, str) {
    document.getElementById(id).style.display = "Block";
}

function day10BannerEnd(id, str) {
    makeDisplayNone(id, str);
    makeDisplayNone("banner-container", "");
}

var urls = [ "",
             "https://www.youtube.com/playlist?list=PLJ_qMeabVsYgZ0ijR9Lhl2EpMtlwhZqfG",
             "https://www.youtube.com/watch?v=PxUghyzt_bY&list=PLJ_qMeabVsYgZ0ijR9Lhl2EpMtlwhZqfG",
             "https://www.youtube.com/watch?v=49D0_8LdNIU&list=PLJ_qMeabVsYgZ0ijR9Lhl2EpMtlwhZqfG",
             "https://www.youtube.com/watch?v=UW2RUyjQzYg&list=PLJ_qMeabVsYgZ0ijR9Lhl2EpMtlwhZqfG",
             "https://www.youtube.com/watch?v=flwQiSRL-pg&list=PLJ_qMeabVsYgZ0ijR9Lhl2EpMtlwhZqfG",
             "",
             "",
             "",
             "" ];

function updateThumbnail(id, str) {
    var doc = document.getElementById(id);
    for (var i = 0; i < doc.childNodes.length; i++) {
        if (doc.childNodes[i].className == "micro-timer-label") {
            doc.childNodes[i].textContent = str;
            break;
        }        
    }
}

function endThumbnail(id, str) {
    var doc = document.getElementById(id);
    doc.style.backgroundImage = "url('../Assets/Pictures/Whixmas/Day" + id.slice(-1) + "Thumbnail.png')";
    doc.href = urls[parseInt(id.slice(-1))];
    for (var i = 0; i < doc.childNodes.length; i++) {
        if (doc.childNodes[i].className == "micro-timer-label") {
            doc.childNodes[i].style.display = "None";
            break;
        }        
    }
}