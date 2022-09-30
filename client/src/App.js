import "./App.scss";
import Main from "./components/Main/Main";
import { Route, Routes } from "react-router-dom";
import UpdateConference from "./components/UpdateConference/UpdateConference";
import CreateConference from "./components/CreateConference/CreateConference";
import { createContext, useState } from "react";
import ConferenceInfo from "./components/ConferenceInfo/ConferenceInfo";

export const ErrorContext = createContext();

const App = () => {
  const [error, setError] = useState();
  return (
    <div className='App'>
      <div>{process.env.REACT_APP_API_KEY}</div>
      <ErrorContext.Provider value={{ error, setError }}>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/:id' element={<ConferenceInfo />} />
          <Route path='/create/new' element={<CreateConference />} />
          <Route path='/edit/:id' element={<UpdateConference />} />
        </Routes>
      </ErrorContext.Provider>
    </div>
  );
};

export default App;
