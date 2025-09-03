import axios from "axios";
import { fileUploadUrl } from "src/http/server-base";
import imageCompression from "browser-image-compression";
import { blob2file } from "src/utils";
const options = {
  maxSizeMB: 1,
  maxWidthOrHeight: 800,
  useWebWorker: true,
};

const useImage = () => {
  const uploadImage = async (
    file: any,
    type = "common",
    compressed = false
  ) => {
    const compressedFile = await imageCompression(file, options);
    const file2 = blob2file(compressedFile, compressedFile.name);
    let file3 = compressed ? file2 : file;
    let Formdata = new FormData();
    let progress = 0;
    Formdata.append(
      "FileName",
      file3,
    );
    Formdata.append("Type", type);
    const config = {
      onUploadProgress: (progressEvent: any) => {
        progress = Math.round(
          (100 * progressEvent.loaded) / progressEvent.total
        );
      },
      headers: {
        "Content-Type": "multipart/form-data",
      },
    };
    try {
      const response = await axios.post(fileUploadUrl, Formdata, config);
      if (response.status === 200)
        return { data: response.data, progress: progress, err: null };
      else return { err: "Image could not uploaded", data: null };
    } catch (error) {
      return { err: "Something went wrong", data: null };
    }
  };
  const downloadImage = async (src: string) => {
    try {
      const response = await axios.get(src, {
        responseType: "blob",
      });
      if (response.status === 200) return { data: response.data, err: null };
      else return { err: "Image could not downloaded" };
    } catch (err) {
      return { err: "Something went wrong", data: null };
    }
  };
  const uploadFile = async (file: any, type = "common") => {
    let Formdata = new FormData();
    let progress = 0;
    Formdata.append("FileName", file);
    Formdata.append("Type", type);
    const config = {
      onUploadProgress: (progressEvent: any) => {
        progress = Math.round(
          (100 * progressEvent.loaded) / progressEvent.total
        );
      },
      headers: {
        "Content-Type": "multipart/form-data",
      },
    };
    try {
      const response = await axios.post(fileUploadUrl, Formdata, config);
      if (response.status === 200)
        return { data: response.data, progress: progress, err: null };
      else return { err: "Image could not uploaded", data: null };
    } catch (error) {
      return { err: "Something went wrong", data: null };
    }
  };
  return {
    uploadImage,
    downloadImage,
    uploadFile
  };
};
export default useImage;
