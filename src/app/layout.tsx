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
				url: "/elevate_devworks_seo_image.png",
				width: 1200,
				height: 630,
				alt: advisorSiteConfig.brandName,
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		images: [`${advisorSiteConfig.siteUrl}/elevate_devworks_seo_image.png`],
	},
	alternates: { canonical: advisorSiteConfig.siteUrl },

	icons: {
		// If you prefer explicit control in addition to app/icon.png:
		icon: "/elevate-logo-symbol-48x48.png",
		apple: "/apple-touch-icon.png",
		other: [
			{
				rel: "mask-icon",
				url: "/safari-pinned-tab.svg",
				color: "#2175a2",
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
