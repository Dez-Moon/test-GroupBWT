import { Form } from "bootstrap-4-react/lib/components";
import React from "react";
import { Validator } from "../functions";
import styles from "./styles.module.scss";

const Coords = React.memo(({ conference, setConference }) => {
  const setCoordinates = (field, value) => {
    try {
      const address = Validator.coords(field, value, conference);
      setConference({ ...conference, address });
    } catch {}
  };
  return (
    <div className={styles.coords}>
      <h5>Address:</h5>
      <div className={styles.coord}>
        <label htmlFor='lat'>lat:</label>
        <Form.Input
          placeholder='lat'
          value={conference.address.lat}
          onChange={(e) => {
            setCoordinates("lat", e.target.value);
          }}
        />
      </div>
      <div className={styles.coord}>
        <label htmlFor='lng'>lng:</label>
        <Form.Input
          placeholder='lng'
          value={conference.address.lng}
          onChange={(e) => {
            setCoordinates("lng", e.target.value);
          }}
        />
      </div>
    </div>
  );
});

export default Coords;
