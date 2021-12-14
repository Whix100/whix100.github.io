function updateTimer(id, interval, start, end, countEvent, expiredEvent) {
    var x = setInterval(
        function() {
            var now = new Date().getTime();

            if (now - start >= 0) {
                var distance = end - now;
                
                if (distance <= 0) {
                    clearInterval(x);
                    expiredEvent(id, distance);
                } else {
                    var days = Math.floor(distance / 86400000);
                    var hours = Math.floor((distance % 86400000) / 3600000);
                    var minutes = Math.floor((distance % 3600000) / (60000));
                    var seconds = Math.floor((distance % 60000) / 1000);
                    
                    countEvent(id, days + "d " + hours + "h " + minutes + "m " + seconds + "s ");
                }
            }
        },
        interval);
}

function updateCount(id, str) {
    document.getElementById(id).innerHTML = str;
}