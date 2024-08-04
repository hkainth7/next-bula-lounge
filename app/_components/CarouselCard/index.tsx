import React from "react";
import { Card, CardContent, CardHeader, Typography } from "@mui/material";
import { CarouselCardProps } from "./types";
import Image from "next/image";

const CarouselCard = (props: CarouselCardProps) => {
	const { title, src, description } = props;

	return (
		<Card
			sx={{ backgroundColor: "#222831", borderRadius: "4px", padding: "4px" }}
		>
			<CardHeader
				sx={{ color: "white" }}
				title={title}
				titleTypographyProps={{ variant: "h6" }}
			/>
			<CardContent sx={{ display: "flex", justifyContent: "center" }}>
				<Image src={src} height={300} width={300} alt={`${title} hookah`} />
				<Typography variant="body2" color={"white"}>
					{description}
				</Typography>
			</CardContent>
		</Card>
	);
};

export default CarouselCard;
