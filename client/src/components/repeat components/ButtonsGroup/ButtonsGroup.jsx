import { Button } from "bootstrap-4-react/lib/components";
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { API } from "../../../api/api";
import { ErrorContext } from "../../../App";
import { Validator } from "../functions";
import styles from "./styles.module.scss";

const ButtonsGroup = React.memo(
  ({ conference, backBtn, deleteBtn, saveBtn }) => {
    const { setError } = useContext(ErrorContext);
    const navigate = useNavigate();
    const clickBackBtn = () => {
      setError(undefined);
      navigate("/");
    };
    const clickDeleteBtn = async () => {
      await API.deleteConference(conference.id);
      setError(undefined);
      navigate("/");
    };
    const clickSaveBtn = async () => {
      try {
        Validator.title(conference, setError);
        if (conference.id) {
          await API.updateConference(conference);
        } else {
          await API.addConference(conference);
        }
        navigate("/");
      } catch {
        window.scrollBy(0, 0);
      }
    };
    return (
      <div className={styles.buttons}>
        {backBtn && (
          <Button secondary onClick={clickBackBtn}>
            Back
          </Button>
        )}
        {deleteBtn && (
          <Button danger onClick={clickDeleteBtn}>
            Delete
          </Button>
        )}
        {saveBtn && (
          <Button success onClick={clickSaveBtn}>
            Save
          </Button>
        )}
      </div>
    );
  }
);

export default ButtonsGroup;
