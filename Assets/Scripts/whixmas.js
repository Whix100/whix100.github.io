var datestart = new Date("Dec 01, 2021 00:00:00").getTime();
var d1event =   new Date("Dec 16, 2021 14:00:00").getTime();
var d2event =   new Date("Dec 17, 2021 14:00:00").getTime();
var d3event =   new Date("Dec 18, 2021 14:00:00").getTime();
var d4event =   new Date("Dec 19, 2021 14:00:00").getTime();
var d5event =   new Date("Dec 20, 2021 14:00:00").getTime();
var d6event =   new Date("Dec 21, 2021 14:00:00").getTime();
var d7event =   new Date("Dec 22, 2021 14:00:00").getTime();
var d8event =   new Date("Dec 23, 2021 14:00:00").getTime();
var d9event =   new Date("Dec 24, 2021 14:00:00").getTime();
var d10event =  new Date("Dec 25, 2021 14:00:00").getTime();

// Event Timers.
updateTimer("1", 50, datestart, d1event, updateThumbnail, startEvent);
updateTimer("2", 50, datestart, d2event, updateThumbnail, startEvent);
updateTimer("3", 50, datestart, d3event, updateThumbnail, startEvent);
updateTimer("4", 50, datestart, d4event, updateThumbnail, startEvent);
updateTimer("5", 50, datestart, d5event, updateThumbnail, startEvent);
updateTimer("6", 50, datestart, d6event, updateThumbnail, startEvent);
updateTimer("7", 50, datestart, d7event, updateThumbnail, startEvent);
updateTimer("8", 50, datestart, d8event, updateThumbnail, startEvent);
updateTimer("9", 50, datestart, d9event, updateThumbnail, startEvent);
updateTimer("10", 50, datestart, d10event, updateThumbnail, startEvent);

function makeDisplayNone(id, str) {
    document.getElementById(id).style.display = "None";
}

function makeDisplayBlock(id, str) {
    document.getElementById(id).style.display = "Block";
}

function updateThumbnail(id, str) {
    document.getElementById("d" + id.match(/\d+/) + "-timer").textContent = str;
}

const event_names = [
    "",
    "Day 1: Whixmas Advent Calendar",
    "Day 2: Portal 2",
    "Day 3: CLUE",
    "Day 4: Among Us",
    "Day 5: Minecraft Dropper",
    "Day 6: Gartic Phone",
    "Day 7: Minecraft Minigames",
    "Day 8: Fake It 'Till You Make It",
    "Day 9: Golf With Your Friends",
    "Day 10: Merry Whixmas"
];

const event_descriptions = [
    "",
    "On the first day of Whixmas, I am launching the 2021 Whixmas page on my website. On this page is an advent calendar counting down the days until Whixmas. Each day, as that day's video is released, the corresponding card on this site will reveil what the video for the day is and link to that video.",
    "On the second day of Whixmas, I play through multiple levels of Portal 2 with KingYakko.",
    "On the third day of Whixmas, we find out who the murderer is in a game of CLUE with ElovesSparkles, MedicWnatsPie, and CosierWolf.",
    "On the fourth day of Whixmas, my friends and I find out who's sus in Among Us with AnonymousMoon, BronyPlaysMC, CheshireCat, CosierWolf, ElovesSparkles, KingYakko5991, MedicWnatsPie, and Nasu.",
    "On the fifth day of Whixmas, AnonymousMoon, fluffysam1212, KingYakko5991, and I play the old Minecraft Dropper Map.",
    "On the sixth day of Whixmas, we try our artistry skills with Gartic Phone with AnonymousMoon, fluffysam1212, KingYakko5991, MedicWnatsPie, and TragicArc.",
    "On the seventh day of Whixmas, I play minigames on RSMV.net with CheshireCat, CosierWolf, ElovesSparkles, KingYakko5991, and MedicWnatsPie.",
    "On the eighth day of Whixmas, I try a new game show called Fake It 'Till You Make It with fluffysam1212 and KingYakko5991.",
    "On the ninth day of Whixmas, we try to get a hole in one in Golf With Your Friends with MedicWnatsPie, and Nasu.",
    "On the tenth day of Whixmas, my friends and I would like to wish you a Merry Whixmas and Happy Holidays!"
];

const event_links = [
    "",
    "https://www.youtube.com/watch?v=OrCFt02Iiqc&list=PLJ_qMeabVsYjcpfC7atXx-duuLGSMhCNo&index=1",
    "https://www.youtube.com/watch?v=xf1p5i3ZaDg&list=PLJ_qMeabVsYjcpfC7atXx-duuLGSMhCNo&index=2",
    "https://www.youtube.com/watch?v=eTB3xLk1SJ0&list=PLJ_qMeabVsYjcpfC7atXx-duuLGSMhCNo&index=3",
    "https://www.youtube.com/watch?v=pQkAJMbUrs4&list=PLJ_qMeabVsYjcpfC7atXx-duuLGSMhCNo&index=4",
    "https://www.youtube.com/watch?v=A8yMWOA3uf0&list=PLJ_qMeabVsYjcpfC7atXx-duuLGSMhCNo&index=5",
    "https://www.youtube.com/watch?v=w07ENmO-2_o&list=PLJ_qMeabVsYjcpfC7atXx-duuLGSMhCNo&index=6",
    "https://youtube.com/watch?v=",
    "https://youtube.com/watch?v=",
    "https://youtube.com/watch?v=",
    "https://youtube.com/watch?v="
];

function startEvent(id, str) {
    var id_number = id.match(/\d+/);
    
    document.getElementById("d" + id_number + "-banner").style.backgroundImage = "url('/Assets/Pictures/Whixmas/Day" + id_number + "Thumbnail.png')";
    document.getElementById("d" + id_number + "-event-label").textContent = event_names[parseInt(id_number)];
    document.getElementById("d" + id_number + "-timer").style.display = "None";
    document.getElementById("d" + id_number + "-description").textContent = event_descriptions[parseInt(id_number)];
    document.getElementById("d" + id_number + "-link").href = event_links[parseInt(id_number)];
}