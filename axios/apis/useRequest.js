import useApi from "../useApi";

const useRequest = () => {
  const Request = useApi();

  const logOut = async () => {
    return await Request.get(`logout`);
  };

  const signIn = async (data) => {
    return await Request.post("auth", data);
  };

  const signUp = async (data) => {
    return await Request.post("register", data);
  };

  const userData = async () => {
    return await Request.get("users/token", { next: { revalidate: 60 } });
  };

  const profileData = async (data) => {
    return await Request.patch(`users/${data.userId}`, data.info);
  };

  const userList = async () => {
    return await Request.get("list/userlist");
  };
  const addList = async (data) => {
    return await Request.post("list", data);
  };
  const patchList = async (data) => {
    return await Request.patch(`list/${data.id}`, data.data);
  };
  const removeList = async (data) => {
    return await Request.delete(`list/${data}`);
  };
  const addVideo = async (data) => {
    return await Request.post("video", data);
  };
  const updateOrder = async (data) => {
    return await Request.patch(`video/order`, data);
  };
  const getVideo = async (data) => {
    return await Request.get(`video/${data}`);
  };
  const deleteVideo = async (data) => {
    return await Request.delete(`video/${data}`);
  };
  const editVideo = async (data) => {
    return await Request.patch(`video/${data.url}`, data.data);
  };
  const mainSearch = async (data) => {
    return await Request.get(`video_group/${data}`);
  };
  const getComments = async (data) => {
    return await Request.get(`comment/${data}`);
  };
  const editComment = async (data) => {
    return await Request.patch(`comment/${data.url}`, data.data);
  };
  const addComment = async (data) => {
    return await Request.post("comment", data);
  };
  const updateUser = async (data) => {
    return await Request.patch(`users/${data.url}`, data.data);
  };
  const getReport = async (data) => {
    return await Request.get(`report/${data}`);
  };
  const addReport = async (data) => {
    return await Request.post("report", data);
  };
  const editReport = async (data) => {
    return await Request.patch(`report/${data.url}`, data.data);
  };

  return {
    addVideo,
    updateOrder,
    signIn,
    signUp,
    mainSearch,
    deleteVideo,
    userData,
    logOut,
    profileData,
    userList,
    addList,
    removeList,
    patchList,
    getVideo,
    editVideo,
    getComments,
    addComment,
    editComment,
    updateUser,
    getReport,
    addReport,
    editReport,
  };
};
export default useRequest;
