import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
	return (
		<main className="bg-white">
			{/* Top section */}
			<section className="border-b border-slate-200 bg-slate-50/80">
				<div className="mx-auto max-w-6xl px-4 py-10 lg:px-6 lg:py-14">
					<p className="text-xs font-semibold uppercase tracking-wide text-teal-600">
						About
					</p>
					<h1 className="mt-2 text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
						About Your Health Advisor
					</h1>
					<p className="mt-3 max-w-2xl text-sm text-slate-600 sm:text-base">
						Choosing a health or Medicare plan is about more than
						just premiums and deductibles. It’s about feeling
						confident that you and your family will be taken care of
						when it matters most. My role is to listen, explain, and
						guide — at no extra cost to you.
					</p>
				</div>
			</section>

			{/* Main content */}
			<section className="py-14">
				<div className="mx-auto max-w-6xl px-4 lg:px-6">
					<div className="grid gap-10 lg:grid-cols-3 lg:items-start">
						{/* Photo + basic details */}
						<div className="lg:col-span-1">
							<div className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-50">
								<div className="relative h-72 w-full">
									{/* Advisor photo goes here */}
									<Image
										src="/advisor.png"
										alt="Photo of your health advisor"
										fill
										className="h-full w-full object-cover object-top"
									/>
								</div>
								<div className="p-5">
									<p className="text-sm font-semibold text-slate-900">
										Your Advisor Name
									</p>
									<p className="mt-1 text-xs text-slate-500">
										Licensed Health & Medicare Advisor
									</p>

									<div className="mt-4 space-y-1 text-xs text-slate-600">
										<p>
											<strong className="font-semibold text-slate-800">
												States served:
											</strong>{" "}
											VA, NC, MD (example)
										</p>
										<p>
											<strong className="font-semibold text-slate-800">
												License:
											</strong>{" "}
											State health & life insurance
											licensed agent
										</p>
										<p>
											<strong className="font-semibold text-slate-800">
												Focus areas:
											</strong>{" "}
											Medicare, Marketplace, individual &
											small group plans
										</p>
									</div>
								</div>
							</div>
						</div>

						{/* Story + approach */}
						<div className="space-y-8 lg:col-span-2">
							{/* Personal story */}
							<div>
								<h2 className="text-lg font-semibold text-slate-900 sm:text-xl">
									A Little About My Background
								</h2>
								<p className="mt-3 text-sm text-slate-600 sm:text-base">
									You can tweak this section with your own
									story. For now: I’ve worked in the health
									insurance space for several years, helping
									individuals, families, and Medicare-eligible
									adults understand their coverage options.
									Over time, I saw how often people felt
									rushed, overwhelmed, or unsure if they were
									really choosing the right plan.
								</p>
								<p className="mt-3 text-sm text-slate-600 sm:text-base">
									I started this independent advisory practice
									so I could spend more time with each person,
									explain things in plain language, and focus
									on what truly matters: your doctors, your
									medications, your budget, and your peace of
									mind.
								</p>
							</div>

							{/* Approach / philosophy */}
							<div>
								<h2 className="text-lg font-semibold text-slate-900 sm:text-xl">
									My Approach to Working With You
								</h2>
								<div className="mt-3 grid gap-6 md:grid-cols-2">
									<div>
										<h3 className="text-sm font-semibold text-slate-900">
											Listening First
										</h3>
										<p className="mt-2 text-sm text-slate-600">
											Every conversation starts with your
											questions and your current situation
											— not with a specific product or
											plan.
										</p>
									</div>
									<div>
										<h3 className="text-sm font-semibold text-slate-900">
											Multiple Carriers, One Guide
										</h3>
										<p className="mt-2 text-sm text-slate-600">
											I work with multiple carriers so we
											can compare options together and
											find a plan that truly fits your
											needs.
										</p>
									</div>
									<div>
										<h3 className="text-sm font-semibold text-slate-900">
											Plain-Language Explanations
										</h3>
										<p className="mt-2 text-sm text-slate-600">
											I explain deductibles, copays,
											networks, and coverage in clear
											terms so you feel informed, not
											overwhelmed.
										</p>
									</div>
									<div>
										<h3 className="text-sm font-semibold text-slate-900">
											No Extra Cost to You
										</h3>
										<p className="mt-2 text-sm text-slate-600">
											Your plan costs the same whether you
											enroll directly or with my help. You
											simply gain a guide in the process.
										</p>
									</div>
								</div>
							</div>

							{/* Values */}
							<div>
								<h2 className="text-lg font-semibold text-slate-900 sm:text-xl">
									What You Can Expect
								</h2>
								<ul className="mt-3 space-y-2 text-sm text-slate-600 sm:text-base">
									<li>
										• Straightforward, honest explanations
									</li>
									<li>• A calm, no-pressure environment</li>
									<li>
										• Respect for your time and preferences
									</li>
									<li>
										• Help reviewing your plan each year, if
										you’d like it
									</li>
								</ul>
							</div>

							{/* CTA */}
							<div className="mt-4 rounded-2xl border border-teal-100 bg-teal-50 px-5 py-5">
								<h3 className="text-sm font-semibold text-slate-900 sm:text-base">
									Ready to talk through your options?
								</h3>
								<p className="mt-2 text-sm text-slate-700">
									If you’d like a second opinion on your
									current coverage or are choosing a plan for
									the first time, I’m here to help.
								</p>
								<div className="mt-3 flex flex-wrap gap-3">
									<Link
										href="/contact"
										className="inline-flex items-center justify-center rounded-full bg-teal-500 px-6 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-teal-400"
									>
										Book a Free Coverage Review
									</Link>
									<a
										href="tel:5551234567"
										className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-2.5 text-sm font-medium text-slate-800 hover:bg-slate-50"
									>
										Call with a Quick Question
									</a>
								</div>
							</div>

							{/* Compliance line */}
							<p className="mt-4 text-xs text-slate-500">
								Not connected with or endorsed by the U.S.
								Government or the federal Medicare program. This
								is a solicitation of insurance. If you respond
								to this offer, an insurance agent may contact
								you.
							</p>
						</div>
					</div>
				</div>
			</section>
		</main>
	);
}
