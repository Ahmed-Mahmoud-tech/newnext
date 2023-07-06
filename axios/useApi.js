import axios from "axios";
import { toast } from "react-toastify";
// import { useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { changePreloader } from "../store/slices/style";
import { setCookie } from "@/utilities/main";

// import { removeAuth } from "../store/slices/UserSlice";

const useApi = () => {
  let axiosObject = {
    baseURL: "http://localhost:5000/api/",
    withCredentials: true,
    headers: {
      "Access-Control-Expose-Headers": "token1",
    },
  };

  const mainInstance = axios.create(axiosObject);

  const dispatch = useDispatch();

  // let navigate = useNavigate();
  // useEffect(() => {
  mainInstance.interceptors.request.use(
    function (config) {
      //check if iam not in login page
      dispatch(changePreloader(true));
      const noAuth = ["/register", "/auth"];
      //! add auth
      if (!noAuth.includes(config.url)) {
        const localStorageToken = localStorage.getItem("token");
        config.headers.Authorization = localStorageToken
          ? `Bearer ${localStorageToken}`
          : "";
      }
      //! end auth
      //return the request with the token
      return config;
    },
    (error) => {
      //if err don't do any thing and i will handel it in my global handel error
      return Promise.reject(error);
    }
  );

  mainInstance.interceptors.response.use(
    async (res) => {
      dispatch(changePreloader(false));
      res.headers.get("token") &&
        localStorage.setItem("token", res.headers.get("token"));
      res.headers.get("token") &&
        setCookie("token", `Bearer ${res.headers.get("token")}`, 7);
      console.log("dddddddddd");
      return res;
    },
    async (err) => {
      console.log("8888888888888");
      dispatch(changePreloader(false));
      if (err.response) {
        //when the Access Token is expired
        if (err.response.status === 401) {
          localStorage.removeItem("token");
          // if the refresh token expired clear the local storage and navigate to login
          toast.error(err.response.data.message, {
            position: toast.POSITION.TOP_CENTER,
            toastId: "uniqueId",
          });
          //     dispatch(removeAuth());
          return Promise.reject(err);
        }
        //   // with validations errors show toasters
        if (err.response.status === 422) {
          for (const key in err.response.data.errors) {
            const element = err.response.data.errors[key];
            toast.error(element, {
              position: toast.POSITION.TOP_CENTER,
              toastId: "uniqueId",
            });
            for (const errMessage of element) {
              console.log(errMessage, "errMessage");
              toast.error(errMessage, {
                position: toast.POSITION.TOP_CENTER,
                toastId: "uniqueId",
              });
            }
          }
        }
        // else just show error message with
        // validations errors
        if (err.response.status === 403) {
          toast.error(err.response.data.message, {
            position: toast.POSITION.TOP_CENTER,
            toastId: "uniqueId",
          });
        }
        if (err.response.status === 429) {
          toast.error(err.response.data.message, {
            position: toast.POSITION.TOP_CENTER,
            toastId: "uniqueId",
          });
        }
        // servers error
        if (err.response.status === 404 || err.response.status === 500) {
          toast.error("something went wrong", {
            position: toast.POSITION.TOP_CENTER,
            toastId: "uniqueId",
          });
        }
        //internet and fire wall errors
        if (err.response.status === 0) {
          toast.error("no Internet connection", {
            position: toast.POSITION.TOP_CENTER,
            toastId: "uniqueId",
          });
        } else {
          toast.error("something went wrong", {
            position: toast.POSITION.TOP_CENTER,
            toastId: "uniqueId",
          });
        }
      }
      return Promise.reject(err);
    }
  );
  // }, []);
  return mainInstance;
};

export default useApi;
