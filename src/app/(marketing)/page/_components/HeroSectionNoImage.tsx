const HeroSectionNoImage = () => {
	return (
		<section className="border-b border-slate-200 bg-linear-to-b from-white to-slate-50">
			<div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 lg:grid-cols-2 lg:items-center lg:px-6 lg:py-20">
				{/* Left column: copy */}
				<div className="space-y-6">
					<div className="inline-flex items-center gap-2 rounded-full bg-teal-50 px-3 py-1 text-xs font-medium text-teal-700">
						<span className="h-1.5 w-1.5 rounded-full bg-teal-500" />
						Licensed Health Advisor
					</div>

					<h1 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
						Find Health Coverage
						<span className="block text-teal-600">
							That Actually Fits Your Life
						</span>
					</h1>

					<p className="max-w-xl text-sm leading-relaxed text-slate-600 sm:text-base">
						I help individuals, families, and Medicare-eligible
						adults compare plans, avoid costly mistakes, and feel
						confident in their coverage — at no extra cost to you.
						Get clear, personalized guidance in plain language.
					</p>

					{/* CTAs */}
					<div className="flex flex-wrap items-center gap-3">
						<a
							href="#booking"
							className="rounded-full bg-teal-500 px-6 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-teal-600"
						>
							Book Free Coverage Review
						</a>
						<a
							href="#services"
							className="rounded-full border border-slate-200 px-5 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-100"
						>
							See Plans I Help With
						</a>
					</div>

					{/* Trust bullets */}
					<div className="grid gap-3 text-xs text-slate-600 sm:grid-cols-3 sm:text-sm">
						<div className="flex items-start gap-2">
							<span className="mt-0.5 text-teal-500">✔</span>
							<span>
								No extra fees — same rates as going direct
							</span>
						</div>
						<div className="flex items-start gap-2">
							<span className="mt-0.5 text-teal-500">✔</span>
							<span>
								Licensed & appointmented with multiple carriers
							</span>
						</div>
						<div className="flex items-start gap-2">
							<span className="mt-0.5 text-teal-500">✔</span>
							<span>
								Clear, simple explanations in plain language
							</span>
						</div>
					</div>
				</div>

				{/* Right column: visual card */}
				<div className="lg:justify-self-end">
					<div className="relative mx-auto max-w-sm rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
						<div className="mb-4 flex items-center justify-between gap-2">
							<div>
								<p className="text-xs font-medium text-slate-500">
									Coverage Snapshot
								</p>
								<p className="text-sm font-semibold text-slate-900">
									Johnson Family · Age 64 & 62
								</p>
							</div>
							<span className="rounded-full bg-emerald-50 px-3 py-1 text-[10px] font-semibold uppercase tracking-wide text-emerald-700">
								Saved $142/mo
							</span>
						</div>

						<div className="space-y-3 text-xs text-slate-700">
							<div className="flex items-start gap-2">
								<span className="mt-0.5 text-teal-500">●</span>
								<div>
									<p className="font-medium text-slate-900">
										Current plan reviewed
									</p>
									<p className="text-slate-500">
										Checked network, prescriptions, and
										out-of-pocket limits.
									</p>
								</div>
							</div>

							<div className="flex items-start gap-2">
								<span className="mt-0.5 text-teal-500">●</span>
								<div>
									<p className="font-medium text-slate-900">
										5 plan options compared
									</p>
									<p className="text-slate-500">
										From multiple carriers including
										Medicare Advantage & Medigap.
									</p>
								</div>
							</div>

							<div className="flex items-start gap-2">
								<span className="mt-0.5 text-teal-500">●</span>
								<div>
									<p className="font-medium text-slate-900">
										Final choice simplified
									</p>
									<p className="text-slate-500">
										Side-by-side breakdown of costs &
										coverage in plain language.
									</p>
								</div>
							</div>
						</div>

						<div className="mt-4 rounded-xl bg-slate-50 px-4 py-3 text-xs text-slate-600">
							<p className="font-medium text-slate-800">
								Every client receives a personalized coverage
								summary — no pressure, just clear options.
							</p>
							<p className="mt-1">
								Most people review{" "}
								<span className="font-semibold">3–5 plans</span>{" "}
								before deciding.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default HeroSectionNoImage;
