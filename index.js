
$(document).ready(function() {
    setInterval(function () {
        let time = new Date();
        let s = time.getSeconds().toString().length == 1 ? '0' + time.getSeconds() : time.getSeconds();
        let m = time.getMinutes().toString().length == 1 ? '0' + time.getMinutes() : time.getMinutes();
        let h = time.getHours().toString().length == 1 ? '0' + time.getHours() : time.getHours();
        const twentyFour = h + ' : ' + m + ' : ' + s;
        const twelve = time.toLocaleString();
        const months = ['January', 'February', 'March', 'April', 'May',
            'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        let tz = time.toString().match(/([A-Z]+[\+-][0-9]+.*)/)[1];


        $('#clock').html('<p>' + h + ' : ' + m + ' : ' + s + '</p>');
        $('#day').html('<p>' + days[time.getDay()] + '</p>');
        $('#date').html('<p>' + months[time.getMonth()] + ' ' + time.getDate() + ', ' + time.getFullYear() + '</p>');
        $('#timezone').html('<p>' + tz + '</p>');
        // console.log(typeof h);
        // console.log(h > 15 && h <= 21);
        // console.log(h);
        $('.clock').addClass(function() {
            let hour = new Date().getHours();
            if (hour>= 0 && hour <= 6){
                return "too-early";
            } else if (hour > 6 && hour <= 10) {
                return "morning";
            } else if (hour > 10 && h <= 15) {
                return "noonish";
            } else if (hour > 15 && hour < 21) {
                return "evening";
            } else if (hour >= 21 && hour <= 24) {
                return "night";
            } else {
                return "basic";
            }
        })


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

            $('#t1').html('<div class="bold-text"><p>Familiars</p></div><div class="drop"><p>' + calcTime(-6) + '</p><p class="little"> GMT-0600(Central Standard Time) </p></div>');
            $('#t2').html('<div class="bold-text"><p>The Future is NOW</p></div><div class="drop"><p>' + calcTime(+10) + '</p><p class="little"> GMT+1000(Papua New Guinea Time) </p></div>');
            $('#t3').html('<div class="bold-text"><p>If I could turn back time...</p></div><div class="drop"><p>' + calcTime(-12) + '</p><p class="little"> GMT-1200(International Date Line) </p></div>');
            }, 1000);


    $('#t1, #t2, #t3').on('mouseenter', event => {
        $(event.currentTarget).addClass('clock-shadow, hvr-float-shadow');
    }).on('mouseleave', event => {
        $(event.currentTarget).removeClass('clock-shadow, hvr-float-shadow');
    });


    $('.clock').on('mouseenter', event => {
        $(event.currentTarget).addClass('clock-shadow');
    }).on('mouseleave', event => {
        $(event.currentTarget).removeClass('clock-shadow');
    });

    // $('.c1').on('click', () => {
    //     $('#clock').css("color", "blue");
    // });
    //
    // $('.c2').on('click',() => {
    //     $('#clock').css("color", "red");
    // });
    // $('.c3').on('click',() => {
    //     $('#clock').css("color", "grey");
    // });


    $('.c1').on('click',() => {
        $('.clock').removeClass("orange green");
        $('.clock').toggleClass("aq");
    });

    $('.c2').on('click',() =>  {
        $('.clock').removeClass("aq green");
        $('.clock').toggleClass("orange");
    });

    $('.c3').on('click',() =>  {
        $('.clock').removeClass("orange green");
        $('.clock').toggleClass("green");
    });

    $('.la').click (function() {
        ('#clock').removeClass("ra");
        $('#clock').toggleClass("la");
    });
    $('.ra').click (function() {
        ('#clock').removeClass("la");
        $('#clock').toggleClass("ra");
    });
    // $('.hour-type').click (function() {
    //     $('.clock').toggleClass("hours-disp");
    // });

    // $('#clock').toggle(function() {
    //     $(this).html('<p>' + h + ' : ' + m + ' : ' + s + '</p>');
    //     }, function () {
    //     $(this).html('<p>' + time.toLocaleTimeString() + '</p>');
    // });


    // $('#showMore').toggle(function() {
    //     $(this).text('Before');
    // }, function() {
    //     $(this).text('After');
    // });



});