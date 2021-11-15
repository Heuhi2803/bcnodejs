import axios from "axios";
const BASE_URL = "http://localhost:8000/api/";
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxNjdlZTYxOGFlYjNjYjI1M2ZhNzFkMiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzNTY4Mzc4OCwiZXhwIjoxNjM1OTQyOTg4fQ.QNFsR4nlLitfnApvJQhs2xQW8jYf9DrQkG8IqTFA_LY";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});
export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer${TOKEN}` },
});
