import Block from "@/components/BlockContainer/Block/Block";
import BlockContainer from "@/components/BlockContainer/BlockContainer";
import cacheRequest from "../../../../axios/apis/cacheRequest";
import NoResult from "../component/NoResult";
import ClientRedirect from "@/components/Shared/ClientRedirect/ClientRedirect";

const searchRequest = (videoGroup) => {
  return cacheRequest().get(`video_group/${videoGroup}`, { cash: "no-store" });
};
const userListRequest = async (videoGroup) => {
  return cacheRequest().get(`video_group/users_list`, { cash: "no-store" });
};
const userActionRequest = (videoGroup) => {
  if (videoGroup == "subscribe") {
    return cacheRequest().get(`video_group/subscribe`, {
      cash: "no-store",
    });
  }
  return cacheRequest().get(`video_group/users_action/${videoGroup}`, {
    cash: "no-store",
  });
};

const requestType = {
  userList: userListRequest,
  userAction: userActionRequest,
  search: searchRequest,
};

//    videoImage, title, username, updatedAt, videoLink, like, views, _id, videoLength, remove, avatar

export default async function videoGroup({ params }) {
  let videoGroupResult = [];
  console.log(params.type, params.videoGroup);
  if (Object.keys(requestType).includes(params.type)) {
    try {
      videoGroupResult = await requestType[params?.type](params?.videoGroup);
    } catch (err) {
      if (err?.response?.status == 401) return <ClientRedirect path={"/"} />;
    }
  }
  return (
    <main>
      {videoGroupResult?.data?.length > 0 ? (
        <BlockContainer>
          {videoGroupResult.data.map((block, index) => {
            console.log(block, "this is my block");
            return <Block {...block} key={index} />;
          })}
        </BlockContainer>
      ) : (
        <NoResult />
      )}
    </main>
  );
}
