import { advisorSiteConfig } from "@/config/siteConfig";
import Link from "next/link";

const faqs = [
	{
		category: "General",
		items: [
			{
				question: "Do I pay anything for your help?",
				answer: "No. Your plan costs the same whether you enroll directly with a carrier or work with me. My role is to help you compare options, understand the differences, and choose a plan that fits your needs.",
			},
			{
				question: "Are you affiliated with the government or Medicare?",
				answer: "No. I am not connected with or endorsed by the U.S. Government or the federal Medicare program. I’m a licensed independent insurance agent who helps you understand and compare available plans.",
			},
			{
				question: "Which states can you help in?",
				answer: "That depends on my current state licenses. For this demo, imagine I’m licensed in Virginia, North Carolina, and Maryland. In a real practice, this section would list your exact states.",
			},
		],
	},
	{
		category: "Medicare",
		items: [
			{
				question:
					"Can you help me choose between Medicare Advantage and Medigap?",
				answer: "Yes. We’ll walk through how both options work in your situation — including your doctors, medications, and budget. I’ll explain the pros and cons in plain language so you can decide which structure feels better for you.",
			},
			{
				question: "Can you review my existing Medicare plan?",
				answer: "Absolutely. Many people benefit from an annual review. We’ll look at your current coverage, any changes in your health or medications, and upcoming plan changes so you can decide whether to stay where you are or explore alternatives.",
			},
			{
				question: "When can I change my Medicare plan?",
				answer: "There are specific enrollment periods for making changes, such as the Annual Enrollment Period (AEP) and other special situations. During our conversation, I’ll let you know what timing applies to you and what options are available.",
			},
		],
	},
	{
		category: "Individuals & Families",
		items: [
			{
				question: "Can you help with ACA Marketplace plans?",
				answer: "Yes. I can help you compare Marketplace (ACA) plans, estimate potential tax credits or savings, and make sure your preferred doctors and hospitals are in-network when possible.",
			},
			{
				question: "What if I’m not sure whether I qualify for savings?",
				answer: "That’s very common. We’ll walk through the basics together and review how income, household size, and other factors affect potential savings. I can’t provide tax advice, but I can help you understand how the rules generally work.",
			},
		],
	},
	{
		category: "Process & Cost",
		items: [
			{
				question: "What happens during a free coverage review?",
				answer: "First, we talk about your current situation: your doctors, medications, and any concerns you have. Then I review available plan options and explain them in clear terms. If you decide to enroll in a plan I’m appointed with, I can help with the enrollment process.",
			},
			{
				question:
					"Do I have to decide on a plan during our first conversation?",
				answer: "No. The goal of our first discussion is clarity, not pressure. You’re welcome to take time to think, talk with family members, and come back with questions.",
			},
			{
				question: "How are you compensated?",
				answer: "In many cases, I’m paid by the insurance companies when a client enrolls in a plan I’m appointed with. Your premiums are typically the same as if you enrolled directly. I’m happy to explain this in more detail during our conversation.",
			},
		],
	},
	{
		category: "Coverage Changes",
		items: [
			{
				question: "What if my doctors or prescriptions change?",
				answer: "If your doctors, pharmacies, or medications change, it’s a good idea to review your coverage. I can help you check whether your current plan still fits or whether other options may make more sense.",
			},
			{
				question: "Can you help if I move to a new state?",
				answer: "Moving can affect your coverage options and enrollment periods. If you’re planning a move or have recently moved, we can review what that means for your current plan and what new plans may be available.",
			},
		],
	},
];

export default function FAQsPage() {
	return (
		<main className="bg-white">
			{/* Page hero */}
			<section className="border-b border-slate-200 bg-slate-50/80">
				<div className="mx-auto max-w-6xl px-4 py-10 lg:px-6 lg:py-14">
					<p className="text-xs font-semibold uppercase tracking-wide text-teal-600">
						FAQs
					</p>
					<h1 className="mt-2 text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
						Frequently Asked Questions
					</h1>
					<p className="mt-3 max-w-2xl text-sm text-slate-600 sm:text-base">
						Health and Medicare coverage can feel complicated. These
						questions cover many of the topics that come up in
						conversations with clients. If you don’t see your
						question here, you’re always welcome to reach out.
					</p>
				</div>
			</section>

			{/* FAQ content */}
			<section className="py-14">
				<div className="mx-auto max-w-6xl px-4 lg:px-6 space-y-10">
					{faqs.map((group) => (
						<section key={group.category}>
							<h2 className="text-lg font-semibold text-slate-900 sm:text-xl">
								{group.category}
							</h2>
							<div className="mt-4 space-y-3">
								{group.items.map((item) => (
									<details
										key={item.question}
										className="group rounded-2xl border border-slate-200 bg-white px-5 py-4 open:bg-slate-50"
									>
										<summary className="flex cursor-pointer list-none items-center justify-between gap-4">
											<span className="text-sm font-medium text-slate-900">
												{item.question}
											</span>
											<span className="text-slate-400 group-open:hidden">
												+
											</span>
											<span className="hidden text-slate-400 group-open:inline">
												–
											</span>
										</summary>
										<p className="mt-2 text-sm text-slate-600">
											{item.answer}
										</p>
									</details>
								))}
							</div>
						</section>
					))}
				</div>
			</section>

			{/* Bottom CTA */}
			<section className="bg-teal-500 py-12">
				<div className="mx-auto max-w-6xl px-4 text-center text-white lg:px-6">
					<h2 className="text-xl font-semibold tracking-tight sm:text-2xl">
						Have a question that isn’t listed here?
					</h2>
					<p className="mx-auto mt-3 max-w-2xl text-sm text-teal-50 sm:text-base">
						Every situation is a little different. If you have
						questions about your current coverage or you’re not sure
						where to start, I’m happy to talk it through with you.
					</p>
					<Link
						href="/contact"
						className="mt-6 inline-flex items-center justify-center rounded-full bg-white px-8 py-3 text-sm font-semibold text-teal-600 shadow-sm hover:bg-teal-50"
					>
						{advisorSiteConfig.contactCopy.primaryCtaLabel}
					</Link>
				</div>
			</section>
		</main>
	);
}
