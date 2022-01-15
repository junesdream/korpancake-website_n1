import React from 'react'
import { Nav, NavLink, NavIcon, Bars } from "./NavbarElements"
// import { Link } from 'react-router-dom'
// import Logo1 from '../../assets/logo.png'

const Navbar = ({toggle}) => {
    return (
		<>
			<Nav>
				<NavLink to="/"> 이모 파전 since 1950</NavLink>
				<NavIcon onClick={toggle}>
					<p>Menu</p>
					<Bars />
				</NavIcon>
			</Nav>
		</>
	);
}

export default Navbar;
