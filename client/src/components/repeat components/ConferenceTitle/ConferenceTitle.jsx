import { Form } from "bootstrap-4-react/lib/components";
import { BDiv } from "bootstrap-4-react/lib/components/dom";
import React, { useContext } from "react";
import { ErrorContext } from "../../../App";
import ErrorHandler from "../Error/ErrorHandler";
import { MyError } from "../Error/functions";

const ConferenceTitle = React.memo(({ conference, setConference }) => {
  const { error, setError } = useContext(ErrorContext);
  const field = "title";
  const onChange = (e) => {
    setConference({ ...conference, title: e.target.value });
    MyError.clearError(field, error, setError);
  };
  return (
    <div>
      <h5>Сonference title</h5>
      <BDiv position='relative' display='flex' alignItems='center'>
        <Form.Input
          placeholder='Сonference title'
          value={conference.title}
          onChange={onChange}
        />
        <ErrorHandler field={field} />
      </BDiv>
    </div>
  );
});

export default ConferenceTitle;
