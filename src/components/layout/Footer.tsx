import { advisorSiteConfig } from "@/config/siteConfig";
import DemoTag from "./DemoTag";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
	return (
		<>
			<p className="mt-10 rounded-md bg-yellow-50 p-3 text-sm text-yellow-900 text-center">
				This is a demonstration website and does not represent a real
				licensed advisor.
			</p>
			<footer className="bg-slate-100 border-t border-slate-200 py-12">
				<div className="mx-auto max-w-6xl px-4 lg:px-6">
					<div className="grid gap-10 md:grid-cols-4">
						{/* Column 1: Brand */}
						<div>
							{/* <h3 className="text-lg font-semibold text-slate-900">
								{advisorSiteConfig.brandName}
							</h3> */}
							<Link href="/" className="flex items-center gap-3">
								<Image
									src="/clearpath-logo.png"
									width={140}
									height={40}
									alt="profile Image"
								/>
								{/* <div className="flex items-center gap-2">
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
						</div> */}
							</Link>
							<p className="mt-2 text-sm text-slate-600">
								Clear, unbiased guidance for Medicare and health
								coverage decisions.
							</p>

							<p className="mt-4 text-xs text-slate-500">
								Serving clients in:{" "}
								{advisorSiteConfig.serviceAreas.join(", ")}
							</p>
						</div>

						{/* Column 2: Navigation */}
						<div>
							<h4 className="text-sm font-semibold text-slate-900">
								Navigation
							</h4>
							<ul className="mt-3 space-y-2 text-sm text-slate-600">
								<li>
									<a
										href="/"
										className="hover:text-slate-900"
									>
										Home
									</a>
								</li>
								<li>
									<a
										href="/plans"
										className="hover:text-slate-900"
									>
										Plans
									</a>
								</li>
								<li>
									<a
										href="/about"
										className="hover:text-slate-900"
									>
										About
									</a>
								</li>
								<li>
									<a
										href="/faqs"
										className="hover:text-slate-900"
									>
										FAQs
									</a>
								</li>
								<li>
									<a
										href="/resources"
										className="hover:text-slate-900"
									>
										Resources
									</a>
								</li>
								<li>
									<a
										href="/contact"
										className="hover:text-slate-900"
									>
										Contact
									</a>
								</li>
							</ul>
						</div>

						{/* Column 3: Contact */}
						<div>
							<h4 className="text-sm font-semibold text-slate-900">
								Contact
							</h4>
							<ul className="mt-3 space-y-2 text-sm text-slate-600">
								<li>
									Phone:{" "}
									<a
										href={`tel:${advisorSiteConfig.phone.replaceAll(
											"-",
											""
										)}`}
										className="text-teal-600 hover:text-teal-700"
									>
										{advisorSiteConfig.phone}
									</a>
								</li>
								<li>
									Email:{" "}
									<a
										href={`mailto:${advisorSiteConfig.email}`}
										className="text-teal-600 hover:text-teal-700"
									>
										{advisorSiteConfig.email}
									</a>
								</li>
								<li className="pt-2 text-xs text-slate-500">
									Hours: {advisorSiteConfig.officeHours}
								</li>
							</ul>
						</div>

						{/* Column 4: Legal */}
						<div>
							<h4 className="text-sm font-semibold text-slate-900">
								Legal
							</h4>
							<ul className="mt-3 space-y-2 text-sm text-slate-600">
								<li>
									<a
										href={
											advisorSiteConfig.legal
												.disclaimerUrl
										}
										className="hover:text-slate-900"
									>
										Disclaimer
									</a>
								</li>
								<li>
									<a
										href={
											advisorSiteConfig.legal.privacyUrl
										}
										className="hover:text-slate-900"
									>
										Privacy Policy
									</a>
								</li>
							</ul>

							{/* Required Medicare disclaimer */}
							<p className="mt-4 text-xs text-slate-500 leading-relaxed">
								{
									advisorSiteConfig.legal
										.notGovernmentAffiliationText
								}
							</p>
						</div>
					</div>

					{/* Bottom row */}
					<div className="mt-10 border-t border-slate-300 pt-6 text-center text-xs text-slate-500">
						© {new Date().getFullYear()}{" "}
						{advisorSiteConfig.brandName}. All rights reserved.
					</div>
					<DemoTag />
				</div>
			</footer>
		</>
	);
}
