$(".distance").change(function () {
    let time = $(this).val().split(':').reduce((acc, time) => (60 * acc) + +time);
    let timeInSec = $(this).val().length == 5 ? time * 60 : time;
    let distance = $(this).attr("data-distance");
    let paceInSec = timeInSec / distance;
    $(".distance").each(function (index) {
        let distance = $(this).attr("data-distance");
        $(this).val(getTime(distance, paceInSec));
    });
});

function getTime(distance, paceInSec) {
    let totalTimeInSec = distance * paceInSec;
    return totalTimeInSec.toHHMMSS();
}

Number.prototype.toHHMMSS = function () {
    var sec_num = parseInt(this, 10);
    var hours = Math.floor(sec_num / 3600);
    var minutes = Math.floor((sec_num - (hours * 3600)) / 60);
    var seconds = sec_num - (hours * 3600) - (minutes * 60);
    if (hours < 10) { hours = "0" + hours; }
    if (minutes < 10) { minutes = "0" + minutes; }
    if (seconds < 10) { seconds = "0" + seconds; }
    return hours + ':' + minutes + ':' + seconds;
}