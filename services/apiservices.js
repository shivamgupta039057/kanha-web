
import axios from "axios";
const baseurl = "http://localhost:7000";
export const imgBaseUrl = "http://localhost:7000";
// const baseurl = "http://159.89.174.140:7000";
// export const imgBaseUrl = "http://159.89.174.140:7000";

export const Apiservice = {
    get: async (endpoint) => {
        try {
            const res = await axios.get(baseurl + endpoint);
            if (res.data && res.data.success === false) {
                return res;
            }
            return res;
        } catch (error) {
            // toast.error(error.message);
        }
    },
    getAuth: async (endpoint, token) => {
        try {
            const res = await axios.get(baseurl + endpoint, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            if (res.data && res.data.success === false) {
                return res;
            }

            return res;
        } catch (error) {
            // toast.error(error.message)
            throw error;
        }
    },

    post: async (endpoint, body) => {
        try {
            const res = await axios.post(baseurl + endpoint, body);
            if (res.data && res.data.success === false) {
              
                return res;
            }
            return res;
        } catch (error) {
            // toast.error(error.message);
        }
    },

    postAuth: async (endpoint, body, token) => {
        try {
            const res = await axios.post(baseurl + endpoint, body, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            console.log("ffffffffffresresresresres", res);

            if (res.data && res.data.success === false) {
                // toast.error(res.data.message);
                return res;
            }
           
            return res;
        } catch (error) {
            // toast.error(error.message);
            throw error;
        }
    },
    postAPIAuthFormData: async (endpoint, body, token) => {
        try {
            const res = await axios.post(baseurl + endpoint, body, {
                headers: {
                    "Content-Type": "multipart/form-data",
                    Authorization: `Bearer ${token}`,
                },
            });
            if (res.data && res.data.success === false) {
                // toast.error(res.data.message);
                return res;
            }
            return res;
        } catch (error) {
            // toast.error(error.message);
            throw error;
        }
    },
    postAPI: async (endpoint, body) => {
        try {
            const res = await axios.post("https://ecommerce.imgglobal.in/backend/" + endpoint, body);
            if (res.data && res.data.success === false) {
                // toast.error(res.data.message);
                return res;
            }
            return res;
        } catch (error) {
            // toast.error(error.message);
        }
    }
};
