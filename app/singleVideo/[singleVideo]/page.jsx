import SinglePage from "../../../components/SinglePage/SinglePage";
import cacheRequest from "@/axios/apis/cacheRequest";
import { cookies } from "next/headers";

const getVideo = async (data) => {
  // return await cacheRequest().get(`video/${data}`, { revalidate: 60  });
  // return await cacheRequest().get(`video/${data}`, { cache: "force-cache" });
  const localStorageToken = cookies().get("token");

  if (localStorageToken?.value) {
    return await cacheRequest().get(`video/auth/${data}`, {
      cache: "no-store",
    });
  }
  return await cacheRequest().get(`video/${data}`, { cache: "no-store" });
};

const singleVideo = async ({ params }) => {
  // const videoData = await getVideo(`645b3d605aa8502188d36aed`);
  const videoData = await getVideo(params.singleVideo);
  return <SinglePage videoData={videoData.data} />;
};

export default singleVideo;
