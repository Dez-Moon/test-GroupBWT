import { Button } from "bootstrap-4-react";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./styles.module.scss";
import { API } from "../../api/api";
import Conference from "./components/Conference/Conference";

const Main = () => {
  const [conferences, setConferences] = useState();
  const navigate = useNavigate();
  useEffect(() => {
    if (!conferences) {
      API.getConferences().then((res) => {
        setConferences(res.data);
      });
    }
  }, [conferences]);
  const clickCreateBtn = () => {
    navigate("/create/new");
  };
  if (!conferences) return <></>;
  return (
    <div className={styles.mainPage}>
      <Button primary style={{ width: "200px" }} onClick={clickCreateBtn}>
        Create conference
      </Button>
      <div className={styles.conferences}>
        {conferences.map((conference) => (
          <Conference
            conference={conference}
            setConferences={setConferences}
            key={conference.id}
          />
        ))}
      </div>
    </div>
  );
};

export default Main;
