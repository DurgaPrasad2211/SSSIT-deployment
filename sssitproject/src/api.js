import axios from "axios";

const api = axios.create({
  baseURL: "/api/",   // 🔥 THIS IS THE KEY FIX
});

export default function API(url, method = "GET", data = null) {
  return api({
    url,
    method,
    data,
  }).then(res => res.data);
}
