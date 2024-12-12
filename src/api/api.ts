import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { DEBUG, HOST } from "./settings";
import { ApiError } from "./types";
import { store_get } from "../storage";

class Api {
  static handleError(error: any): ApiError {
    const err: ApiError = {
      msg: error?.response?.data || "unknown error",
      error,
    };
    if (DEBUG) {
      console.log("ApiError:", err);
    }
    return err;
  }

  static creds(): Promise<Record<string, string>> {
    return new Promise((resolve, reject) => {
        store_get<string>("token").then(token => {
            if (token) {
                resolve({"x-auth": token});
            } else resolve({});
        }).catch(e => {
            console.log(e);
            resolve({});
        });
    })
  }

  static multipart(): Record<string, string> {
    return { "Content-Type": "multipart/form-data" };
  }

  static async get(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse> {
    let creds = await this.creds();
    return new Promise((resolve, reject) => {
      axios
        .get(`${HOST}${url}`, {
          ...config,
          headers: { ...config?.headers, ...creds },
        })
        .then((res) => {
          return resolve(res);
        })
        .catch((err) => {
          return reject(this.handleError(err));
        });
    });
  }

  static async post<D>(
    url: string,
    data?: D,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse> {
    let creds = await this.creds();
    return new Promise((resolve, reject) => {
      axios
        .post(`${HOST}${url}`, data, {
          ...config,
          headers: { ...config?.headers, ...creds },
        })
        .then((res) => {
          return resolve(res);
        })
        .catch((err) => {
            Object.keys(err.request).forEach(k => {
                console.log(`${k}: ${err.request[k]}`);
            })
          return reject(this.handleError(err));
        });
    });
  }

  static async patch<D>(
    url: string,
    data?: D,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse> {
    let creds = await this.creds();
    return new Promise((resolve, reject) => {
      axios
        .patch(`${HOST}${url}`, data, {
          ...config,
          headers: { ...config?.headers, ...creds },
        })
        .then((res) => {
          return resolve(res);
        })
        .catch((err) => {
          return reject(this.handleError(err));
        });
    });
  }

  static async delete(
    url: string,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse> {
    let creds = await this.creds();
    return new Promise((resolve, reject) => {
      axios
        .delete(`${HOST}${url}`, {
          ...config,
          headers: { ...config?.headers, ...creds },
        })
        .then((res) => {
          return resolve(res);
        })
        .catch((err) => {
          return reject(this.handleError(err));
        });
    });
  }

  static async getData<T>(
    url: string,
    config?: AxiosRequestConfig
  ): Promise<T> {
    return (await this.get(url, config)).data as T;
  }

  static async postData<T, D>(
    url: string,
    data?: D,
    config?: AxiosRequestConfig
  ): Promise<T> {
    return (await this.post<D>(url, data, config)).data as T;
  }

  static async patchData<T, D>(
    url: string,
    data?: D,
    config?: AxiosRequestConfig
  ): Promise<T> {
    return (await this.patch<D>(url, data, config)).data as T;
  }

  static async deleteData<T>(
    url: string,
    config?: AxiosRequestConfig
  ): Promise<T> {
    return (await this.delete(url, config)).data as T;
  }
}

export default Api;