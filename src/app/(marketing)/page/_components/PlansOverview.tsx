export default function PlansOverview() {
	return (
		<section id="plans" className="bg-slate-50 py-16">
			<div className="mx-auto max-w-6xl px-4 lg:px-6">
				{/* Title + subtitle */}
				<div className="mb-10 text-center">
					<h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
						Plans I Help With
					</h2>
					<p className="mx-auto mt-3 max-w-2xl text-sm text-slate-600 sm:text-base">
						Every situation is different. I review your doctors,
						prescriptions, and budget to help you compare options
						and choose a plan that fits your life.
					</p>
				</div>

				{/* Grid */}
				<div className="grid gap-6 lg:grid-cols-2">
					{/* Medicare */}
					<div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
						<div className="mb-3 text-xs font-semibold uppercase tracking-wide text-teal-600">
							Medicare Coverage
						</div>
						<h3 className="text-lg font-semibold text-slate-900">
							Medicare Advantage, Supplement (Medigap) & Part D
						</h3>
						<p className="mt-2 text-sm text-slate-600">
							Compare Medicare Advantage plans, Medigap policies,
							and prescription drug coverage so you can feel
							confident about your care and costs.
						</p>
						<ul className="mt-4 space-y-2 text-sm text-slate-600">
							<li>• Reviewing current coverage for gaps</li>
							<li>• Checking doctors and hospitals in-network</li>
							<li>• Estimating yearly out-of-pocket costs</li>
							<li>
								• Explaining enrollment periods and deadlines
							</li>
						</ul>
					</div>

					{/* Individuals & Families */}
					<div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
						<div className="mb-3 text-xs font-semibold uppercase tracking-wide text-teal-600">
							Individuals & Families
						</div>
						<h3 className="text-lg font-semibold text-slate-900">
							ACA Marketplace & Private Health Plans
						</h3>
						<p className="mt-2 text-sm text-slate-600">
							Help comparing Marketplace (ACA) plans and private
							options, including how subsidies work and what your
							real monthly cost may be.
						</p>
						<ul className="mt-4 space-y-2 text-sm text-slate-600">
							<li>• Estimating tax credits and savings</li>
							<li>• Matching plans to preferred doctors</li>
							<li>
								• Explaining deductibles, copays, and
								coinsurance
							</li>
							<li>• Reviewing options during life changes</li>
						</ul>
					</div>

					{/* Self-Employed */}
					<div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
						<div className="mb-3 text-xs font-semibold uppercase tracking-wide text-teal-600">
							Self-Employed & Contractors
						</div>
						<h3 className="text-lg font-semibold text-slate-900">
							Health Coverage for Independent Workers
						</h3>
						<p className="mt-2 text-sm text-slate-600">
							Support for freelancers, 1099 workers, and small
							practice owners who don’t have employer-sponsored
							coverage.
						</p>
						<ul className="mt-4 space-y-2 text-sm text-slate-600">
							<li>• Evaluating solo coverage options</li>
							<li>• Planning around variable income</li>
							<li>• Understanding HSA-eligible plans</li>
							<li>• Reviewing coverage as your business grows</li>
						</ul>
					</div>

					{/* Small Business */}
					<div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
						<div className="mb-3 text-xs font-semibold uppercase tracking-wide text-teal-600">
							Small Businesses
						</div>
						<h3 className="text-lg font-semibold text-slate-900">
							Group Health Options for Teams
						</h3>
						<p className="mt-2 text-sm text-slate-600">
							Help exploring group health plans for small teams,
							including costs, contribution strategies, and
							employee questions.
						</p>
						<ul className="mt-4 space-y-2 text-sm text-slate-600">
							<li>• Comparing group plan options</li>
							<li>• Estimating employer vs. employee costs</li>
							<li>• Explaining benefits to your team</li>
							<li>• Reviewing renewal options each year</li>
						</ul>
					</div>
				</div>

				{/* Bottom CTA */}
				<div className="mt-10 flex flex-col items-center gap-3 text-center sm:flex-row sm:justify-between">
					<p className="text-sm text-slate-600">
						Not sure which type of plan you need? I’ll walk you
						through your options in plain language.
					</p>
					<a
						href="/contact"
						className="mt-2 inline-flex items-center justify-center rounded-full bg-teal-500 px-6 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-teal-400 sm:mt-0"
					>
						Start with a Free Coverage Review
					</a>
				</div>
			</div>
		</section>
	);
}
