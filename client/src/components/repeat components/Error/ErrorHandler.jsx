import { BDiv } from "bootstrap-4-react/lib/components/dom";
import React, { useContext } from "react";
import { ErrorContext } from "../../../App";

const ErrorHandler = React.memo(({ field }) => {
  const { error } = useContext(ErrorContext);
  if (!error) return;
  const position = {
    right: `-${error[field]?.length * 8.7}px`,
  };
  return (
    <BDiv position='absolute' text='danger' style={position}>
      {error[field]}
    </BDiv>
  );
});

export default ErrorHandler;
