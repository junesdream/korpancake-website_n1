import styled from 'styled-components'

export const ProductsContainer = styled.div`
widht: 100vw;
mmin-height: 100vh;
padding: 5rem calc(100vw - 1300px) /2);
background: #150f0f;
color: #fff;
`;
export const ProductWrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	margin: 0 auto;
`;

export const ProductCard = styled.div`
	margin: 0 2rem;
	line-height: 2;
	width: 300px;
`;

export const ProductImg = styled.img`
	height: 300px;
	min-width: 300px;
	max-width: 100%;
    border-radius: 10px;
	box-shadow: 10px 10px 10px gold;
`;

export const ProductsHeading = styled.h1`
	font-size: clamp(2rem, 2.5vw, 3rem);
	text-align: center;
	margin-bottom: 5rem;
	-webkit-animation: animatedBackground_b 5s linear infinite alternate;
	@keyframes animatedBackground_b {
		0% {
			color: #ff8b00;
		}
		10% {
			color: #e8ff00;
		}
		20% {
			color: #5dff00;
		}
		30% {
			color: #00ff2e;
		}
		40% {
			color: #00ffb9;
		}
		50% {
			color: #00b9ff;
		}
		60% {
			color: #002eff;
		}
		70% {
			color: #5d00ff;
		}
		80% {
			color: #e800ff;
		}
		90% {
			color: #ff008b;
		}
		100% {
			color: #ff0000;
		}
	}
`;

export const ProductTitle = styled.h2`
	font-weight: 400;
	font-size: 1.5rem;
`;

export const ProductInfo = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 2rem;
	text-align: center;
`;

export const ProductDesc = styled.p`
	margin-bottom: 1rem;
`;

export const ProductPrice = styled.p`
	margin-bottom: 1rem;
	font-size: 2rem;
`;

export const ProductButton = styled.button`
	font-size: 1rem;
	font-family: "Carter One", cursive;
	padding: 1rem 4rem;
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

	transition: 0.2 ease-out;
    
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