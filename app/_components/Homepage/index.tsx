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
				Experience the ultimate hookah lounge vibe in our inviting space. Dive
				into the finest flavors, unwind from work, and relax in our cozy
				seating. It's the perfect place to hang out and have a great time with
				friends.
			</Typography>
			<EmblaCarousel options={OPTIONS} />
		</Stack>
	);
};

export default Homepage;
