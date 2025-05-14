import { createAlova } from 'alova';
import adapterFetch from 'alova/fetch';

export const defHttp = createAlova({
  baseURL: 'https://api.alovajs.dev',
  timeout: 60 * 1000,
  requestAdapter: adapterFetch(),
  beforeRequest(method) {
    console.log("beforeRequest:", method);
    if (!method.meta?.ignoreToken) {
      method.config.headers.token = 'xxx';
    }
  },
  responded: {
    onSuccess: async (response, method) => {
      console.log("onSuccess:", response, method);
      if (response.status >= 400) {
        throw new Error(response.statusText);
      }
      const json = await response.json();
      console.log("onSuccess json", json);
      if (json.code !== 200) {
        throw new Error(json.message);
      }

      if (method.meta?.isDownload) {
        return response.blob();
      }

      return json.data
    },
    onError: (err, method) => {
      console.log("onError:", err, method);
    },

    onComplete: async method => {
      console.log("onComplete:", method);
    },
  },
});