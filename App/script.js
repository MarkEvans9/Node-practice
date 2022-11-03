const dateInfo = document.getElementById("date");

const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "June",
  "July",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
const now = new Date();
const a = `${now.getDay()}`.padStart(2, 0);
const day = now.getDay();
const month = now.getMonth();
const date = `${now.getDate()}`.padStart(2, 0);

const hour = `${
  now.getHours() > 12 ? now.getHours() - 12 : now.getHours()
}`.padStart(2, 0);
const minutes = `${now.getMinutes()}`.padStart(2, 0);
const period = now.getHours() > 12 ? "PM" : "AM";

dateInfo.textContent = `${days[day]} | ${months[month]} ${a} | ${hour}:${minutes}${period}`;

// console.log(navigator.);
// console.log(
//   new Intl.DateTimeFormat(navigator.language, {
//     month: "short",

//     hour: "2-digit",
//     weekday: "short",
//     minute: "2-digit",
//   }).format(now)
// );
