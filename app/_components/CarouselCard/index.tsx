import React from "react";
import { Card, CardContent, CardHeader, Typography } from "@mui/material";
import { CarouselCardProps } from "./types";
import Image from "next/image";

const CarouselCard = (props: CarouselCardProps) => {
	const { title, src, description } = props;

	return (
		<Card sx={{ width: "100%", backgroundColor: "black" }}>
			<CardHeader title={title} sx={{ color: "white" }} />
			<CardContent>
				<Image src={src} height={200} width={200} alt={`${title} hookah`} />
				<Typography variant="body2" color={"white"}>
					{description}
				</Typography>
			</CardContent>
		</Card>
	);
};

export default CarouselCard;
