import { LoginPayload } from "@/models";
import axiosClient from "./axios-client";

export const authApi = {
  login(payload: LoginPayload) {
    return axiosClient.post("/auth/login", payload);
  },

  logout() {
    return axiosClient.post("/auth/logout");
  },

  //   getUserInfo() {
  //     return axiosClient.get("/auth/user-info");
  //   },
};
