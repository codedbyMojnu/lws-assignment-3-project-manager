import findMonth from "./findMonth";

export default function formatDate(date) {
    const dateArray = date.split("-");
    const month = dateArray[1];
    const monthName = findMonth(month);
    return dateArray[2] + " " + monthName + ", " + dateArray[0];
}