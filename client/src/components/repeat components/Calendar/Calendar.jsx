import { Button } from "bootstrap-4-react/lib/components";
import { BDiv } from "bootstrap-4-react/lib/components/dom";
import React, { useContext, useState } from "react";
import DatePicker from "react-datepicker";
import { ErrorContext } from "../../../App";
import ErrorHandler from "../Error/ErrorHandler";
import { MyError } from "../Error/functions";
import { MyDate } from "./functions";

const Calendar = React.memo(({ conference, setConference }) => {
  const { error, setError } = useContext(ErrorContext);
  const [isOpen, setIsOpen] = useState(false);
  const field = "date";
  const handleChange = (e) => {
    setIsOpen(!isOpen);
    setConference({ ...conference, date: e });
    MyError.clearError(field, error, setError);
  };
  const handleClick = (e) => {
    e.preventDefault();
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <h5>Date:</h5>
      <BDiv position='relative' display='flex' alignItems='center'>
        <Button info onClick={handleClick}>
          {MyDate.getMySqlDate(conference.date) || "Select date"}
        </Button>
        <ErrorHandler field={field} />
      </BDiv>
      {isOpen && (
        <div style={{ position: "absolute", zIndex: 999 }}>
          <DatePicker
            selected={MyDate.getJsDate(conference.date) || new window.Date()}
            onChange={handleChange}
            inline
          />
        </div>
      )}
    </div>
  );
});

export default Calendar;
