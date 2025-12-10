"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import Container from "./Container";
import Link from "next/link";

const BRAND = { primary: "#2175a2", accent: "#21a37c" };

export default function Header() {
	const [mobileOpen, setMobileOpen] = useState(false);
	const [mobileMounted, setMobileMounted] = useState(false);
	const [menuShown, setMenuShown] = useState(false);

	useEffect(() => {
		let t: ReturnType<typeof setTimeout> | undefined;
		let raf1: number | undefined;
		let raf2: number | undefined;
		if (mobileOpen) {
			setMobileMounted(true);
			// Ensure initial hidden state paints before showing (prevents snap)
			raf1 = window.requestAnimationFrame(() => {
				raf2 = window.requestAnimationFrame(() => setMenuShown(true));
			});
		} else {
			setMenuShown(false);
			t = setTimeout(() => setMobileMounted(false), 300);
		}
		return () => {
			if (t) clearTimeout(t);
			if (raf1) cancelAnimationFrame(raf1);
			if (raf2) cancelAnimationFrame(raf2);
		};
	}, [mobileOpen]);

	useEffect(() => {
		document.body.classList.toggle("overflow-hidden", mobileMounted);
		return () => document.body.classList.remove("overflow-hidden");
	}, [mobileMounted]);

	return (
		<>
			<header
				className="sticky top-0 z-50 border-b backdrop-blur"
				style={{ backgroundColor: "rgba(255,255,255,0.8)" }}
			>
				<div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
					<Link href="/" className="flex items-center gap-3">
						{/* <Image
								src="/elevate-main-logo.png"
								width={140}
								height={40}
								alt="profile Image"
							/> */}
						<div className="flex items-center gap-2">
							{/* Placeholder logo circle */}
							<div className="flex h-9 w-9 items-center justify-center rounded-full bg-teal-500 text-white font-semibold">
								CP
							</div>
							<div className="flex flex-col">
								<span className="text-sm font-semibold tracking-tight text-slate-900">
									ClearPath Health Advisors
								</span>
								<span className="text-xs text-slate-500">
									Licensed Health & Medicare Guidance
								</span>
							</div>
						</div>
					</Link>

					<nav className="hidden items-center gap-6 text-sm text-slate-700 md:flex">
						<a href="/plans" className="hover:text-slate-900">
							Plans
						</a>
						<a href="/resources" className="hover:text-slate-900">
							Resources
						</a>
						<a href="/about" className="hover:text-slate-900">
							About
						</a>
						<a href="/faqs" className="hover:text-slate-900">
							FAQs
						</a>
					</nav>

					<div className="flex items-center gap-2">
						<a
							href="/contact"
							className="hidden md:inline-flex rounded-full border border-slate-200 px-4 py-2 text-xs font-medium text-slate-700 hover:bg-slate-100"
						>
							Call for questions
						</a>
						<a
							href="#booking"
							className="hidden md:inline-flex rounded-full bg-teal-500 px-4 py-2 text-xs font-semibold text-white shadow-sm hover:bg-teal-600"
						>
							Book Free Coverage Review
						</a>
						<button
							type="button"
							className="md:hidden inline-flex items-center justify-center rounded-lg px-3 py-2 text-sm"
							aria-expanded={mobileOpen}
							aria-controls="mobile-menu"
							aria-label="Toggle menu"
							onClick={() => setMobileOpen((v) => !v)}
						>
							<span className="sr-only">Menu</span>
							{/* Hamburger icon that transitions to an X */}
							<div className="h-5 w-6 flex flex-col items-center justify-center gap-1">
								<span
									className={`block h-0.5 w-6 bg-current transition-transform duration-300 ease-in-out ${
										mobileOpen
											? "translate-y-1.5 rotate-45"
											: ""
									}`}
								/>
								<span
									className={`block h-0.5 w-6 bg-current transition-opacity duration-300 ease-in-out ${
										mobileOpen ? "opacity-0" : "opacity-100"
									}`}
								/>
								<span
									className={`block h-0.5 w-6 bg-current transition-transform duration-300 ease-in-out ${
										mobileOpen
											? "-translate-y-1.5 -rotate-45"
											: ""
									}`}
								/>
							</div>
						</button>
					</div>
				</div>
			</header>

			{mobileMounted && (
				<div className="md:hidden fixed inset-0 z-60">
					<div
						className={`absolute inset-0 transition-opacity duration-300 ${
							menuShown ? "opacity-100" : "opacity-0"
						}`}
						style={{ backgroundColor: "rgba(0,0,0,0.4)" }}
						onClick={() => setMobileOpen(false)}
					/>
					<nav
						id="mobile-menu"
						className={`absolute top-14 left-0 right-0 mx-4 rounded-2xl border bg-white p-4 shadow-lg origin-top transform transition-all duration-300 ease-[cubic-bezier(0.22,0.61,0.36,1)] ${
							menuShown
								? "translate-y-0 opacity-100"
								: "-translate-y-6 opacity-0"
						}`}
						style={{ willChange: "transform, opacity" }}
					>
						<a
							href="/plans"
							onClick={() => setMobileOpen(false)}
							className="block rounded-lg px-3 py-3 text-base hover:bg-neutral-50"
						>
							Plans
						</a>
						<a
							href="/resources"
							onClick={() => setMobileOpen(false)}
							className="block rounded-lg px-3 py-3 text-base hover:bg-neutral-50"
						>
							Resources
						</a>
						<a
							href="/about"
							onClick={() => setMobileOpen(false)}
							className="block rounded-lg px-3 py-3 text-base hover:bg-neutral-50"
						>
							About
						</a>
						<a
							href="/faqs"
							onClick={() => setMobileOpen(false)}
							className="block rounded-lg px-3 py-3 text-base hover:bg-neutral-50"
						>
							FAQs
						</a>
						<a
							href="/contact"
							onClick={() => setMobileOpen(false)}
							className="mt-2 block text-center rounded-full border border-slate-200 px-4 py-2 font-medium text-slate-700 hover:bg-slate-100"
						>
							Call for questions
						</a>
						<a
							href="#booking"
							onClick={() => setMobileOpen(false)}
							className="mt-2 block  text-center rounded-full bg-teal-500 px-4 py-2 font-semibold text-white shadow-sm hover:bg-teal-600"
						>
							Book Free Coverage Review
						</a>
					</nav>
				</div>
			)}
		</>
	);
}
