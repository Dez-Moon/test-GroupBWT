import { Dropdown } from "bootstrap-4-react/lib/components";
import { BDiv } from "bootstrap-4-react/lib/components/dom";
import React, { useContext } from "react";
import { ErrorContext } from "../../../App";
import ErrorHandler from "../Error/ErrorHandler";
import { MyError } from "../Error/functions";
import { countries } from "./countries-data";

const CountriesDropdown = React.memo(({ conference, setConference }) => {
  const { error, setError } = useContext(ErrorContext);
  const field = "country";
  const handleClick = (country) => {
    setConference({ ...conference, country: country.text });
    MyError.clearError(field, error, setError);
  };
  return (
    <Dropdown>
      <BDiv position='relative' display='flex' alignItems='center'>
        <Dropdown.Button info id='dropdownMenuButton'>
          {conference.country || "Choose a country"}
        </Dropdown.Button>
        <Dropdown.Menu
          aria-labelledby='dropdownMenuButton'
          style={{
            maxHeight: "200px",
            overflowY: "scroll",
            width: "200px",
          }}
        >
          {countries.map((country) => (
            <Dropdown.Item
              key={country.text}
              style={{
                cursor: "pointer",
                overflowWrap: "break-word",
                whiteSpace: "normal",
                borderBottom: "0.5px solid gray",
              }}
              onClick={() => handleClick(country)}
            >
              {country.text}
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
        <ErrorHandler field={field} />
      </BDiv>
    </Dropdown>
  );
});

export default CountriesDropdown;
