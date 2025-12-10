export default function Footer() {
	return (
		<footer className="bg-slate-100 border-t border-slate-200 py-12">
			<div className="mx-auto max-w-6xl px-4 lg:px-6">
				<div className="grid gap-10 md:grid-cols-4">
					{/* Column 1: Brand */}
					<div>
						<h3 className="text-lg font-semibold text-slate-900">
							YourAdvisorName
						</h3>
						<p className="mt-2 text-sm text-slate-600">
							Clear, unbiased guidance for Medicare and health
							coverage decisions.
						</p>

						<p className="mt-4 text-xs text-slate-500">
							Serving clients in: VA, NC, MD (example)
						</p>
					</div>

					{/* Column 2: Navigation */}
					<div>
						<h4 className="text-sm font-semibold text-slate-900">
							Navigation
						</h4>
						<ul className="mt-3 space-y-2 text-sm text-slate-600">
							<li>
								<a href="/" className="hover:text-slate-900">
									Home
								</a>
							</li>
							<li>
								<a
									href="/plans"
									className="hover:text-slate-900"
								>
									Plans
								</a>
							</li>
							<li>
								<a
									href="/about"
									className="hover:text-slate-900"
								>
									About
								</a>
							</li>
							<li>
								<a
									href="/faqs"
									className="hover:text-slate-900"
								>
									FAQs
								</a>
							</li>
							<li>
								<a
									href="/resources"
									className="hover:text-slate-900"
								>
									Resources
								</a>
							</li>
							<li>
								<a
									href="/contact"
									className="hover:text-slate-900"
								>
									Contact
								</a>
							</li>
						</ul>
					</div>

					{/* Column 3: Contact */}
					<div>
						<h4 className="text-sm font-semibold text-slate-900">
							Contact
						</h4>
						<ul className="mt-3 space-y-2 text-sm text-slate-600">
							<li>
								Phone:{" "}
								<a
									href="tel:5551234567"
									className="text-teal-600 hover:text-teal-700"
								>
									555-123-4567
								</a>
							</li>
							<li>
								Email:{" "}
								<a
									href="mailto:info@advisor.com"
									className="text-teal-600 hover:text-teal-700"
								>
									info@advisor.com
								</a>
							</li>
							<li className="pt-2 text-xs text-slate-500">
								Hours: Mon–Fri, 9am–5pm
							</li>
						</ul>
					</div>

					{/* Column 4: Legal */}
					<div>
						<h4 className="text-sm font-semibold text-slate-900">
							Legal
						</h4>
						<ul className="mt-3 space-y-2 text-sm text-slate-600">
							<li>
								<a
									href="/legal/disclaimer"
									className="hover:text-slate-900"
								>
									Disclaimer
								</a>
							</li>
							<li>
								<a
									href="/legal/privacy"
									className="hover:text-slate-900"
								>
									Privacy Policy
								</a>
							</li>
						</ul>

						{/* Required Medicare disclaimer */}
						<p className="mt-4 text-xs text-slate-500 leading-relaxed">
							Not connected with or endorsed by the U.S.
							Government or the federal Medicare program.
						</p>
					</div>
				</div>

				{/* Bottom row */}
				<div className="mt-10 border-t border-slate-300 pt-6 text-center text-xs text-slate-500">
					© {new Date().getFullYear()} YourAdvisorName. All rights
					reserved.
				</div>
			</div>
		</footer>
	);
}
