export const Validator = {
  title(conference, setError) {
    let objError = {};
    Object.keys(conference).forEach((key) => {
      if (
        (conference.title.length < 2 && conference.title.length !== 0) ||
        conference.title.length > 255
      ) {
        objError.title = "number of characters 2-255";
      }
      if (!conference[key]) {
        objError[key] = "required";
      }
    });
    if (Object.keys(objError).length !== 0) {
      setError(objError);
      throw new Error();
    }
  },
  coords(field, value, conference) {
    const addressCopy = { ...conference.address };
    const oneDotCheck = () => {
      let dot = false;
      const array = value.split("");
      array.forEach((el, index) => {
        if (el === "." && index > 0) {
          dot = !dot;
        }
      });
      return dot;
    };
    // Возможность писать отрицательные координаты
    if (value === "-") {
      addressCopy[field] = value;
      return addressCopy;
    }
    // Вохможность писать десятичные значения
    if (
      value[value.length - 1] === "." ||
      (value[value.length - 2] === "." && value[value.length - 1] === "0")
    ) {
      // Разрешена только 1 точка в value
      if (!oneDotCheck()) {
        throw new Error();
      }
      addressCopy[field] = value;
      return addressCopy;
    }
    // Очищаем инпут при отсутствии value
    if (!value) {
      addressCopy[field] = "";
      return addressCopy;
    }
    // Проверка на число
    if (!Number(value)) {
      throw new Error();
    }
    // Ограничение значений ввода для поля lng
    if ((field === "lng" && value < -185) || (field === "lng" && value > 185)) {
      throw new Error();
    }
    // Ограничение значений ввода для поля lat
    if ((field === "lat" && value < -85) || (field === "lat" && value > 85)) {
      throw new Error();
    }
    addressCopy[field] = Number(value);
    return addressCopy;
  },
};
