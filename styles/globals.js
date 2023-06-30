import { createGlobalStyle } from "styled-components";

const whiteBackground = (props) => (props?.mode == true ? "#fff" : "#0e0e0e");
const whiteColor = (props) => (props?.mode == true ? "#fff" : "#000");
const blackBackground = (props) => (props?.mode == true ? "#0e0e0e" : "#fff");
const blackColor = (props) => (props?.mode == true ? "#000" : "#fff");
const gradient_2 = (props) => (props?.mode == true ? "#ffffff20" : "#00000020");
const gradient_1 = (props) => (props?.mode == true ? "#00000020" : "#ffffff20");
const gradient0 = (props) => (props?.mode == true ? "#00000040" : "#ffffff40");
const gradient1 = (props) => (props?.mode == true ? "#00000080" : "#ffffff80");
const gradient2 = (props) => (props?.mode == true ? "#000000d1" : "#ffffffd1");

const GlobalStyle = createGlobalStyle`
:root {
  --smallFont: 12px;
  --normalFont: 14px;
  --largeFont: 20px;
  --hugeFont: 35px;
  --primary-background: red;
  --white-background: ${whiteBackground};
  --gray-background: #808080ab;
  --black-background: ${blackBackground};
  --white-color: ${whiteColor};
  --black-color: ${blackColor};
  --placeholder-background: #13121266;
  --gradient_2:${gradient_2};
  --gradient_1:${gradient_1};
  --gradient0:${gradient0};
  --gradient1:${gradient1};
  --gradient2:${gradient2};
}
/********************* */



  /****************** */
html,
body {
  padding: 0;
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  color: var(--black-color);
  background: var(--white-background);
  min-height:100vh;
  /* color: var(--white-color);
  background: var(--black-background); */
}
#__next{
  min-height:100vh;

}

* {
  box-sizing: border-box;
}

/* width */
::-webkit-scrollbar {
  width: 5px;
}

/* Track */
::-webkit-scrollbar-track {
  background: var(--gradient0); 
}
 
/* Handle */
::-webkit-scrollbar-thumb {
  background: var(--gradient1); 
  border-radius:15px
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: var(--gradient2); 
}

a {
  color: inherit;
  text-decoration: none;
  user-drag: none;  
   user-select: none;
   -moz-user-select: none;
   -webkit-user-drag: none;
   -webkit-user-select: none;
   -ms-user-select: none;
}
img {
  max-width: 100%;
  height: auto;
  user-drag: none;  
   user-select: none;
   -moz-user-select: none;
   -webkit-user-drag: none;
   -webkit-user-select: none;
   -ms-user-select: none;
}

p {
  margin: 0;
}
 
.ValidationErrorMessage{
  color:red;
  font-size:var(--smallFont);
    margin-top: -3px;
    margin-bottom: 3px;
 }
`;

export default GlobalStyle;
