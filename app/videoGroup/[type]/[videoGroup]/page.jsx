import Block from "@/components/BlockContainer/Block/Block";
import BlockContainer from "@/components/BlockContainer/BlockContainer";
import cacheRequest from "../../../../axios/apis/cacheRequest";
import NoResult from "../component/NoResult";

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
  console.log(params.type, params.videoGroup);
  let videoGroupResult = [];
  if (Object.keys(requestType).includes(params.type)) {
    videoGroupResult = await requestType[params?.type](params?.videoGroup);
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
