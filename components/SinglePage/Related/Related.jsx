import React, { useEffect } from "react";
import Wrapper from "./Related.styled";
import Block from "../../BlockContainer/Block/Block";
import SortableList, { SortableItem } from "react-easy-sort";
import arrayMove from "array-move";
import { useState } from "react";
import useRequest from "@/axios/apis/useRequest";

const Related = ({ videos, username, avatar, remove }) => {
  const { updateOrder } = useRequest();
  const [video, setVideo] = useState();

  const onSortEnd = (oldIndex, newIndex) => {
    setVideo((array) => {
      const newOrder = arrayMove(array, oldIndex, newIndex).map(
        (obj, index) => {
          return {
            _id: obj._id,
            order: index + 1,
          };
        }
      );
      console.log(newOrder, "/*******");
      updateOrder(newOrder);
      return arrayMove(array, oldIndex, newIndex);
    });
  };

  useEffect(() => {
    setVideo(videos.sort((a, b) => a.order - b.order));
  }, []);

  return (
    <Wrapper>
      {/* {video && ( */}
      <SortableList
        onSortEnd={onSortEnd}
        className="list"
        draggedItemClassName="dragged">
        {remove == true && (
          <p className="dragNote">you can order your videos list by dragging</p>
        )}

        {video?.map((block, index) => {
          if (!block.username) block.username = username;
          if (!block.avatar) block.avatar = avatar;
          if (block.remove === undefined) block.remove = remove;
          return (
            <>
              {remove == true ? (
                <SortableItem key={index}>
                  <div className="blockCont">
                    <Block {...block} />
                  </div>
                </SortableItem>
              ) : (
                <Block {...block} key={index} />
              )}
            </>
          );
        })}
      </SortableList>
      {/* )} */}
    </Wrapper>
  );
};

export default Related;

// const Related = ({ videos, username, avatar, remove }) => {
//   const [items, setItems] = useState([
//     "A",
//     "B",
//     "C",
//     "D",
//     "E",
//     "F",
//     "G",
//     "H",
//     "I",
//   ]);

//   const onSortEnd = (oldIndex, newIndex) => {
//     setItems((array) => arrayMove(array, oldIndex, newIndex));
//   };

//   return (
//     <SortableList
//       onSortEnd={onSortEnd}
//       className="list"
//       draggedItemClassName="dragged">
//       {videos?.map((block, index) => {
//         return (
//           <SortableItem key={index}>
//             <div className="item">{index}</div>
//             {/* <Block {...block} />; */}
//           </SortableItem>
//         );
//         // return (
//         //   <SortableItem key={block}>
//         //     <Block {...block} />;
//         //   </SortableItem>
//         // );
//       })}
//     </SortableList>
//   );
// };
// export default Related;
