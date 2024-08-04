import React from "react";

import { EmblaOptionsType } from "embla-carousel";
import EmblaCarousel from "../EmblaCarousel";

const OPTIONS: EmblaOptionsType = { loop: true };

const Homepage = () => {
	return <EmblaCarousel options={OPTIONS} />;
};

export default Homepage;
