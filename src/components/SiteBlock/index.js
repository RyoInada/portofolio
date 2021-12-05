import React from "react";
// import styled from "styled-components";
import styled, { keyframes } from "styled-components";

const move = keyframes`
0% { transform: translateY(-2px)         }
    50% { transform: translateY(4px) translateX(0px)        }
    100% { transform: translateY(-2px)         }
`;

const Cb = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 50%;
  line-height: 1.5;
  color: var(--white);

  position: relative;

  margin-top: 30px;
  animation: ${move} 4s ease infinite;

  a {
    font-weight: bolder;
    text-decoration: none;
    color: var(--white);
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    background: var(--nav2);
    padding: 25px;
    border-radius: 25px;
    @media only Screen and (max-width: 48em) {
      max-width: 90%;
    }
  }
  }

  @media only Screen and (max-width: 48em) {
    width: 100%;
    align-items: center;
    text-align: center;
  }
  /* z-index: 1; */
`;
const Topic = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: var(--nav);
  color: var(--white);
  font-weight: 700;
  font-size: calc(0.4rem + 0.4vw);
  padding: 0.5rem 1rem;
  border-radius: 20px;

  @media only Screen and (max-width: 48em) {
    font-size: calc(0.4rem + 0.8vw);
  }
`;
const Circle = styled.span`
  display: inline-block;
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  background-color: var(--purple);
  margin-right: 0.5rem;
`;

const Title = styled.div`
  font-size: calc(1rem + 1vw);
  line-height: 1.2;
  padding: 0.5rem 0;
  @media only Screen and (max-width: 48em) {
    font-size: calc(1rem + 1.5vw);
  }
`;

const SiteInfo = styled.div`
  max-width:50%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
  @media only Screen and (max-width: 48em) {
    font-size: calc(0.5rem + 1vw);
  }
`;

const Image = styled.div`
  box-shadow: 2px 2px 10px -2px var(--black);
  width: 300px;
  height: 200px;
  border-radius: 10px;
  background-color: red;
  background: url(${(props) => props.img});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top;
  @media only Screen and (max-width: 48em) {
    width: 100%;
    height: 40vw;
    margin-left: 2vw;
  }
`;

const SubText = styled.div`
  font-size: calc(0.5rem + 0.5vw);
  color: var(--nav2);
  @media only Screen and (max-width: 48em) {
    font-size: calc(0.5rem + 1vw);
  }
`;

const SiteName = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: calc(1.2rem + 0.5vw);
  color: var(--white);
  transition:2s ease;
  &::after {
		content: "";
    display: block;
    width: 0vw;
    height: 2px;
    background: linear-gradient(#e5a1f8, #803bec);
    transition: 1s ease;
  }
  &:hover {
    color: #e5a1f8;
    background: -webkit-linear-gradient(0deg, #e5a1f8, #803bec);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    &::after {
      width: 5vw;
    }
  }

  }
  @media only Screen and (max-width: 48em) {
    font-size: calc(0.5rem + 1vw);
`;

const SiteBlock = ({ siteName, siteUrl, siteImg, Cms, Languages, Frameworks }) => {
  // const SiteView = require(`../../assets/${siteImg}.jpg`).default;
  return (
    <Cb>
      <a href={siteUrl} >
      <SiteInfo>
      <SiteName><p>{siteName}</p></SiteName>
      <p>CMS:{Cms}</p>
      <p>Languages：{Languages}</p>
      <p>Frameworks:{Frameworks}</p>
      </SiteInfo>
      <Image img={siteImg} alt={siteName} width="200px" height="150px" />
      </a>
    </Cb>
  );
};

export default SiteBlock;
