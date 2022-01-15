import styled from 'styled-components'
import { NavLink as Link } from 'react-router-dom'
import { FaPizzaSlice } from 'react-icons/fa'

export const Nav = styled.nav`
background: transparent;
height: 80px;
display: flex;
justify-content: center; 
font-weight: 700;
`;


export const NavLink = styled(Link)`
	font-size: 2rem;
	font-family: "Single Day", cursive;
	display: flex;
	align-items: center;
	text-decoration: none;
	cursor: pointer;
	background-image: -webkit-linear-gradient(
		left,
		#f00,
		#ff2b00,
		#f50,
		#ff8000,
		#fa0,
		#ffd500,
		#ff0,
		#d4ff00,
		#af0,
		#80ff00,
		#5f0,
		#2bff00,
		#0f0,
		#00ff2a,
		#0f5,
		#00ff80,
		#0fa,
		#00ffd5,
		#0ff,
		#00d5ff,
		#0af,
		#0080ff,
		#05f,
		#002aff,
		#00f,
		#2b00ff,
		#50f,
		#8000ff,
		#a0f,
		#d400ff,
		#f0f,
		#ff00d4,
		#f0a,
		#ff0080,
		#f05,
		#ff002b,
		#f00
	);
	-webkit-animation: animatedBackground_a 5s linear infinite alternate;
	-webkit-background-clip: text;
	-webkit-text-fill-color: #0000;
	background-clip: text;
    
	@keyframes animatedBackground_a {
		0% {
			background-position: 0 0;
		}
		100% {
			background-position: -500px 0;
		}
	}

	@media screen and (max-width: 400px) {
		position: absoulte;
		top: 10px;
		left: 25px;
	}
`;

export const NavIcon = styled.div`
	dispaly: block;
	position: absolute;
	top: 0;
	right: 0;
	cursor: pointer;
	color: #fff;

	p {
		transform: translate(-175%, 100%);
		font-weight: bold;
		color: #c39953;
	}
`;

export const Bars = styled(FaPizzaSlice)`
	font-size: 2rem;
	transform: translate(-50%, -15%);
`;


