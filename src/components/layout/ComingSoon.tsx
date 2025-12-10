import Link from "next/link";

export default function ComingSoon() {
	return (
		<main className="flex flex-col items-center justify-center min-h-screen text-center p-6">
			<h1 className="text-3xl font-semibold mb-3">Coming Soon</h1>
			<p className="mb-5 text-gray-600">
				This page is currently under development
			</p>
			<Link
				href="/"
				className="px-5 py-2 bg-brand text-white rounded-lg hover:bg-[#21a37c] transition"
			>
				Go Back Home
			</Link>
		</main>
	);
}
