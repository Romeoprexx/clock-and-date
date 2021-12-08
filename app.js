function displayClockAndDay() {

    const currentTime = new Date();

    let hoursOfTheDay = currentTime.getHours();
    let minutesOfTheDay = currentTime.getMinutes();
    let secondsOfTheDay = currentTime.getSeconds();
    let weeksOfTheDay = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
    let todaysDate = weeksOfTheDay[currentTime.getDay()];
    let date = currentTime.getDate();
    let monthOfTheYear = currentTime.toLocaleString("default", {
        month: "long"
    });
    let year = currentTime.getFullYear();
    let period = "AM";

    if (hoursOfTheDay > 12) {
        hoursOfTheDay-= 12;
        period = "PM";
    }

    if  (hoursOfTheDay === 0){
        hoursOfTheDay = 12;
        period = "AM";
    }

    hoursOfTheDay = hoursOfTheDay < 10 ? "0" + hoursOfTheDay : hoursOfTheDay;
    minutesOfTheDay = minutesOfTheDay < 10 ? "0" + minutesOfTheDay : minutesOfTheDay;
    secondsOfTheDay = secondsOfTheDay < 10 ? "0" + secondsOfTheDay : secondsOfTheDay;

    let time = hoursOfTheDay + " : " + minutesOfTheDay + " : " + secondsOfTheDay + " "+ period;

    document.getElementById('clock').innerHTML = '<div>' + time + " " + '<span>' + todaysDate + "," + " " + monthOfTheYear + " " + date +"," + " "+ year +'</span><//div>'

}
setInterval(displayClockAndDay, 1000);