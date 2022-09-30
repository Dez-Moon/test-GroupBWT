import "../../App.scss";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { API } from "../../api/api";
import ButtonsGroup from "../repeat components/ButtonsGroup/ButtonsGroup";
import Calendar from "../repeat components/Calendar/Calendar";
import ConferenceTitle from "../repeat components/ConferenceTitle/ConferenceTitle";
import Coords from "../repeat components/Coords/Coords";
import CountriesDropdown from "../repeat components/CountriesDropdown/CountriesDropdown";
import Map from "../repeat components/Map/Map";

const UpdateConference = () => {
  const [conference, setConference] = useState();
  const params = useParams();
  const navigate = useNavigate();
  const props = { conference, setConference };
  useEffect(() => {
    API.getConference(params.id)
      .then((res) => {
        setConference({ ...res.data, address: JSON.parse(res.data.address) });
      })
      .catch(() => {
        navigate("/create/new");
      });
  }, []);
  if (!conference) return <></>;
  return (
    <div className='conference'>
      <ConferenceTitle {...props} />
      <Calendar {...props} />
      <Coords {...props} />
      <Map address={conference.address} />
      <CountriesDropdown {...props} />
      <ButtonsGroup conference={conference} backBtn deleteBtn saveBtn />
    </div>
  );
};

export default UpdateConference;
