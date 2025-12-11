import { advisorSiteConfig } from "@/config/siteConfig";
import Link from "next/link";

export default function PlansPage() {
	return (
		<main className="bg-white">
			{/* Page hero */}
			<section className="border-b border-slate-200 bg-slate-50/80">
				<div className="mx-auto max-w-6xl px-4 py-10 lg:px-6 lg:py-14">
					<p className="text-xs font-semibold uppercase tracking-wide text-teal-600">
						Plans
					</p>
					<h1 className="mt-2 text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
						Plans I Help With
					</h1>
					<p className="mt-3 max-w-2xl text-sm text-slate-600 sm:text-base">
						Every situation is a little different. My role is to
						listen first, then help you compare Medicare,
						Marketplace, and other coverage options so you can
						choose a plan that fits your life — not the other way
						around.
					</p>

					{/* In-page navigation */}
					<div className="mt-6 flex flex-wrap gap-3 text-sm">
						<a
							href="#medicare"
							className="rounded-full border border-slate-300 bg-white px-4 py-2 text-slate-700 hover:bg-slate-100"
						>
							Medicare
						</a>
						<a
							href="#individual-family"
							className="rounded-full border border-slate-300 bg-white px-4 py-2 text-slate-700 hover:bg-slate-100"
						>
							Individuals & Families
						</a>
						<a
							href="#self-employed"
							className="rounded-full border border-slate-300 bg-white px-4 py-2 text-slate-700 hover:bg-slate-100"
						>
							Self-Employed & 1099
						</a>
						<a
							href="#small-business"
							className="rounded-full border border-slate-300 bg-white px-4 py-2 text-slate-700 hover:bg-slate-100"
						>
							Small Businesses
						</a>
					</div>
				</div>
			</section>

			{/* Main content */}
			<section className="py-14">
				<div className="mx-auto max-w-6xl px-4 space-y-12 lg:px-6">
					{/* Medicare */}
					<section id="medicare" className="scroll-mt-24">
						<p className="text-xs font-semibold uppercase tracking-wide text-teal-600">
							Medicare Coverage
						</p>
						<h2 className="mt-1 text-xl font-semibold text-slate-900 sm:text-2xl">
							Medicare Advantage, Supplement (Medigap) & Part D
						</h2>
						<p className="mt-3 max-w-3xl text-sm text-slate-600 sm:text-base">
							Medicare comes with important choices — Original
							Medicare with a supplement (Medigap), Medicare
							Advantage, and prescription drug coverage (Part D).
							I help you understand how each option works, so you
							can choose coverage that fits your doctors,
							medications, and budget.
						</p>

						<div className="mt-6 grid gap-6 md:grid-cols-3">
							<div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
								<h3 className="text-sm font-semibold text-slate-900">
									Medicare Advantage (Part C)
								</h3>
								<p className="mt-2 text-sm text-slate-600">
									All-in-one plans that combine hospital,
									medical, and often prescription coverage.
									We’ll look at networks, copays, and maximum
									out-of-pocket costs.
								</p>
							</div>
							<div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
								<h3 className="text-sm font-semibold text-slate-900">
									Medicare Supplement (Medigap)
								</h3>
								<p className="mt-2 text-sm text-slate-600">
									Policies that help pay some of the costs not
									covered by Original Medicare. We’ll review
									premiums, flexibility, and long-term
									protection.
								</p>
							</div>
							<div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
								<h3 className="text-sm font-semibold text-slate-900">
									Prescription Drug Plans (Part D)
								</h3>
								<p className="mt-2 text-sm text-slate-600">
									Standalone drug plans or coverage included
									with Advantage plans. We’ll check your
									medications and preferred pharmacies.
								</p>
							</div>
						</div>

						<ul className="mt-6 space-y-2 text-sm text-slate-600">
							<li>
								• Reviewing your current Medicare coverage for
								gaps or issues
							</li>
							<li>
								• Checking your doctors and hospitals for
								network compatibility
							</li>
							<li>
								• Comparing total yearly costs, not just monthly
								premiums
							</li>
							<li>
								• Explaining enrollment periods and when you can
								make changes
							</li>
						</ul>
					</section>

					<hr className="border-slate-200" />

					{/* Individuals & Families */}
					<section id="individual-family" className="scroll-mt-24">
						<p className="text-xs font-semibold uppercase tracking-wide text-teal-600">
							Individuals & Families
						</p>
						<h2 className="mt-1 text-xl font-semibold text-slate-900 sm:text-2xl">
							ACA Marketplace & Private Health Plans
						</h2>
						<p className="mt-3 max-w-3xl text-sm text-slate-600 sm:text-base">
							Whether you’re buying coverage on your own or
							exploring Marketplace (ACA) options, I help you
							compare plans side-by-side and understand how
							they’ll work for your family in real life.
						</p>

						<div className="mt-6 grid gap-6 md:grid-cols-2">
							<div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
								<h3 className="text-sm font-semibold text-slate-900">
									Marketplace (ACA) Plans
								</h3>
								<p className="mt-2 text-sm text-slate-600">
									We’ll look at available plans, check your
									doctors, and estimate any tax credits or
									savings you may qualify for.
								</p>
							</div>
							<div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
								<h3 className="text-sm font-semibold text-slate-900">
									Off-Exchange / Private Plans
								</h3>
								<p className="mt-2 text-sm text-slate-600">
									When appropriate, we can compare
									non-Marketplace options to see if they offer
									better fit for your needs.
								</p>
							</div>
						</div>

						<ul className="mt-6 space-y-2 text-sm text-slate-600">
							<li>
								• Estimating monthly costs with and without
								subsidies
							</li>
							<li>
								• Comparing deductibles, copays, and maximum
								out-of-pocket
							</li>
							<li>
								• Making sure key doctors and specialists are
								in-network
							</li>
							<li>
								• Reviewing options during life changes (job
								change, move, etc.)
							</li>
						</ul>
					</section>

					<hr className="border-slate-200" />

					{/* Self-Employed */}
					<section id="self-employed" className="scroll-mt-24">
						<p className="text-xs font-semibold uppercase tracking-wide text-teal-600">
							Self-Employed & 1099
						</p>
						<h2 className="mt-1 text-xl font-semibold text-slate-900 sm:text-2xl">
							Health Coverage for Independent Workers
						</h2>
						<p className="mt-3 max-w-3xl text-sm text-slate-600 sm:text-base">
							If you work for yourself, health coverage is one
							more thing you have to manage. I help you understand
							your options and how they fit with variable income,
							changing clients, and long-term plans.
						</p>

						<div className="mt-6 grid gap-6 md:grid-cols-2">
							<div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
								<h3 className="text-sm font-semibold text-slate-900">
									Independent Coverage Options
								</h3>
								<p className="mt-2 text-sm text-slate-600">
									We’ll look at Marketplace, private plans,
									and other options that make sense for solo
									business owners and freelancers.
								</p>
							</div>
							<div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
								<h3 className="text-sm font-semibold text-slate-900">
									Planning Around Income & Taxes
								</h3>
								<p className="mt-2 text-sm text-slate-600">
									We’ll consider how income changes,
									deductions, and HSAs may impact your
									coverage decisions.
								</p>
							</div>
						</div>

						<ul className="mt-6 space-y-2 text-sm text-slate-600">
							<li>
								• Evaluating solo coverage options that fit your
								budget
							</li>
							<li>
								• Exploring HSA-eligible plans when appropriate
							</li>
							<li>• Adjusting coverage as your business grows</li>
						</ul>
					</section>

					<hr className="border-slate-200" />

					{/* Small Business */}
					<section id="small-business" className="scroll-mt-24">
						<p className="text-xs font-semibold uppercase tracking-wide text-teal-600">
							Small Businesses
						</p>
						<h2 className="mt-1 text-xl font-semibold text-slate-900 sm:text-2xl">
							Group Health Options for Small Teams
						</h2>
						<p className="mt-3 max-w-3xl text-sm text-slate-600 sm:text-base">
							Offering benefits can help you attract and retain a
							great team. I’ll help you understand group health
							options, compare costs, and explain choices in a way
							your employees can understand.
						</p>

						<div className="mt-6 grid gap-6 md:grid-cols-2">
							<div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
								<h3 className="text-sm font-semibold text-slate-900">
									Comparing Group Plan Options
								</h3>
								<p className="mt-2 text-sm text-slate-600">
									We’ll review plan designs, networks, and
									approximate per-employee costs to find a
									good fit for your business.
								</p>
							</div>
							<div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
								<h3 className="text-sm font-semibold text-slate-900">
									Support for You & Your Team
								</h3>
								<p className="mt-2 text-sm text-slate-600">
									I can help explain benefits to employees and
									review options at renewal so you’re not
									navigating it alone each year.
								</p>
							</div>
						</div>

						<ul className="mt-6 space-y-2 text-sm text-slate-600">
							<li>
								• Reviewing group options and contribution
								strategies
							</li>
							<li>
								• Helping employees understand their choices
							</li>
							<li>
								• Discussing renewal options and plan
								adjustments over time
							</li>
						</ul>
					</section>
				</div>
			</section>

			{/* Bottom CTA */}
			<section className="bg-teal-500 py-12 mt-10">
				<div className="mx-auto max-w-6xl px-4 text-center text-white lg:px-6">
					<h2 className="text-xl font-semibold tracking-tight sm:text-2xl">
						Not Sure Which Type of Plan You Need?
					</h2>
					<p className="mx-auto mt-3 max-w-2xl text-sm text-teal-50 sm:text-base">
						That’s completely normal. Share a few details about your
						situation, and I’ll help you sort through your options
						in plain language.
					</p>
					<Link
						href="/contact"
						className="mt-6 inline-flex items-center justify-center rounded-full bg-white px-8 py-3 text-sm font-semibold text-teal-600 shadow-sm hover:bg-teal-50"
					>
						{advisorSiteConfig.contactCopy.primaryCtaLabel}
					</Link>
				</div>
			</section>
		</main>
	);
}
