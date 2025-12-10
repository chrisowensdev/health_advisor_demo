import Link from "next/link";
import { getAllResources } from "@/lib/resources";

export default async function ResourcesPage() {
	const articles = getAllResources();

	return (
		<main className="bg-white">
			{/* Page hero */}
			<section className="border-b border-slate-200 bg-slate-50/80">
				<div className="mx-auto max-w-6xl px-4 py-10 lg:px-6 lg:py-14">
					<p className="text-xs font-semibold uppercase tracking-wide text-teal-600">
						Resources
					</p>
					<h1 className="mt-2 text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
						Resources & Guides
					</h1>
					<p className="mt-3 max-w-2xl text-sm text-slate-600 sm:text-base">
						Short, plain-language articles to help you feel more
						prepared and confident when making decisions about
						Medicare and health coverage. These are educational only
						and not specific recommendations.
					</p>
				</div>
			</section>

			{/* Articles list */}
			<section className="py-14">
				<div className="mx-auto max-w-6xl px-4 lg:px-6">
					<div className="grid gap-6 md:grid-cols-2">
						{articles.map((article) => (
							<article
								key={article.slug}
								className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow"
							>
								<p className="text-xs font-semibold uppercase tracking-wide text-teal-600">
									{article.category}
								</p>
								<h2 className="mt-2 text-lg font-semibold text-slate-900">
									<Link href={`/resources/${article.slug}`}>
										{article.title}
									</Link>
								</h2>
								<p className="mt-2 text-sm text-slate-600">
									{article.description}
								</p>
								<div className="mt-4 flex items-center justify-between text-xs text-slate-500">
									<span>
										{new Date(
											article.date
										).toLocaleDateString()}
									</span>
									{article.readingTime && (
										<span>{article.readingTime}</span>
									)}
								</div>
								<div className="mt-4">
									<Link
										href={`/resources/${article.slug}`}
										className="text-sm font-medium text-teal-600 hover:text-teal-700"
									>
										Read article →
									</Link>
								</div>
							</article>
						))}
					</div>

					<p className="mt-10 text-xs text-slate-500">
						These resources are for educational purposes only and
						are not a substitute for personalized advice. To discuss
						your specific situation, please{" "}
						<Link
							href="/contact"
							className="text-teal-600 hover:text-teal-700"
						>
							contact me
						</Link>
						.
					</p>
				</div>
			</section>
		</main>
	);
}
