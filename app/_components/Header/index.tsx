import Image from "next/image";
import React from "react";
import BulaLogo from "@/public/assets/white-logo.png";
import Link from "next/link";
import { Stack } from "@mui/material";

const Header = () => {
	return (
		<header>
			<Stack
				direction="row"
				alignItems="center"
				justifyContent="space-between"
				padding="0 20px"
			>
				<Image src={BulaLogo} height={125} width={125} alt="Bula lounge logo" />
				<nav>
					<Link href="/">Home</Link>
					<Link href="/About">About</Link>
					<Link href="ContactUs">Contact Us</Link>
				</nav>
			</Stack>
		</header>
	);
};

export default Header;
