import { notFound } from "next/navigation";
import { getAllResources, getResourceBySlug } from "@/lib/resources";

export async function generateStaticParams() {
	const articles = getAllResources();
	return articles.map((a) => ({ slug: a.slug }));
}

type ResourcePageProps = {
	params: Promise<{ slug: string }>;
};

export default async function ResourceArticlePage({
	params,
}: ResourcePageProps) {
	// ✅ Await the promise to get the actual params object
	const { slug } = await params;

	console.log("Resolved slug:", slug);

	const article = await getResourceBySlug(slug);

	if (!article) return notFound();

	const date = new Date(article.date).toLocaleDateString();

	return (
		<main className="bg-white">
			<section className="border-b border-slate-200 bg-slate-50/80">
				<div className="mx-auto max-w-3xl px-4 py-10 lg:px-0 lg:py-14">
					<p className="text-xs font-semibold uppercase tracking-wide text-teal-600">
						{article.category}
					</p>
					<h1 className="mt-2 text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
						{article.title}
					</h1>
					<p className="mt-3 text-sm text-slate-600 sm:text-base">
						{article.description}
					</p>
					<div className="mt-3 flex items-center gap-3 text-xs text-slate-500">
						<span>{date}</span>
						{article.readingTime && (
							<>
								<span>•</span>
								<span>{article.readingTime}</span>
							</>
						)}
					</div>
				</div>
			</section>

			<section className="py-10">
				<div className="mx-auto max-w-3xl px-4 lg:px-0 space-y-4">
					<div
						className="prose prose-sm sm:prose-base max-w-none prose-headings:text-slate-900 prose-p:text-slate-700 prose-a:text-teal-600"
						dangerouslySetInnerHTML={{
							__html: article.contentHtml,
						}}
					/>
				</div>
			</section>

			<p className="text-xs text-slate-400 mt-6">
				This article is demonstration content for a sample advisor
				website.
			</p>
		</main>
	);
}
