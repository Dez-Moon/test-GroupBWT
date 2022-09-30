export const MyDate = {
  getJsDate(date) {
    if (!date) return;
    if (typeof date === "string") {
      var dateParts = date.split("-");
      var jsDate = new window.Date(
        dateParts[0],
        dateParts[1] - 1,
        dateParts[2].substr(0, 2)
      );
      return jsDate;
    } else {
      return date;
    }
  },
  getMySqlDate(date) {
    if (typeof date === "object") {
      const day =
        date.getUTCHours() + date.getTimezoneOffset() / -60 >= 24
          ? date.getUTCDate() + 1
          : date.getUTCDate();
      const formatedDate = [
        date.getUTCFullYear(),
        date.getUTCMonth() + 1,
        day,
      ].map((el) => {
        if (el < 10) {
          el = `0${el}`;
        }
        return el;
      });
      return formatedDate.join("-");
    } else {
      return date;
    }
  },
};
