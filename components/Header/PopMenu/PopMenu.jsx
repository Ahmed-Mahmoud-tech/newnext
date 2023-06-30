import Link from "next/link";
import React from "react";
import Wrapper from "./PopMenu.styled";
import { useSelector } from "react-redux";
const PopMenu = ({ status, right, data, fun }) => {
  const isLogin = useSelector((state) => state.user.info.username);
  return (
    <>
      {status && (
        <Wrapper right={right}>
          <ul>
            {data.map((item, index) => {
              console.log(
                (isLogin?.length > 0 && item.needAuth == true) ||
                  (isLogin?.length == 0 && item.needAuth == false) ||
                  item.needAuth == "all"
              );
              if (
                (isLogin?.length > 0 && item.needAuth == true) ||
                (isLogin?.length == 0 && item.needAuth == false) ||
                item.needAuth == "all"
              ) {
                return (
                  <li
                    key={index}
                    onClick={() =>
                      item.type === "fun" && fun()[item.funIndex]()
                    }>
                    <Link href={item.type !== "fun" ? item.link : ""}>
                      <span className="icon">{item.icon}</span>
                      <span>{item.text}</span>
                    </Link>
                  </li>
                );
              }
            })}
          </ul>
        </Wrapper>
      )}
    </>
  );
};

export default PopMenu;
