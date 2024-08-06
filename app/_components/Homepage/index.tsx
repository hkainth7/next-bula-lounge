import React from "react";

import { EmblaOptionsType } from "embla-carousel";
import EmblaCarousel from "../EmblaCarousel";
import { Stack, Typography } from "@mui/material";

const OPTIONS: EmblaOptionsType = { loop: true };

const Homepage = () => {
	return (
		<Stack>
			<Typography
				variant="h1"
				sx={{
					fontSize: "40px",
					marginY: "10px",
					fontWeight: "bold",
					padding: "4px",
					textAlign: "center",
				}}
			>
				Welcome to <span style={{ color: "#497445" }}>Bula Hookah</span> Lounge!
			</Typography>
			<Typography
				variant="h6"
				textAlign={"center"}
				sx={{ marginY: "20px", fontWeight: "light" }}
			>
				Discover the finest hookah flavors in our cozy, inviting space with
				plush seating and ambient lighting. Perfect for catching up with friends
				or relaxing after a long day
			</Typography>
			<EmblaCarousel options={OPTIONS} />
		</Stack>
	);
};

export default Homepage;
