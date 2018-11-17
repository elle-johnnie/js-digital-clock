
$(document).ready(function() {
    setInterval(function () {
        let time = new Date();
        let t = time.toLocaleTimeString();
        let date = time.getDate();
        // let tz = time.timeZoneName();
        $('#clock').html('<p>' + t + '</p>');
        $('#date').html('<p>' + time.getMonth()  + time.getUTCDate() + time.getYear() + '</p>');
        // $('#clock').html('<p class="time">' + t + '</p><p class="date">' + date + '</p><p class="zone">' + tz + '</p>');
    }, 1000);

});