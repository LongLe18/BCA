import axiosClient from "./axiosClient";

const auth = {
    login: async (params) => {
        const url = `/auth/login`;
        return axiosClient.post(url, params);
    },
    register: async (params) => {
        const url = `/auth/register`;
        return axiosClient.post(url, params);
    },
};

export default auth;
