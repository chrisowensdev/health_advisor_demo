import ContactForm from "./_components/ContactForm";

export default function ContactPage() {
	return (
		<main className="bg-white">
			<section className="border-b border-slate-200 bg-slate-50/60">
				<div className="mx-auto max-w-6xl px-4 py-12 lg:px-6 lg:py-16">
					<div className="grid gap-10 lg:grid-cols-3 lg:items-start">
						{/* Left: text content */}
						<div className="lg:col-span-1">
							<p className="text-xs font-semibold uppercase tracking-wide text-teal-600">
								Contact
							</p>
							<h1 className="mt-2 text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
								Book Your Free Coverage Review
							</h1>
							<p className="mt-3 text-sm text-slate-600 sm:text-base">
								Share a few details and I’ll reach out to
								schedule a time that works for you. There’s no
								cost and no obligation — just clear information
								about your options.
							</p>

							<div className="mt-6 space-y-3 text-sm text-slate-600">
								<div className="flex gap-2">
									<span className="mt-0.5 text-teal-500">
										✔
									</span>
									<p>
										Review your current plan for gaps or
										savings opportunities.
									</p>
								</div>
								<div className="flex gap-2">
									<span className="mt-0.5 text-teal-500">
										✔
									</span>
									<p>
										Compare Medicare, Marketplace, and other
										coverage options.
									</p>
								</div>
								<div className="flex gap-2">
									<span className="mt-0.5 text-teal-500">
										✔
									</span>
									<p>
										Get plain-language answers to your
										questions.
									</p>
								</div>
							</div>

							<div className="mt-8 text-sm text-slate-600">
								<p className="font-semibold text-slate-900">
									Prefer to reach out directly?
								</p>
								<p className="mt-2">
									Phone:{" "}
									<a
										href="tel:5551234567"
										className="text-teal-600 hover:text-teal-700"
									>
										555-123-4567
									</a>
									<br />
									Email:{" "}
									<a
										href="mailto:info@advisor.com"
										className="text-teal-600 hover:text-teal-700"
									>
										info@advisor.com
									</a>
								</p>
								<p className="mt-2 text-xs text-slate-500">
									Typical response time: within one business
									day.
								</p>
							</div>
						</div>

						{/* Right: form */}
						<ContactForm />
					</div>

					{/* Disclaimer under everything */}
					<p className="mt-10 text-xs text-slate-500">
						Not connected with or endorsed by the U.S. Government or
						the federal Medicare program. This is a solicitation of
						insurance. If you respond to this offer, an insurance
						agent may contact you.
					</p>
				</div>
			</section>
		</main>
	);
}
