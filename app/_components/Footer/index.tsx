import { Divider, Stack, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import FacebookIcon from "@mui/icons-material/Facebook";
import { TikTokIcon } from "./TikTokIcon";

const Footer = () => {
	return (
		<footer>
			<Stack direction="row" alignItems="center">
				<Link href="https://www.instagram.com/bulahookahlounge?igsh=MTMzengydnk2MXFiNw==">
					<InstagramIcon fontSize="large" />
				</Link>
				<Link href="https://youtube.com/@bulahookahlounge?si=-PkGPD7CmQ_NOf4a">
					<YouTubeIcon fontSize="large" />
				</Link>
				<Link href="https://www.facebook.com/share/AUrtqQFX3K6hvjua/?mibextid=qi2Omg">
					<FacebookIcon fontSize="large" />
				</Link>
				<Link
					href="https://youtube.com/@bulahookahlounge?si=-PkGPD7CmQ_NOf4a"
					style={{ width: "35px" }}
				>
					<TikTokIcon color={"white"} />
				</Link>
			</Stack>
			<Divider sx={{ marginY: "5px" }} />
			Powered by<Link href={""}>HKDev</Link>
		</footer>
	);
};

export default Footer;
