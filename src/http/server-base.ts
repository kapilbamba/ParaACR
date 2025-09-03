import axios from "axios";

export const appUrl = process.env.REACT_APP_BASEURL;
export const chatUrl = process.env.REACT_APP_SOCKET_URL;
export const getImgUrl = process.env.REACT_APP_GETIMAGEURL + "uploads/";
export const baseUrl = appUrl + "api/v1/";
export const fileUploadUrl = baseUrl + "uploads";

export const api = axios.create({
  baseURL: baseUrl,
  // timeout: 10000,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

export type HttpMethod = "get" | "post" | "put" | "delete";
export type HttpOption = {
  data?: string | FormData | object;
  params?: string | number | "undefined" | object;
  postfix?: string;
};

export const baseFunc = (endURL: string) => {
  return (method: HttpMethod, options?: HttpOption) => {
    const params = options?.params ? "/" + options.params : "";
    let url = `/${endURL}${params}`;
    if (options?.postfix) {
      url += options.postfix;
    }
    const header = {
      "Content-Type":
        options?.data instanceof FormData
          ? "multipart/form-data"
          : "application/json",
    };
    if (method.toLowerCase() === "get") {
      return api.get(url, {
        headers: {},
      });
    } else if (method.toLowerCase() === "post") {
      return api.post(url, options?.data, { headers: header });
    } else if (method.toLowerCase() === "put") {
      return api.put(url, options?.data, { headers: header });
    } else if (method.toLowerCase() === "delete") {
      if (options?.data)
        return api.delete(url, {
          headers: header,
          data: options?.data,
        });
      else
        return api.delete(url, {
          headers: header,
          data: JSON.stringify({ deleted: 1 }),
        });
    }
  };
};
