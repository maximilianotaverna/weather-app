export const displayDate = (iDate) => {
  let iMonth = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let iDay = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = iDay[iDate.getDay()];
  let date = iDate.getDate();
  let month = iMonth[iDate.getMonth()];
  let year = iDate.getFullYear();

  return `${day} ${date} ${month} ${year}`;
};
