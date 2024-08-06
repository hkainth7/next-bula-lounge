import React from "react";
import { Box, Card, CardContent, CardHeader, Typography } from "@mui/material";
import { CarouselCardProps } from "./types";
import Image from "next/image";

const CarouselCard = (props: CarouselCardProps) => {
	const { title, src, description } = props;

	return (
		<Card
			sx={{ backgroundColor: "#222831", borderRadius: "4px", height: "100%" }}
		>
			<CardHeader
				sx={{ color: "white", padding: "8px", paddingLeft: "20px" }}
				title={title}
				titleTypographyProps={{ variant: "h6" }}
			/>
			<CardContent
				sx={{
					display: "flex",
					flexDirection: "column",
					justifyContent: "center",
					alignItems: "center",
					padding: "8px",
				}}
			>
				<Image src={src} height={225} width={0} alt={`${title} hookah`} />
				<Box sx={{ padding: "0px 14px" }}>
					<Typography variant="body2" color={"white"}>
						{description}
					</Typography>
				</Box>
			</CardContent>
		</Card>
	);
};

export default CarouselCard;
