export default function FAQPreview() {
	return (
		<section className="bg-slate-50 py-20">
			<div className="mx-auto max-w-6xl px-4 lg:px-6">
				{/* Title */}
				<div className="mb-12 text-center">
					<h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
						Frequently Asked Questions
					</h2>
					<p className="mx-auto mt-3 max-w-2xl text-sm text-slate-600 sm:text-base">
						Here are a few common questions I hear — and how I help
						make things clearer.
					</p>
				</div>

				{/* Questions grid */}
				<div className="grid gap-6 md:grid-cols-2">
					{/* FAQ 1 */}
					<div className="rounded-2xl bg-white p-6 shadow-sm border border-slate-200">
						<h3 className="text-sm font-semibold text-slate-900">
							Do I pay anything for your help?
						</h3>
						<p className="mt-2 text-sm text-slate-600">
							No — your plan costs the same whether you work with
							me or enroll on your own. I’m here to help you
							compare and decide with confidence.
						</p>
					</div>

					{/* FAQ 2 */}
					<div className="rounded-2xl bg-white p-6 shadow-sm border border-slate-200">
						<h3 className="text-sm font-semibold text-slate-900">
							How do I know which plan is right for me?
						</h3>
						<p className="mt-2 text-sm text-slate-600">
							We review your doctors, medications, and budget
							together. Then I compare plans and show you the
							differences in clear, simple language.
						</p>
					</div>

					{/* FAQ 3 */}
					<div className="rounded-2xl bg-white p-6 shadow-sm border border-slate-200">
						<h3 className="text-sm font-semibold text-slate-900">
							Can you help me review my current coverage?
						</h3>
						<p className="mt-2 text-sm text-slate-600">
							Absolutely — most clients benefit from a yearly
							review to make sure their plan still fits their
							needs.
						</p>
					</div>

					{/* FAQ 4 */}
					<div className="rounded-2xl bg-white p-6 shadow-sm border border-slate-200">
						<h3 className="text-sm font-semibold text-slate-900">
							What if my doctors or prescriptions change?
						</h3>
						<p className="mt-2 text-sm text-slate-600">
							I’ll help you understand how changes may affect your
							coverage and compare updated plan options if needed.
						</p>
					</div>
				</div>

				{/* Link to full FAQ page */}
				<div className="mt-10 text-center">
					<a
						href="/faqs"
						className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-100"
					>
						View All FAQs →
					</a>
				</div>
			</div>
		</section>
	);
}
