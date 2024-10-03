import {createGlobalStyle} from "styled-components";
import "@fontsource/kaushan-script";
import "@fontsource/sirin-stencil";
const GlobalStyles=createGlobalStyle`
*,*::before,*::after{
margin:0;
padding:0;
}

body{
${'' /* font-family:"Sirin Stencil"; */}
font-family: cursive;
overflow-x:hidden;
text-color:white;
background: linear-gradient(180deg, #ffffff 0%, #000000 100%)

}
h1,h2,h3,h4,h5,h6{
margin:0;
padding:0;
}

a{
color:inherit;
text-decoration:none;
}


`
export default GlobalStyles;