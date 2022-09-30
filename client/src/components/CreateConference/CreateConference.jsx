import React, { createContext, useState } from "react";
import "../../App.scss";
import "react-datepicker/dist/react-datepicker.css";
import Map from "../repeat components/Map/Map";
import Calendar from "../repeat components/Calendar/Calendar";
import Coords from "../repeat components/Coords/Coords";
import ButtonsGroup from "../repeat components/ButtonsGroup/ButtonsGroup";
import CountriesDropdown from "../repeat components/CountriesDropdown/CountriesDropdown";
import ConferenceTitle from "../repeat components/ConferenceTitle/ConferenceTitle";

export const Context = createContext();
const CreateConference = () => {
  const [conference, setConference] = useState({
    title: "",
    date: "",
    address: { lat: "", lng: "" },
    country: "",
  });
  const props = { conference, setConference };
  return (
    <div className='conference'>
      <Context.Provider value={{ conference, setConference }}>
        <ConferenceTitle {...props} />
        <Calendar {...props} />
        <Coords {...props} />
        <Map address={conference.address} />
        <CountriesDropdown {...props} />
        <ButtonsGroup conference={conference} backBtn saveBtn />
      </Context.Provider>
    </div>
  );
};

export default CreateConference;
