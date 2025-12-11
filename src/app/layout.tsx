import type { Metadata, Viewport } from "next";
import "./globals.css";
import { text, display } from "./fonts";
import { Header, Footer } from "@/components/layout";
import { advisorSiteConfig } from "@/config/siteConfig";

export const viewport: Viewport = { themeColor: "#2175a2" };

export const metadata: Metadata = {
	metadataBase: new URL(advisorSiteConfig.siteUrl),
	title: {
		default: `${advisorSiteConfig.brandName}`,
		template: `%s | ${advisorSiteConfig.brandName}`,
	},
	description: advisorSiteConfig.tagline,
	openGraph: {
		type: "website",
		url: advisorSiteConfig.siteUrl,
		siteName: "ClearPath - Health Advisors",
		images: [
			{
				url: "/clearpath-opengraph.png",
				width: 1200,
				height: 630,
				alt: advisorSiteConfig.brandName,
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		images: [`${advisorSiteConfig.siteUrl}/clearpath-opengraph.png`],
	},
	alternates: { canonical: advisorSiteConfig.siteUrl },

	icons: {
		// If you prefer explicit control in addition to app/icon.png:
		icon: "/clearpath-icon-48x48.png",
		apple: "/clearpath-icon-48x48.png",
		other: [
			{
				rel: "mask-icon",
				url: "/clearpath-icon-48x48.png",
				color: "#00bba7",
			},
		],
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className={`${text.variable} ${display.variable}`}>
			<head>
				<meta charSet="utf-8" />
			</head>
			<body className="min-h-dvh flex flex-col">
				<Header />
				{children}
				<Footer />
			</body>
		</html>
	);
}
