import axios from "axios";
import { MyDate } from "../components/repeat components/Calendar/functions";

const $api = axios.create({
  baseURL: "https://test-groupbwt.herokuapp.com/",
});

export const API = {
  getConferences() {
    const promise = $api.get(`conferences`);
    return promise;
  },
  getConference(id) {
    const promise = $api.get(`conferences/${id}`);
    return promise;
  },
  addConference(data) {
    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("date", MyDate.getMySqlDate(data.date));
    formData.append("address", JSON.stringify(data.address));
    formData.append("country", data.country);
    const promise = $api.post(`conferences`, formData);
    return promise;
  },
  updateConference(data) {
    const formData = {
      title: data.title,
      date: MyDate.getMySqlDate(data.date),
      address: JSON.stringify(data.address),
      country: data.country,
    };
    const promise = $api.put(`conferences/${data.id}`, formData);
    return promise;
  },
  deleteConference(id) {
    const promise = $api.delete(`conferences/${id}`);
    return promise;
  },
};
