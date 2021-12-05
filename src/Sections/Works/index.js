import React, { lazy } from "react";
import styled from "styled-components";

import Slider from "react-slick";
import "../../../node_modules/slick-carousel/slick/slick.css";
import "../../../node_modules/slick-carousel/slick/slick-theme.css";
import TextBlock from "../../components/TextBlock";
import SiteBlock from "../../components/SiteBlock";
import PourVous from "../../assets/pv.jpg";

// const Card = lazy(() => import("../../components/Card/index"));
// const SiteBlock = lazy(() => import("../../components/SiteBlock/index"));



const Section = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 100%;
	padding: 5rem 0;
	background: var(--black);
`;

const Title = styled.h1`
	color: var(--white);
	display: inline-block;
	font-size: calc(1rem + 1.5vw);
	margin-top: 1.5rem;
	position: relative;
	&::before {
		content: "";
		height: 1px;
		width: 50%;
		position: absolute;
		left: 50%;
		bottom: 0;
		transform: translate(-50%, 0.5rem);
		/* or 100px */
		border-bottom: 2px solid var(--purple);
	}
`;

const Carousal = styled.div`
	width: 50vw;
	display: flex;
	flex-direction: column;
	justify-content: center;
	@media only Screen and (max-width: 40em) {
		width: 90vw;
		.slick-slider .slick-arrow {
			display: none;
		}
	}
	.slick-slider .slick-arrow:before {
		color: #0a0b10;
		font-size: 1.5rem;
		@media only Screen and (max-width: 40em) {
			display: none;
		}
	}
	.slick-slider .slick-dots button:before {
		color: #0a0b10;
		font-size: 1.5rem;
	}
	.slick-slide.slick-active {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		margin: 0;
		padding: 0;
		margin-bottom: 3rem;
	}
`;

const Works = () => {
	// const settings = {
	// 	dots: true,
	// 	infinite: true,

	// 	speed: 1000,
	// 	slidesToShow: 1,
	// 	slidesToScroll: 1,
	// };

	return (
		<Section>
			<Title>Works</Title>
			<TextBlock
					topic="Web製作実績"
					title={<h1>様々なサイト製作実績があります。</h1>}
					subText={<h5>We've made several Web sites.</h5>}
				/>
			<SiteBlock
				siteUrl={"https://www.rakuten.ne.jp/gold/auc-pourvous/"}
				siteName={"PourVous"}
				siteImg={PourVous}
				Cms={"None"}
				Languages={"HTML/CSS/JavaScript"}
				Frameworks={"None"}
				/>
		</Section>
	);
};

export default Works;
