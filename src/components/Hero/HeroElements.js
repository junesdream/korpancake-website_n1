import styled from 'styled-components'
import Landing1 from '../../assets/pancake-landing-2.jpeg'


export const HeroContainer = styled.div`
	background: linear-gradient(
			to right,
			rgba(0, 0, 0, 0.5),
			rgba(0, 0, 0, 0.1)
		),
		url(${Landing1});
	height: 100vh;
	background-position: center;
	background-size: cover;
`;

export const HeroContent =styled.div`
height:  calc(100vh - 80px);
max-height: 100%;
width: 100vw;
padding: 0rem calc((100vw - 1300px) /2 )
`;

export const HeroItems =styled.div`
display:  flex;
flex-direction: column;
justify-content: center;
align-items: flex-start;
height:100vh;
max-height: 100%;
padding: 0 2rem;
widht: 650px;
color: #fff;
text-transform: uppercase;
line-height: 1.2;
font-weight: bold;
@media screen and (max-width: 650 ) {
    width: 100%;  
}
`;

export const HeroH1 = styled.h1`
	font-size: clamp(2.5rem, 10vw, 5rem);
	animation: glow 1s ease-in-out infinite alternate;
	margin-bottom: 1rem;
	box-shadow: 3px 5px #23a9e9;
	letter-spacing: 3px;

	@keyframes glow {
		from {
			text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #0073e6,
				0 0 20px #0073e6, 0 0 25px #0073e6, 0 0 30px #0073e6,
				0 0 35px #0073e6;
		}
		to {
			text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #0073e6,
				0 0 40px #0073e6, 0 0 50px #0073e6, 0 0 60px #0073e6,
				0 0 70px #0073e6;
		}
	}
`;

export const HeroP = styled.p`
font-size: clamp(2rem, 2.5vw, 3rem);
margin-bottom: 2rem;
`

export const HeroBtn = styled.button`
	font-size: 1.4rem;
	padding: 1rem 4rem;
	border: none;
	background: transparent;
	color: #000;
	text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #0073e6, 0 0 20px #0073e6,
		0 0 25px #0073e6, 0 0 30px #0073e6, 0 0 35px #0073e6;
	transition: 0.2s ease-out;
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

	&:hover {
		background-image: linear-gradient(
			to right,
			red,
			orange,
			yellow,
			green,
			blue,
			indigo,
			red
		);
		animation: slidebg 2s linear infinite;
		transition: 0.2s ease-out;
		cursor: pointer;
		color: #000;
	}
`;


