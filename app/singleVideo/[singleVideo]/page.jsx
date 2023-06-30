import SinglePage from "../../../components/SinglePage/SinglePage";
import cacheRequest from "@/axios/apis/cacheRequest";

const getVideo = async (data) => {
  // return await cacheRequest().get(`video/${data}`, { revalidate: 60  });
  // return await cacheRequest().get(`video/${data}`, { cache: "force-cache" });
  return await cacheRequest().get(`video/${data}`, { cache: "no-store" });
};

const singleVideo = async ({ params }) => {
  // const videoData = await getVideo(`645b3d605aa8502188d36aed`);
  const videoData = await getVideo(params.singleVideo);
  return <SinglePage videoData={videoData.data} />;
};

export default singleVideo;
