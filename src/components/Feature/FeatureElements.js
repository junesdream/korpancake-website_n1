import styled from "styled-components";
import featureImg from "../../assets/pancake-8.png";

export const FeatureContainer = styled.div`
	background: linear-gradient(
			to right,
			rgba(0, 0, 0, 0.4),
			rgba(0, 0, 0, 0.1)
		),
		url(${featureImg});
	height: 100vh;
	max-height: 500px;
	background-position: center;
	background-size: cover;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	color: #fff;
	text-align: center;
	padding: 0 1rem;

	h1 {
		font-size: clamp(3rem, 5vw, 5rem);
		-webkit-animation: animatedBackground_b 5s linear infinite alternate;
	}

	p {
		margin-bottom: 1rem;
		font-size: clamp(1rem, 3vw, 2rem);
	}
`;
export const FeatureButton = styled.button`
	font-size: 1.4rem;
	font-family: "Carter One", cursive;
	padding: 0.6rem 3rem;
	border: none;
	color: #fff;
	text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #0073e6, 0 0 20px #0073e6,
		0 0 25px #0073e6, 0 0 30px #0073e6, 0 0 35px #0073e6;
	background-image: linear-gradient(
		to right,
		red,
		orange,
		yellow,
		green,
		blue,
		indigo,
		violet,
		red
	);
	animation: slidebg 2s linear infinite;
	transition: 0.2s ease-out;

	&:hover {
		background: #ffc500;
		border: 5px solid transparent;
		border-image: linear-gradient(
			to bottom right,
			#b827fc 0%,
			#2c90fc 25%,
			#b8fd33 50%,
			#fec837 75%,
			#fd1892 100%
		);
		border-image-slice: 1;
		transition: 0.2s ease-out;
		cursor: pointer;
		color: #000;
	}
`;

