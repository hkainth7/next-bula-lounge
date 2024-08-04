import React from "react";
import Image from "next/image";
import BulaLogo from "@/public/assets/white-logo.png";
import Link from "next/link";
import { Stack } from "@mui/material";

const Header = () => {
	return (
		<header>
			<Stack direction="row" alignItems="center" justifyContent="space-between">
				<Image src={BulaLogo} height={75} width={75} alt="Bula lounge logo" />
				<nav>
					<Link href="/">Home</Link>
					<Link href="/About">About</Link>
					<Link href="ContactUs">Contact</Link>
				</nav>
			</Stack>
		</header>
	);
};

export default Header;
