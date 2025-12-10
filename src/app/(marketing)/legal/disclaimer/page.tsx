export default function MedicareDisclaimerPage() {
	return (
		<main className="bg-white py-12">
			<div className="mx-auto max-w-3xl px-4 space-y-6">
				<h1 className="text-3xl font-semibold text-slate-900">
					Medicare Disclaimer
				</h1>

				<p className="text-slate-700 text-sm sm:text-base">
					The information provided on this website is for general
					educational purposes only and should not be construed as
					individualized Medicare or health insurance advice.
				</p>

				<h2 className="text-xl font-semibold text-slate-900">
					Required Medicare Disclaimer
				</h2>

				<p className="text-slate-700">
					<strong>
						“We do not offer every plan available in your area. Any
						information we provide is limited to those plans we do
						offer in your area. Please contact Medicare.gov,
						1-800-MEDICARE, or your local State Health Insurance
						Program (SHIP) to get information on all of your
						options.”
					</strong>
				</p>

				<h2 className="text-xl font-semibold text-slate-900">
					Not Connected With or Endorsed By Medicare
				</h2>
				<p className="text-slate-700">
					This site is not connected with or endorsed by the U.S.
					Government or the federal Medicare program. The agent may be
					compensated by insurance carriers for enrollments in certain
					plans.
				</p>

				<h2 className="text-xl font-semibold text-slate-900">
					Accuracy of Information
				</h2>
				<p className="text-slate-700">
					Efforts are made to provide accurate and current
					information, but plan availability, benefits, premiums,
					provider networks, and rules may change. Always verify plan
					details directly with Medicare or the plan carrier.
				</p>

				<h2 className="text-xl font-semibold text-slate-900">
					No Guarantee of Eligibility
				</h2>
				<p className="text-slate-700">
					Eligibility for Medicare Advantage, Medicare Supplement, or
					Part D plans depends on federal and state rules, enrollment
					periods, and your specific circumstances.
				</p>

				<h2 className="text-xl font-semibold text-slate-900">
					Consultation Disclaimer
				</h2>
				<p className="text-slate-700">
					Conversations, estimates, or guidance provided through this
					website or via email/phone do not guarantee enrollment or
					coverage. A formal application is required for enrollment
					into any plan.
				</p>

				<p className="text-sm text-slate-500 mt-6">
					Last updated: {new Date().getFullYear()}
				</p>
			</div>
		</main>
	);
}
