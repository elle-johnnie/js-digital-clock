
$(document).ready(function() {
    setInterval(function () {
        let time = new Date();
        let s = time.getSeconds().toString().length == 1 ? '0' + time.getSeconds() : time.getSeconds();
        let m = time.getMinutes().toString().length == 1 ? '0' + time.getMinutes() : time.getMinutes();
        let h = time.getHours().toString().length == 1 ? '0' + time.getHours() : time.getHours();

        const months = ['January', 'February', 'March', 'April', 'May',
            'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        let tz = time.toString().match(/([A-Z]+[\+-][0-9]+.*)/)[1];

        $('#clock').html('<p>' + h + ' : ' + m + ' : ' + s + '</p>');
        $('#day').html('<p>' + days[time.getDay()] + '</p>');
        $('#date').html('<p>' + months[time.getMonth()] + ' ' + time.getDate() + ', ' + time.getFullYear() + '</p>');
        $('#timezone').html('<p>' + tz + '</p>');
        console.log(typeof h);
        console.log(h > 15 && h <= 21);
        console.log(h);
        $('.clock').addClass(function(h) {
            switch (h) {
                case h >= 0 && h <= 6:
                    return "too-early";
                case h > 6 && h <= 10:
                    return "morning";
                case h >= 11 && h <= 15:
                    return "noonish";
                case h > 15 && h <= 21:
                    return "evening";
                case h > 21 && h < 24:
                    return "night";
                default:
                    return "basic";
            }
    });


    }, 1000);

    /**
     * function to calculate local time
     * in a different city
     * given the city's UTC offset
     */

        setInterval(function () {
            function calcTime(offset) {
                // adapted from
                // http://www.techrepublic.com/article/convert-the-local-time-to-another-time-zone-with-this-javascript/6016329
                // create Date object for current location
                var d = new Date();

                // convert to msec
                // add local time zone offset
                // get UTC time in msec
                var utc = d.getTime() + (d.getTimezoneOffset() * 60000);

                // create new Date object for different city
                // using supplied offset
                var nd = new Date(utc + (3600000 * offset));

                // return time as a string
                return nd.toLocaleString();
            }

            $('#t2').html('<p class="bold-text"> Familiars </p><p>' + calcTime(-6) + '</p><p class="little"> GMT-0600(Central Standard Time) </p>');
            $('#t3').html('<p class="bold-text"> The Future is Now </p><p>' + calcTime(+5.5) + '</p><p class="little"> GMT+0550(India Standard Time) </p>');
            $('#t4').html('<p class="bold-text"> If I could turn back time...</p><p>' + calcTime(-12) + '</p><p class="little"> GMT-1200(International Date Line) </p>');
            }, 1000);



});