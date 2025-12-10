export default function TestimonialsSection() {
	return (
		<section className="bg-white py-20">
			<div className="mx-auto max-w-6xl px-4 lg:px-6">
				{/* Title */}
				<div className="mb-12 text-center">
					<h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
						What Clients Are Saying
					</h2>
					<p className="mx-auto mt-3 max-w-2xl text-sm text-slate-600 sm:text-base">
						Here are a few examples of how clear guidance and a bit
						of extra time can make a real difference.
					</p>
				</div>

				{/* Testimonials grid */}
				<div className="grid gap-6 md:grid-cols-3">
					{/* Testimonial 1 */}
					<div className="flex h-full flex-col rounded-2xl border border-slate-200 bg-slate-50 p-6">
						<p className="text-sm text-slate-700">
							“Medicare felt overwhelming until we talked. I left
							our conversation actually understanding my options
							and feeling confident in the plan we chose.”
						</p>
						<div className="mt-4 border-t border-slate-200 pt-3 text-xs text-slate-500">
							<div className="font-semibold text-slate-700">
								Margaret L.
							</div>
							<div>Medicare Client, Age 67</div>
						</div>
					</div>

					{/* Testimonial 2 */}
					<div className="flex h-full flex-col rounded-2xl border border-slate-200 bg-slate-50 p-6">
						<p className="text-sm text-slate-700">
							“As a self-employed designer, I was never sure if I
							was overpaying. Now I have a plan that fits my
							doctors and budget, and I know what I’m paying for.”
						</p>
						<div className="mt-4 border-t border-slate-200 pt-3 text-xs text-slate-500">
							<div className="font-semibold text-slate-700">
								Chris D.
							</div>
							<div>Self-Employed, Individual Plan</div>
						</div>
					</div>

					{/* Testimonial 3 */}
					<div className="flex h-full flex-col rounded-2xl border border-slate-200 bg-slate-50 p-6">
						<p className="text-sm text-slate-700">
							“We were able to review options for our small team
							and understand the tradeoffs without feeling rushed.
							It made offering benefits feel manageable.”
						</p>
						<div className="mt-4 border-t border-slate-200 pt-3 text-xs text-slate-500">
							<div className="font-semibold text-slate-700">
								Jordan P.
							</div>
							<div>Small Business Owner, 8 Employees</div>
						</div>
					</div>
				</div>

				{/* Gentle reassurance */}
				<div className="mt-10 text-center">
					<p className="text-sm text-slate-600">
						Experiences will vary, but every client receives the
						same level of care, patience, and clear explanation.
					</p>
				</div>
			</div>
		</section>
	);
}
