import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const FooterContainer = styled.footer`
  background-color: #0d0909;
`;

export const FooterWrap = styled.div`
  padding: 16px 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1300px;
  margin: 0 auto;
`;

export const SocialMedia = styled.section`
  max-width: 1300px;
  width: 100%;
`;

export const SocialMediaWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1100px;
  margin: 16px auto 0 auto;

  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;

export const SocialLogo = styled(Link)`
	color: #fff;
	justify-self: start;
	cursor: pointer;
	text-decoration: none;
	font-size: 1.5rem;
	text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #0073e6, 0 0 20px #0073e6,
		0 0 25px #0073e6, 0 0 30px #0073e6, 0 0 35px #0073e6;
	display: flex;
	align-items: center;
	text-align: center;
	margin-bottom: 16px;
	font-weight: bold;
`;

export const FooterLogo = styled.p`
	font-family: "Single Day", cursive;
  font-size: 18px;
	background-image: linear-gradient(
		to left,
		violet,
		indigo,
		blue,
		green,
		yellow,
		orange,
		red
	);
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
`;

export const FooterImg = styled.img`
  width: 50px;
`


export const SocialIcons = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 240px;
`;

export const SocialIconLink = styled.a`
	color: #fff;
	font-size: 24px;
	color: #c39953;
`;
