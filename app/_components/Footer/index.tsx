import { Box, Divider, Stack, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";

const Footer = () => {
	return (
		<footer>
			<Stack direction="row" alignItems="center" justifyContent="space-between">
				<Link href="https://www.instagram.com/bulahookahlounge?igsh=MTMzengydnk2MXFiNw==">
					<InstagramIcon fontSize="large" />
				</Link>
				<Stack alignItems="flex-start">
					<Stack direction="row" alignItems="center">
						<LocationOnIcon fontSize="small" sx={{ marginRight: "8px" }} />
						<Typography>8027 Hastings St, Burnaby</Typography>
					</Stack>
					<Stack direction="row" alignItems="center">
						<LocalPhoneIcon fontSize="small" sx={{ marginRight: "8px" }} />
						<Typography>236 558-3099</Typography>
					</Stack>
				</Stack>
			</Stack>
			<Divider sx={{ marginY: "5px" }} />
			Powered by<Link href={""}>HKDev</Link>
		</footer>
	);
};

export default Footer;
