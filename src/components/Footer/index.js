import React from "react";
import {
	FaFacebook,
	FaInstagram,
	FaYoutube,
	FaTwitter,
	FaLinkedin,
} from "react-icons/fa";
import {
	FooterContainer,
	FooterWrap,
	SocialMedia,
	SocialMediaWrap,
	SocialLogo,
	FooterLogo,
	FooterImg,
	SocialIcons,
	SocialIconLink,
} from "./FooterElements";
import Logo from '../../assets/logo.png'

const Footer = () => {
	return (
		<FooterContainer>
			<FooterWrap>
				<SocialMedia>
					<SocialMediaWrap>
						<SocialLogo to="/">Korean Pancakes</SocialLogo>
						<FooterImg src={Logo} alt="logo" />
						<FooterLogo>© 이모 파전 2021 </FooterLogo>

						<SocialIcons>
							<SocialIconLink
								href="/"
								target="_blank"
								aria-label="Facebook"
							>
								<FaFacebook />
							</SocialIconLink>
							<SocialIconLink
								href="/"
								target="_blank"
								aria-label="Instagram"
							>
								<FaInstagram />
							</SocialIconLink>
							<SocialIconLink
								href="/"
								target="_blank"
								aria-label="Youtube"
							>
								<FaYoutube />
							</SocialIconLink>
							<SocialIconLink
								href="//www.twitter.com/briandesignz"
								target="_blank"
								aria-label="Twitter"
								rel="noopener noreferrer"
							>
								<FaTwitter />
							</SocialIconLink>
							<SocialIconLink
								href="/"
								target="_blank"
								aria-label="Linkedin"
							>
								<FaLinkedin />
							</SocialIconLink>
						</SocialIcons>
					</SocialMediaWrap>
				</SocialMedia>
			</FooterWrap>
		</FooterContainer>
	);
};

export default Footer;
