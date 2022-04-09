import styled from "styled-components";
import media from "./media";

    export const Body = styled.body`
        margin: 0;
        font-family: 'Sora', sans-serif;

        h1{
            font-size: 2.8rem
        }
    `

    export const Container = styled.div`
        margin-left: 5vw;
        margin-right: 5vw;

        ${media.widescreen`
            max-width: 1100px;
            margin-left: auto;
            margin-right: auto;
        `}
    `

    export const Btn = styled.a`
        background-color: red;
        padding: 40px;

        :hover{
            background-color: blue;
        }
    `