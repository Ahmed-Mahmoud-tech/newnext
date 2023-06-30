import { useEffect } from "react";

export function useOutside(ref, state) {
  function handleClickOutside(event) {
    if (ref.current && !ref.current.contains(event.target)) {
      state();
    }
  }

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return;
}

export const setCookie = (name, value, days) => {
  const expirationDate = new Date();
  expirationDate.setDate(expirationDate.getDate() + days);

  const cookieValue = `${encodeURIComponent(name)}=${encodeURIComponent(
    value
  )}; expires=${expirationDate.toUTCString()}; path=/`;
  document.cookie = cookieValue;
};

// export async function useLogIn() {
//   const dispatch = useDispatch();
//   const { signIn } = useRequest();

//   const res = await signIn(values);
//   if (res) {
//     localStorage.setItem("token", res.data.userInfo.accessToken);
//     dispatch(addUserData(res.data.userInfo));
//     dispatch(changePop(""));
//   }
// }
