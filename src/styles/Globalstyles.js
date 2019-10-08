import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const globalStyles = createGlobalStyle`
    ${reset};
    * {
        box-sizing:border-box;
        font-family: "Dotum,'돋움',Helvetica, Apple SD Gothic Neo ,sans-serif";
    }
    a {
        text-decoration: none;
        color: inherit;
    }
`;

export default globalStyles;
