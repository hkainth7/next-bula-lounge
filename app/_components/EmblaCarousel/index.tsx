"use client";

import React, { useCallback, useEffect, useRef } from "react";
import {
	EmblaCarouselType,
	EmblaEventType,
	EmblaOptionsType,
} from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import { DotButton, useDotButton } from "./EmblaCarouselDotButton";
import { hookayTypeData } from "@/app/hookahTypeData";
import CarouselCard from "../CarouselCard";
import "@/app/_components/EmblaCarousel/styles.css";

const TWEEN_FACTOR_BASE = 0.84;

const numberWithinRange = (number: number, min: number, max: number): number =>
	Math.min(Math.max(number, min), max);

type EmblaCarouselProps = {
	options?: EmblaOptionsType;
};

const EmblaCarousel: React.FC<EmblaCarouselProps> = (props) => {
	const { options } = props;
	const [emblaRef, emblaApi] = useEmblaCarousel(options);
	const tweenFactor = useRef(0);

	const { selectedIndex, scrollSnaps, onDotButtonClick } =
		useDotButton(emblaApi);

	const setTweenFactor = useCallback((emblaApi: EmblaCarouselType) => {
		tweenFactor.current = TWEEN_FACTOR_BASE * emblaApi.scrollSnapList().length;
	}, []);

	const tweenOpacity = useCallback(
		(emblaApi: EmblaCarouselType, eventName?: EmblaEventType) => {
			const engine = emblaApi.internalEngine();
			const scrollProgress = emblaApi.scrollProgress();
			const slidesInView = emblaApi.slidesInView();
			const isScrollEvent = eventName === "scroll";

			emblaApi.scrollSnapList().forEach((scrollSnap, snapIndex) => {
				let diffToTarget = scrollSnap - scrollProgress;
				const slidesInSnap = engine.slideRegistry[snapIndex];

				slidesInSnap.forEach((slideIndex) => {
					if (isScrollEvent && !slidesInView.includes(slideIndex)) return;

					if (engine.options.loop) {
						engine.slideLooper.loopPoints.forEach((loopItem) => {
							const target = loopItem.target();

							if (slideIndex === loopItem.index && target !== 0) {
								const sign = Math.sign(target);

								if (sign === -1) {
									diffToTarget = scrollSnap - (1 + scrollProgress);
								}
								if (sign === 1) {
									diffToTarget = scrollSnap + (1 - scrollProgress);
								}
							}
						});
					}

					const tweenValue = 1 - Math.abs(diffToTarget * tweenFactor.current);
					const opacity = numberWithinRange(tweenValue, 0, 1).toString();
					emblaApi.slideNodes()[slideIndex].style.opacity = opacity;
				});
			});
		},
		[]
	);

	useEffect(() => {
		if (!emblaApi) return;

		setTweenFactor(emblaApi);
		tweenOpacity(emblaApi);
		emblaApi
			.on("reInit", setTweenFactor)
			.on("reInit", tweenOpacity)
			.on("scroll", tweenOpacity)
			.on("slideFocus", tweenOpacity);
	}, [emblaApi, tweenOpacity, setTweenFactor]);

	return (
		<div className="embla">
			<div className="embla__viewport" ref={emblaRef}>
				<div className="embla__container">
					{hookayTypeData.map((data, index) => (
						<div className="embla__slide" key={index}>
							<CarouselCard
								title={data.name}
								description={data.description}
								src={data.imageUrl}
							/>
						</div>
					))}
				</div>
			</div>

			<div className="embla__controls">
				<div className="embla__dots">
					{scrollSnaps.map((_, index) => (
						<DotButton
							key={index}
							onClick={() => onDotButtonClick(index)}
							className={"embla__dot".concat(
								index === selectedIndex ? " embla__dot--selected" : ""
							)}
						/>
					))}
				</div>
			</div>
		</div>
	);
};

export default EmblaCarousel;
