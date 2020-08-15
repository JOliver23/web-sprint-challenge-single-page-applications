import styled from "styled-components";

export const SCon = styled.div`
width: auto;
height: 100vh;
background: linear-gradient(45deg, dodgerblue, papayawhip, red);
border: .3rem dotted white;
`;

export const SForm = styled.form`
display: flex;
flex-direction: column;
justify-content: center;
align-content: center;
padding-left: 25vw;
`;

export const HomeBanner = styled.img`
object-fit: cover;
object-position: -20% 0;

width: 100%;
height: 30vh;    

`;

export const WelcomeSign = styled.div`
display: flex;
flex-flow: row wrap;
justify-content: space-evenly;
`;

export const Title1 = styled.h1`
font-size: 28pt;
background: linear-gradient(270deg, dodgerblue, papayawhip, red);
border: .5rem dotted white;
`;

export const SNav = styled.nav`
display: flex;
flex-direction: row;
justify-content: space-evenly;
height: 5vh;
background:dodgerblue;
padding: 0 1rem;
border: .3rem double white;
`;

export const MenuDiv = styled.div`
width:50vw;
justify-self: center;
`;

export const OrderBtn = styled.button`
    position: relative;
    display: inline-block;
    box-sizing: border-box;
    margin: 0 40vw;
    border: none;
    border-radius: 2px;
    padding: 0 16px;
    min-width: 64px;
    height: 36px;
    vertical-align: middle;
    text-align: center;
    text-overflow: ellipsis;
    text-transform: uppercase;
    color: #fff;
    background-color: dodgerblue;
    box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
      0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
    font-family: "Roboto", "Segoe UI", BlinkMacSystemFont, system-ui,
      -apple-system;
    font-size: 14px;
    font-weight: 500;
    line-height: 36px;
    overflow: hidden;
    outline: none;
    cursor: pointer;
    transition: box-shadow 0.2s;

`;

export const NavBtn = styled.button`
    position: relative;
    display: inline-block;
    box-sizing: border-box;
    margin: 0 2rem;
    border: none;
    border-radius: 2px;
    padding: 0 16px;
    min-width: 64px;
    height: 36px;
    vertical-align: middle;
    text-align: center;
    text-overflow: ellipsis;
    text-transform: uppercase;
    color: #fff;
    background-color: dodgerblue;
    box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
      0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
    font-family: "Roboto", "Segoe UI", BlinkMacSystemFont, system-ui,
      -apple-system;
    font-size: 14px;
    font-weight: 500;
    line-height: 36px;
    overflow: hidden;
    outline: none;
    cursor: pointer;
    transition: box-shadow 0.2s;

`;