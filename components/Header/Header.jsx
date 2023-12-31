import Head from "next/head";
import Image from "next/image";
import Logo from "../../public/Images/youtube.png";
import Wrapper from "./Header.styled";
import { useState, useEffect, useRef } from "react";
import PopMenu from "./PopMenu/PopMenu";
import { useSelector, useDispatch } from "react-redux";
import { changeMode, changePop } from "../../store/slices/style";
import { usePathname } from "next/navigation";

import {
  BiHome,
  // BiHistory,
  BiListUl,
  BiVideo,
  BiLike,
  BiVideoPlus,
  BiDonateHeart,
  BiBell,
  BiMenu,
  BiSearchAlt,
  BiLogOutCircle,
  BiSupport,
} from "react-icons/bi";

import { MdOutlineSubscriptions } from "react-icons/md";
import { FaHandsHelping, FaBusinessTime } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { MdOutlineLightMode, MdOutlineDarkMode } from "react-icons/md";
import { setCookie, useOutside } from "../../utilities/main";
import { addUserData, clearUserData } from "../../store/slices/user";
import useRequest from "../../axios/apis/useRequest";
import { searchVideos } from "../../store/slices/videoResult";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { authRoutes } from "@/const";

export default function Header() {
  const [isMobile, setIsMobile] = useState(false);

  const [searchPop, setSearchPop] = useState(false);
  const [profile, setProfile] = useState(false);
  const [mainMenu, setMainMenu] = useState(false);
  const [modeText, setModeText] = useState();
  const [modeIcon, setModeIcon] = useState();
  const [mainSearchValue, setMainSearchValue] = useState();

  const profileButton = useRef(null);
  const menuButton = useRef(null);
  const searchButton = useRef(null);

  const currentMode = useSelector((state) => state.style.mode);
  const avatar = useSelector((state) => state.user.info.avatar);

  const dispatch = useDispatch();
  const { userData, logOut } = useRequest();

  const router = useRouter();
  const pathname = usePathname();

  const logout = () => {
    dispatch(clearUserData());
    localStorage.setItem("token", "");
    setCookie("token", "", 7);
    logOut();
  };

  const menuFun = () => {
    return [() => dispatch(changeMode(!currentMode)), logout];
  };

  const closeProfile = () => {
    setProfile(false);
  };
  const closeMenu = () => {
    setMainMenu(false);
  };
  useEffect(() => {
    window.innerWidth > 768 ? setIsMobile(false) : setIsMobile(true);
    (async () => {
      const localStorageToken = localStorage.getItem("token");
      if (localStorageToken) {
        const res = await userData();
        if (res) {
          dispatch(addUserData(res.data));
        }
      } else if (authRoutes.includes(pathname)) {
        router.push(`/`);
      }
    })();
  }, []);
  useOutside(profileButton, closeProfile);
  useOutside(menuButton, closeMenu);
  useOutside(searchButton, setSearchPop);

  useEffect(() => {
    setModeText(currentMode ? "Dark Mode" : "Light Mode"),
      setModeIcon(currentMode ? <MdOutlineDarkMode /> : <MdOutlineLightMode />);
  }, [currentMode]);

  const leftData = [
    {
      link: "/",
      text: "Home",
      icon: <BiHome />,
      needAuth: "all",
    },
    {
      link: "/videoGroup/userAction/like",
      text: "Likes",
      icon: <BiLike />,
      needAuth: true,
    },
    {
      link: "/videoGroup/userAction/watchLater",
      text: "Watch Later",
      icon: <FaBusinessTime />,
      needAuth: true,
    },
    {
      link: "/videoGroup/userAction/subscribe",
      text: "Subscribe",
      icon: <MdOutlineSubscriptions />,
      needAuth: true,
    },
    {
      link: "/videoGroup/userList/videos",
      text: "Your Lists",
      icon: <BiListUl />,
      needAuth: true,
    },
    // {
    //   link: "/",
    //   text: "History",
    //   icon: <BiHistory />,
    //   needAuth: true,
    // },
    {
      link: "/videoGroup/userAction/myVideos",
      text: "Your Videos",
      icon: <BiVideo />,
      needAuth: true,
    },
    {
      link: "/studio",
      text: "Create Video",
      icon: <BiVideoPlus />,
      needAuth: true,
    },
    // {
    //   link: "/",
    //   text: "Setting",
    //   icon: <SlSettings />,
    // },
    {
      link: "/",
      text: "Support Us",
      icon: <FaHandsHelping />,
      needAuth: "all",
    },
    {
      link: "/",
      text: "Donate",
      icon: <BiDonateHeart />,
      needAuth: "all",
    },
  ];

  const rightData = [
    {
      type: "link",
      link: "/profile",
      text: "Profile",
      icon: <CgProfile />,
      needAuth: true,
    },
    {
      type: "link",
      link: "/contactus",
      text: "Help",
      icon: <BiSupport />,
      needAuth: "all",
    },
    {
      type: "fun",
      funIndex: 0,
      link: "/",
      text: modeText,
      icon: modeIcon,
      needAuth: "all",
    },
    {
      type: "fun",
      funIndex: 1,
      link: "/",
      text: "LogOut",
      icon: <BiLogOutCircle />,
      needAuth: true,
    },
  ];

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Wrapper className="header">
        <div className="leftSec">
          <span
            className="menuIcon"
            onClick={() => setMainMenu(true)}
            ref={menuButton}>
            <BiMenu className="menu" />
            <PopMenu status={mainMenu} data={leftData} />
          </span>
          <Image
            className="logo"
            src={Logo}
            alt="logo"
            placeholder="plur"
            width="100"
          />
        </div>
        <div
          className={`searchParent ${isMobile && "isMobile"} ${
            searchPop && "searchPop"
          }`}>
          <form
            className="searchCont"
            ref={searchButton}
            action=""
            onSubmit={async (e) => {
              e.preventDefault();
              if (
                ((isMobile && searchPop) || !isMobile) &&
                mainSearchValue?.trim()
              ) {
                router.push(`/videoGroup/search/${mainSearchValue}`);
              } else if (isMobile) {
                setSearchPop(true);
              }
            }}>
            <input
              type="text"
              className="searchForm"
              value={mainSearchValue}
              onChange={(e) => setMainSearchValue(e.target.value)}
            />
            <button type="submit" className="mic">
              <BiSearchAlt />
            </button>
          </form>
        </div>
        <div className="rightSec">
          <div
            className="support"
            onClick={() => {
              dispatch(changePop("site-video"));
            }}>
            <FaHandsHelping />
          </div>
          {avatar ? (
            <>
              <Link href="/studio">
                <div className="create">
                  <BiVideoPlus />
                </div>
              </Link>

              {/* <div className="notification">
                <span className="count">+9</span>
                <BiBell />
              </div> */}
            </>
          ) : (
            <button
              type="button"
              className="login"
              onClick={() => dispatch(changePop("auth"))}>
              LogIn
            </button>
          )}
          <div
            className="profile"
            onClick={() => {
              setProfile(true);
            }}
            ref={profileButton}
            style={{ backgroundImage: `url(${avatar ? avatar : ""})` }}>
            {!avatar && "U"}
            <PopMenu
              status={profile}
              right={"0"}
              data={rightData}
              fun={menuFun}
            />
          </div>
        </div>
      </Wrapper>
    </div>
  );
}
