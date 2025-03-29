function showDate() {
    let today = new Date();
    let formattedDate = today.getDate() + "/" + today.toLocaleString('default', { month: 'long' }) + "/" + today.getFullYear();
    document.getElementById("dateDisplay").innerHTML = formattedDate;
}

function showTime() {
    let now = new Date();
    document.getElementById("timeDisplay").innerHTML = now;
}
