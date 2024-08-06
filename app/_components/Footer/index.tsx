"use client";

import { Box, Divider, Stack, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import FacebookIcon from "@mui/icons-material/Facebook";
import { TikTokIcon } from "./TikTokIcon";
import { styled } from "@mui/material/styles";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";

const CustomTypography = styled(Typography)({
	fontWeight: "bold",
	marginBottom: "10px",
});

const CustomLink = styled(Link)({
	color: "#468CDE",
	fontSize: "16px",
});

const BusinessHoursTypography = styled(Typography)({
	fontSize: "15px",
	fontWeight: "light",
});

const Footer = () => {
	const copyrightYear = new Date().getFullYear();

	return (
		<footer>
			<Stack gap={4} sx={{ marginTop: "10px" }}>
				<Stack>
					<CustomTypography>Follow Our Socials:</CustomTypography>
					<Stack direction="row" alignItems="center">
						<Link href="https://www.instagram.com/bulahookahlounge?igsh=MTMzengydnk2MXFiNw==">
							<InstagramIcon fontSize="large" sx={{ color: "#497445" }} />
						</Link>
						<Link href="https://youtube.com/@bulahookahlounge?si=-PkGPD7CmQ_NOf4a">
							<YouTubeIcon fontSize="large" sx={{ color: "#497445" }} />
						</Link>
						<Link href="https://www.facebook.com/share/AUrtqQFX3K6hvjua/?mibextid=qi2Omg">
							<FacebookIcon fontSize="large" sx={{ color: "#497445" }} />
						</Link>
						<Link
							href="https://youtube.com/@bulahookahlounge?si=-PkGPD7CmQ_NOf4a"
							style={{ width: "35px" }}
						>
							<TikTokIcon color={"#497445"} />
						</Link>
					</Stack>
				</Stack>
				<Stack>
					<CustomTypography>Business Info:</CustomTypography>
					<Stack gap={2} sx={{ marginLeft: "10px" }}>
						<Stack direction="row">
							<MailOutlineIcon sx={{ marginRight: "4px" }} />
							<Typography>bulalounge@gmail.ca</Typography>
						</Stack>
						<Stack direction="row">
							<LocalPhoneOutlinedIcon sx={{ marginRight: "4px" }} />
							<Typography>236-558-3099</Typography>
						</Stack>
						<Stack direction="row">
							<LocationOnOutlinedIcon sx={{ marginRight: "4px" }} />
							<Typography>4027 Hastings St, Burnaby</Typography>
						</Stack>
					</Stack>
				</Stack>
				<Stack>
					<CustomTypography>Business Hours:</CustomTypography>
					<Stack sx={{ marginLeft: "10px" }} gap={1}>
						<BusinessHoursTypography>
							Sun - Tue: 6:30PM - 12:30AM
						</BusinessHoursTypography>
						<BusinessHoursTypography>
							Fri - Sat: 6:30PM to 2:30AM
						</BusinessHoursTypography>
						<BusinessHoursTypography>
							For statutory holidays, refer to Google Maps for updated/modified
							hours.
						</BusinessHoursTypography>
					</Stack>
				</Stack>
			</Stack>
			<Divider
				sx={{ marginY: "20px", borderColor: "#497445", borderBottomWidth: 3 }}
			/>
			<Typography
				sx={{
					textAlign: "center",
					fontSize: "12px",
					fontWeight: "light",
					marginTop: "20px",
				}}
			>
				Copyright ©{copyrightYear} Bula Hookah Lounge
			</Typography>
			<Typography
				sx={{ textAlign: "center", fontSize: "14px", marginTop: "10px" }}
			>
				Powered by
				<CustomLink href={""} sx={{ marginLeft: "4px", fontSize: "14px" }}>
					HKDev
				</CustomLink>
			</Typography>
		</footer>
	);
};

export default Footer;
