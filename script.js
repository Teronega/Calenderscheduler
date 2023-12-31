// Variable is button class from HTML.

var saveBtn = document.querySelector(".saveBtn");

// Extra console logs added just because.

console.log("Hello!");
console.log("Functionality test.");

// On button click, content in box is saved to localstorage.

$('.saveBtn').on('click', function(){
    var value = $(this).siblings('.description').val();
    var time = $(this).parent().attr('id');
    localStorage.setItem(time, value);
})

// Each line individually pulls class & textarea using div class #hour.

$('#hour-9 .description').val(localStorage.getItem('hour-9'))

$('#hour-10 .description').val(localStorage.getItem('hour-10'))

$('#hour-11 .description').val(localStorage.getItem('hour-11'))

$('#hour-12 .description').val(localStorage.getItem('hour-12'))

$('#hour-13 .description').val(localStorage.getItem('hour-13'))

$('#hour-14 .description').val(localStorage.getItem('hour-14'))

$('#hour-15 .description').val(localStorage.getItem('hour-15'))

$('#hour-16 .description').val(localStorage.getItem('hour-16'))

$('#hour-17 .description').val(localStorage.getItem('hour-17'))

$('#hour-18 .description').val(localStorage.getItem('hour-18'))

$('#hour-19 .description').val(localStorage.getItem('hour-19'))

$('#hour-20 .description').val(localStorage.getItem('hour-20'))

// Pulls current time from day.js

var time = dayjs().format('dddd, MMMM D, YYYY')

$('#currentDay').text(time)

function getTimeBlockColor(){
    var currentHour = dayjs().hour();

    $('.time-block').each(function(){
        var hour = parseInt($(this).attr('id').split('-')[1])

        if (hour < currentHour){
            $(this).addClass('past');
        } else if (hour === currentHour){
            $(this).addClass('present');
        } else {
            $(this).addClass('future');
        }
    })
}

//Determines by color past (GREY), present (RED), or future (GREEN).

getTimeBlockColor();