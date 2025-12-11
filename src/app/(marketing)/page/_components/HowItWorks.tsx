import { advisorSiteConfig } from "@/config/siteConfig";

export default function HowItWorks() {
	return (
		<section className="bg-white py-20">
			<div className="mx-auto max-w-6xl px-4 lg:px-6">
				{/* Title */}
				<div className="mb-12 text-center">
					<h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
						How It Works
					</h2>
					<p className="mx-auto mt-3 max-w-2xl text-sm text-slate-600 sm:text-base">
						The process is simple, stress-free, and designed around
						what matters most to you.
					</p>
				</div>

				{/* Steps grid */}
				<div className="grid gap-10 sm:grid-cols-3">
					{/* Step 1 */}
					<div className="flex flex-col items-start">
						<div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-teal-500/10 text-teal-600 text-lg font-bold">
							1
						</div>
						<h3 className="text-lg font-semibold text-slate-900">
							Schedule Your Free Coverage Review
						</h3>
						<p className="mt-2 text-sm text-slate-600">
							A short call to understand your current coverage,
							doctors, prescriptions, and budget.
						</p>
					</div>

					{/* Step 2 */}
					<div className="flex flex-col items-start">
						<div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-teal-500/10 text-teal-600 text-lg font-bold">
							2
						</div>
						<h3 className="text-lg font-semibold text-slate-900">
							Compare Personalized Plan Options
						</h3>
						<p className="mt-2 text-sm text-slate-600">
							I review available plans and explain the differences
							in clear, easy-to-understand language.
						</p>
					</div>

					{/* Step 3 */}
					<div className="flex flex-col items-start">
						<div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-teal-500/10 text-teal-600 text-lg font-bold">
							3
						</div>
						<h3 className="text-lg font-semibold text-slate-900">
							Choose with Confidence
						</h3>
						<p className="mt-2 text-sm text-slate-600">
							You’ll understand your plan, avoid common mistakes,
							and get support with enrollment if you want it.
						</p>
					</div>
				</div>

				{/* CTA */}
				<div className="mt-12 text-center">
					<a
						href="/contact"
						className="rounded-full bg-teal-500 px-8 py-3 text-sm font-semibold text-white shadow-sm hover:bg-teal-400"
					>
						{advisorSiteConfig.contactCopy.primaryCtaLabel}
					</a>
				</div>
			</div>
		</section>
	);
}
