import { advisorSiteConfig } from "@/config/siteConfig";

export default function WhyClientsChooseMe() {
	return (
		<section className="bg-slate-50 py-20">
			<div className="mx-auto max-w-6xl px-4 lg:px-6">
				{/* Title */}
				<div className="mb-12 text-center">
					<h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
						Why Clients Choose Me
					</h2>
					<p className="mx-auto mt-3 max-w-2xl text-sm text-slate-600 sm:text-base">
						You have plenty of options when it comes to health
						coverage. My role is to make the process clearer,
						simpler, and more personalized — without adding cost to
						your plan.
					</p>
				</div>

				{/* 3–4 benefit cards */}
				<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
					{/* Card 1 */}
					<div className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
						<div className="mb-3 text-2xl">🧭</div>
						<h3 className="text-base font-semibold text-slate-900">
							Independent, Personalized Guidance
						</h3>
						<p className="mt-2 text-sm text-slate-600">
							I’m not here to push one plan. I compare options
							from multiple carriers and help you understand what
							fits your life best.
						</p>
					</div>

					{/* Card 2 */}
					<div className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
						<div className="mb-3 text-2xl">🩺</div>
						<h3 className="text-base font-semibold text-slate-900">
							Focused on Your Doctors & Medications
						</h3>
						<p className="mt-2 text-sm text-slate-600">
							We start with the care you already receive — your
							doctors, hospitals, and prescriptions — and build
							from there.
						</p>
					</div>

					{/* Card 3 */}
					<div className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
						<div className="mb-3 text-2xl">📄</div>
						<h3 className="text-base font-semibold text-slate-900">
							Plain-Language Explanations
						</h3>
						<p className="mt-2 text-sm text-slate-600">
							No jargon, no rushed conversations. I explain
							deductibles, copays, and coverage in clear, everyday
							language.
						</p>
					</div>

					{/* Card 4 */}
					<div className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
						<div className="mb-3 text-2xl">🤝</div>
						<h3 className="text-base font-semibold text-slate-900">
							No Extra Cost for You
						</h3>
						<p className="mt-2 text-sm text-slate-600">
							You never pay extra for working with me. Your plan
							cost is the same as going direct — you simply gain a
							guide in the process.
						</p>
					</div>
				</div>

				{/* Soft CTA */}
				<div className="mt-12 text-center">
					<p className="text-sm text-slate-600">
						If you’d like a second opinion on your current plan or
						help choosing a new one, I’m here to walk through it
						with you.
					</p>
					<a
						href="/contact"
						className="mt-4 inline-flex items-center justify-center rounded-full bg-teal-500 px-8 py-3 text-sm font-semibold text-white shadow-sm hover:bg-teal-400"
					>
						{advisorSiteConfig.contactCopy.primaryCtaLabel}
					</a>
				</div>
			</div>
		</section>
	);
}
