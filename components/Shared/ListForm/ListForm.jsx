import React, { useEffect, useState } from "react";
import { Wrapper } from "./ListForm.styled";
import useRequest from "../../../axios/apis/useRequest";
import { toast } from "react-toastify";

const ListForm = ({
  title = "",
  description = "",
  setTitle,
  setDescription,
  type = "Add",
  id,
  setEdit,
}) => {
  const [list, setList] = useState([]);

  const { userList, addList, removeList, patchList } = useRequest();
  const [actionType, setActionType] = useState(type);
  const [desc, setDesc] = useState(description);
  const [listInput, setListInput] = useState(title);
  const listAction = async () => {
    if (actionType == type) {
      if (listInput == "" || desc == "") {
        toast.error("List Title and Description is required", {
          position: toast.POSITION.TOP_CENTER,
          toastId: "uniqueId",
        });
        return;
      }

      if (type == "Add") {
        await addList({
          title: listInput,
          description: desc,
        });
      } else {
        await patchList({
          data: {
            title: listInput,
            description: desc,
          },
          id,
        });
        setEdit(false);
        setTitle(listInput);
        setDescription(desc);
      }
    } else if (actionType == "Remove") {
      await removeList(list[listInput]);
    }
    const listData = await userList();
    setList(listData.data);
    setListInput("");
    setDesc("");
    setActionType(type);
  };
  useEffect(() => {
    (async () => {
      const list = await userList();
      setList(list.data);
    })();
  }, []);

  return (
    <Wrapper>
      <div className="listForm">
        <div className="listInputWrapper">
          <input
            list="lists"
            placeholder="Add/Remove list"
            name="list"
            autoComplete="off"
            value={listInput}
            onChange={(e) => {
              Object.keys(list).includes(e.target.value)
                ? setActionType("Remove")
                : setActionType(type);
              setListInput(e.target.value);
            }}
          />
          {actionType == type && (
            <input
              placeholder="Description"
              name="description"
              autoComplete="off"
              value={desc}
              onChange={(e) => {
                setDesc(e.target.value);
              }}
            />
          )}
        </div>

        <datalist id="lists">
          {Object.keys(list).map((item, key) => (
            <option key={key}>{item}</option>
          ))}
        </datalist>

        <button typ="button" onClick={listAction}>
          {actionType}
        </button>
      </div>
    </Wrapper>
  );
};

export default ListForm;
