import axios from "axios";
const BASE_URL = "http://localhost:8000/api/";
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxNjdlZTYxOGFlYjNjYjI1M2ZhNzFkMiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzNjg5NzE2MSwiZXhwIjoxNjM3MTU2MzYxfQ.F2lyimErd0ZB00mpHT2C6b02fQ04KRaYB1E27f2F4I4";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});
export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: `Bearer ${TOKEN}` },
});
