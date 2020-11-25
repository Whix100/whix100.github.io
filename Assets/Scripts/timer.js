function updateTimer(id, interv, start, end, countEvent, expiredEvent) {
    var x = setInterval(function() {
        var now = new Date().getTime();
        var stdist = start - now;

        if (stdist <= 0) {
            var distance = end - now;

            if (distance <= 0) {
                clearInterval(x);
                expiredEvent(id, distance);
            } else {
                var days = Math.floor(distance / (1000 * 60 * 60 * 24));
                var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                var seconds = Math.floor((distance % (1000 * 60)) / 1000);
                
                countEvent(id, days + "d " + hours + "h " + minutes + "m " + seconds + "s ");
            }
        }
    }, interv);
}

function updateCount(id, str) {
    document.getElementById(id).innerHTML = str;
}