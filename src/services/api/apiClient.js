import axios from "axios";

export const apiClient = axios.create({
  baseURL:
    import.meta.env.REACT_APP_API_URL ||
    "https://674d167154e1fca9290e519c.mockapi.io",
  headers: {
    "Content-Type": "application/json",
  },
});
