import { Badge, Button } from "bootstrap-4-react/lib/components";
import { BDiv } from "bootstrap-4-react/lib/components/dom";
import React from "react";
import { useNavigate } from "react-router-dom";
import { API } from "../../../../api/api";
import styles from "./styles.module.scss";

const Conference = React.memo(({ conference, setConferences }) => {
  const navigate = useNavigate();
  const clickEditBtn = (e) => {
    navigate(`edit/${conference.id}`);
    e.stopPropagation();
  };
  const clickDeleteBtn = async (e) => {
    e.stopPropagation();
    await API.deleteConference(conference.id);
    setConferences();
  };
  const clickToConference = () => {
    navigate(`/${conference.id}`);
  };
  return (
    <div className={styles.conference} onClick={clickToConference}>
      <h5> {conference.title}</h5>
      <div>Date: </div>
      <Badge primary>{conference.date}</Badge>
      <BDiv display='flex' style={{ gap: "5px" }}>
        <Button info onClick={clickEditBtn}>
          Edit
        </Button>
        <Button danger onClick={clickDeleteBtn}>
          Delete
        </Button>
      </BDiv>
    </div>
  );
});

export default Conference;
