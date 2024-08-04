import type { Metadata, Viewport } from "next";
import Header from "./_components/Header";
import { Roboto } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import Footer from "./_components/Footer";
import { Stack } from "@mui/material";

const roboto = Roboto({
	weight: "400",
	subsets: ["latin"],
});

export const viewport: Viewport = {
	width: "device-width",
	initialScale: 1,
	maximumScale: 1,
	userScalable: false,
};

export const metadata: Metadata = {
	title: "Bula Lounge",
	description:
		"Welcome to. BULA LOUNGE. Meet new experience, Add one more happiness with loving “Shisha”",
	keywords: "bula, lounge, shisha, hookah, experience",
	openGraph: {
		type: "website",
		url: "https://www.myawesomewebsite.com/",
		title: "Bula Lounge",
		description: "This is a description of Bula Lounge.",
		images: [
			{
				url: "https://www.myawesomewebsite.com/image.jpg",
				width: 800,
				height: 600,
				alt: "Og Image Alt",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "Bula Lounge",
		description: "This is a description of Bula Lounge.",
		images: { url: "https://www.myawesomewebsite.com/image.jpg" },
	},
	alternates: {
		canonical: "https://www.myawesomewebsite.com/",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className={roboto.className}>
			<body>
				<Stack justifyContent={"space-between"} sx={{ height: "100vh" }}>
					<Header />
					{children}
					<Footer />
				</Stack>
				<Analytics />
				<SpeedInsights />
			</body>
		</html>
	);
}
