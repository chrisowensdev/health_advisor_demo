import { advisorSiteConfig } from "@/config/siteConfig";
import Image from "next/image";

export default function HeroSection() {
	return (
		<section className="relative overflow-hidden bg-white ">
			{/* Mobile background image (dimmed) */}
			<div className="absolute inset-0 md:hidden">
				<Image
					src="/health-advisor-bg.png" // use same image if you want
					alt="Advisor discussing health coverage options"
					fill
					priority
					className="h-full w-full object-cover object-[right_center] opacity-30"
				/>
			</div>

			{/* Desktop right-side image */}
			<div className="absolute inset-y-0 right-0 hidden md:block md:w-full">
				<Image
					src="/health-advisor-bg.png"
					alt="Advisor discussing health coverage options"
					fill
					priority
					className="h-full w-full object-cover object-[right_center]"
				/>
				{/* Gradient fade into text side */}
				<div className="absolute inset-0 bg-linear-to-r from-gray-50 from-50% via-gray-50/20 via-70% to-transparent" />
			</div>

			{/* Content */}
			<div className="relative mx-auto flex max-w-6xl flex-col gap-10 px-4 py-5 md:flex-row md:items-center md:py-20 lg:px-6">
				<div className="max-w-xl space-y-6">
					{/* Eyebrow */}
					<div className="inline-flex items-center gap-2 rounded-full bg-teal-500/10 px-3 py-1 text-xs font-medium text-teal-700">
						<span className="h-1.5 w-1.5 rounded-full bg-teal-400" />
						Licensed Health Advisor · Helping You Navigate Medicare
						& Health Plans
					</div>

					{/* Headline */}
					<h1 className="text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
						Get Clear, Personalized Guidance
						<span className="block text-teal-400">
							On Your Health & Medicare Coverage
						</span>
					</h1>

					{/* Subheadline */}
					<p className="text-sm leading-relaxed text-slate-600 sm:text-base">
						I help individuals, families, and Medicare-eligible
						adults compare plans, avoid costly surprises, and feel
						confident in their coverage — at no extra cost to you.
					</p>

					{/* CTAs */}
					<div className="flex flex-wrap items-center gap-3">
						<a
							href="/contact"
							className="rounded-full bg-teal-500 px-6 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-teal-400"
						>
							{advisorSiteConfig.contactCopy.primaryCtaLabel}
						</a>
						<a
							href={`tel:${advisorSiteConfig.phone.replaceAll(
								"-",
								""
							)}`}
							className="rounded-full border border-slate-600/60 bg-slate-900/40 px-5 py-2.5 text-sm font-medium text-slate-100 hover:bg-slate-900/70"
						>
							{advisorSiteConfig.contactCopy.secondaryCtaLabel}
						</a>
					</div>

					{/* Trust bullets */}
					<div className="mt-4 grid gap-3 text-xs  sm:grid-cols-3 sm:text-sm">
						<div className="flex items-start gap-2">
							<span className="mt-0.5 text-teal-400">✔</span>
							<span>
								No extra fees — same rates as going direct
							</span>
						</div>
						<div className="flex items-start gap-2">
							<span className="mt-0.5 text-teal-400">✔</span>
							<span>
								Licensed & appointed with multiple carriers
							</span>
						</div>
						<div className="flex items-start gap-2">
							<span className="mt-0.5 text-teal-400">✔</span>
							<span>Plain-language explanations, no jargon</span>
						</div>
					</div>
				</div>

				{/* Spacer for layout balance on desktop (optional) */}
				<div className="hidden flex-1 md:block" />
			</div>
		</section>
	);
}
