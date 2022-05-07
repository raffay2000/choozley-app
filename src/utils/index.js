export const getDateFormat = (date) => {
    if(!date) return ""; 
    let fDate =
      date.getFullYear() +
      "-" +
      (date.getMonth() + 1) +
      "-" +
      date.getDate();

    return fDate
}