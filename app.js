document.addEventListener("DOMContentLoaded", () => {
  const slackUserName = document.querySelector('[data-testid="slackUserName"]');
  const currentDay = document.querySelector(
    '[data-testid="currentDayOfTheWeek"]'
  );
  const utcTime = document.querySelector('[data-testid="currentUTCTime"]');

  const getCurrentDayOfTheWeek = () => {
    const daysOfTheWeek = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const today = new Date();
    console.log(daysOfTheWeek[today.getUTCDay()]);
    return daysOfTheWeek[today.getUTCDay()];
  };

  // const getUTCTime = () => {
  //   const time = new Date();
  //   console.log(time.getTime())
  //   return time.toUTCString();
  // };

  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  
  const getUTCTime = () => {
  const time = Date.now();
  const date = new Date(time);
  const monthIndex = date.getMonth();

  const monthName = months[monthIndex];

    return `${date.getDate()}, ${monthName} ${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
  };


  currentDay.textContent = getCurrentDayOfTheWeek();
  utcTime.textContent = getUTCTime();
  slackUserName.textContent = "Olawumi Oluwabusayo";
});