import "server-only";

import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const resourcesDir = path.join(process.cwd(), "src", "content", "resources");

export type ResourceMeta = {
	slug: string;
	title: string;
	description: string;
	date: string;
	readingTime: string;
	category: string;
	tags?: string[];
};

export type Resource = ResourceMeta & {
	contentHtml: string;
};

export function getResourceSlugs(): string[] {
	if (!fs.existsSync(resourcesDir)) {
		return [];
	}

	return fs
		.readdirSync(resourcesDir)
		.filter((file) => file.endsWith(".md"))
		.map((file) => file.replace(/\.md$/, ""));
}

export function getAllResources(): ResourceMeta[] {
	const slugs = getResourceSlugs();

	const resources = slugs
		.map((slug) => {
			const fullPath = path.join(resourcesDir, `${slug}.md`);
			const fileContents = fs.readFileSync(fullPath, "utf8");
			const { data } = matter(fileContents);

			return {
				slug,
				title: data.title as string,
				description: data.description as string,
				date: data.date as string,
				readingTime: (data.readingTime as string) ?? "",
				category: (data.category as string) ?? "General",
				tags: (data.tags as string[]) ?? [],
			};
		})
		.sort(
			(a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
		);

	return resources;
}

export async function getResourceBySlug(
	slug: string
): Promise<Resource | null> {
	const fullPath = path.join(resourcesDir, `${slug}.md`);

	if (!fs.existsSync(fullPath)) {
		return null;
	}

	const fileContents = fs.readFileSync(fullPath, "utf8");
	const { data, content } = matter(fileContents);

	const processed = await remark().use(html).process(content);
	const contentHtml = processed.toString();

	return {
		slug,
		title: data.title as string,
		description: data.description as string,
		date: data.date as string,
		readingTime: (data.readingTime as string) ?? "",
		category: (data.category as string) ?? "General",
		tags: (data.tags as string[]) ?? [],
		contentHtml,
	};
}
