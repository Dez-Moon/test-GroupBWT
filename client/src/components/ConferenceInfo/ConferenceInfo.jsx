import "../../App.scss";
import { Badge } from "bootstrap-4-react/lib/components";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { API } from "../../api/api";
import Map from "../repeat components/Map/Map";
import ButtonsGroup from "../repeat components/ButtonsGroup/ButtonsGroup";

const ConferenceInfo = () => {
  const [conference, setConference] = useState();
  const params = useParams();
  useEffect(() => {
    API.getConference(params.id).then((res) => {
      setConference({ ...res.data, address: JSON.parse(res.data.address) });
    });
  }, []);
  if (!conference) return <></>;
  return (
    <div className='conference'>
      <h5 style={{ width: "100%" }}>{conference.title}</h5>
      <div className='info-container'>
        <div className='info'>
          <h6>Date:</h6>
          <Badge primary>{conference.date}</Badge>
        </div>
        <div className='info'>
          <h6>Country:</h6>
          <Badge primary>{conference.country}</Badge>
        </div>
      </div>
      {conference.address.lat && conference.address.lng && (
        <Map address={conference.address} />
      )}
      <ButtonsGroup conference={conference} backBtn deleteBtn />
    </div>
  );
};

export default ConferenceInfo;
