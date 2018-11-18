
$(document).ready(function() {
    setInterval(function () {
        let time = new Date();
        let s = time.getSeconds().toString().length == 1 ? '0'+ time.getSeconds() : time.getSeconds();
        let m = time.getMinutes().toString().length == 1 ? '0'+ time.getMinutes() : time.getMinutes();
        let h = time.getHours().toString().length == 1 ? '0'+ time.getHours() : time.getHours();

        const months = ['January','February','March','April','May',
            'June','July','August','September','October','November','December'];
        const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
        let tz = time.toString().match(/([A-Z]+[\+-][0-9]+.*)/)[1]
        // $('#clock').html('<p>' + time.getHours() + '</p>');
        $('#clock').html('<p>' + h + ' : ' + m + ' : ' + s + '</p>');
        $('#day').html('<p>' + days[time.getDay()] + '</p>');
        $('#date').html('<p>' + months[time.getMonth()]  + ' ' + time.getDate() + ', ' + time.getFullYear() + '</p>');
        $('#timezone').html('<p>' + tz + '</p>');
    }, 1000);

});