export default function WhoIHelp() {
	return (
		<section className="bg-white py-16">
			<div className="mx-auto max-w-6xl px-4 lg:px-6">
				{/* Title + subtitle */}
				<div className="mb-12 text-center">
					<h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
						Who I Help
					</h2>
					<p className="mx-auto mt-3 max-w-2xl text-sm text-slate-600 sm:text-base">
						Personalized, unbiased guidance for every life
						situation. Whether you're choosing Medicare or finding a
						health plan for your family or business, I’m here to
						help.
					</p>
				</div>

				{/* Cards grid */}
				<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
					{/* Card 1 */}
					<div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
						<div className="mb-4 text-teal-500">👵</div>
						<h3 className="text-lg font-semibold text-slate-900">
							Medicare Beneficiaries
						</h3>
						<p className="mt-2 text-sm text-slate-600">
							Support with Medicare Advantage, Supplement
							(Medigap) and Part D plans.
						</p>
						<a
							href="/plans"
							className="mt-4 inline-block text-sm font-medium text-teal-600 hover:text-teal-700"
						>
							Learn more →
						</a>
					</div>

					{/* Card 2 */}
					<div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
						<div className="mb-4 text-teal-500">👨‍👩‍👧‍👦</div>
						<h3 className="text-lg font-semibold text-slate-900">
							Individuals & Families
						</h3>
						<p className="mt-2 text-sm text-slate-600">
							Find ACA Marketplace and private health plans that
							match your doctors, needs, and budget.
						</p>
						<a
							href="/plans"
							className="mt-4 inline-block text-sm font-medium text-teal-600 hover:text-teal-700"
						>
							Learn more →
						</a>
					</div>

					{/* Card 3 */}
					<div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
						<div className="mb-4 text-teal-500">💼</div>
						<h3 className="text-lg font-semibold text-slate-900">
							Self-Employed Professionals
						</h3>
						<p className="mt-2 text-sm text-slate-600">
							Simple guidance for freelancers, contractors, and
							independent workers.
						</p>
						<a
							href="/plans"
							className="mt-4 inline-block text-sm font-medium text-teal-600 hover:text-teal-700"
						>
							Learn more →
						</a>
					</div>

					{/* Card 4 */}
					<div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
						<div className="mb-4 text-teal-500">🏢</div>
						<h3 className="text-lg font-semibold text-slate-900">
							Small Business Owners
						</h3>
						<p className="mt-2 text-sm text-slate-600">
							Explore group health options for teams of any size,
							with no-obligation consultations.
						</p>
						<a
							href="/plans"
							className="mt-4 inline-block text-sm font-medium text-teal-600 hover:text-teal-700"
						>
							Learn more →
						</a>
					</div>
				</div>
			</div>
		</section>
	);
}
