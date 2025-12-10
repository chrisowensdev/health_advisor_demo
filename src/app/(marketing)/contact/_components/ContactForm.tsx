"use client";

import { useState } from "react";
import Link from "next/link";
import { site } from "@/content/site";
import InputField from "./InputField";
import SelectField from "./SelectField";
import TextArea from "./TextArea";
import { advisorSiteConfig } from "@/config/siteConfig";

export default function ContactForm() {
	// basic client-side state & validation
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");
	const [need, setNeed] = useState(""); // was "budget"
	const [error, setError] = useState<string | null>(null);
	const [hp, setHp] = useState(""); // honeypot
	const [status, setStatus] = useState<
		"idle" | "sending" | "success" | "error"
	>("idle");
	const [startedAt, setStartedAt] = useState<number>(() => Date.now());

	async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();
		if (status === "sending") return;
		setStatus("sending");
		setError(null);

		const form = e.currentTarget;
		const fd = new FormData(form);

		// honeypot: if bots fill this, bail silently
		const website = (fd.get("website") as string) || "";
		if (website.length) {
			setStatus("success");
			form.reset();
			setStartedAt(Date.now());
			return;
		}

		const payload = {
			name: fd.get("name"),
			email: fd.get("email"),
			message: fd.get("message"),
			// keep the same key "budget" for backend, but repurpose the meaning
			budget: fd.get("budget"),
			website, // honeypot field (empty for humans)
			startedAt, // ms epoch captured on mount
			userAgent: navigator.userAgent,
		};

		try {
			const res = await fetch(
				`${advisorSiteConfig.siteUrl}/contact.php`,
				{
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify(payload),
				}
			);

			const json = await res.json().catch(() => null);
			if (!res.ok || !json?.ok) {
				setError(json?.error ?? "Something went wrong.");
				setStatus("error");
				return;
			}

			form.reset();
			setName("");
			setEmail("");
			setNeed("");
			setMessage("");
			setStartedAt(Date.now());
			setStatus("success");
		} catch {
			setError("Network error. Please try again.");
			setStatus("error");
		}
	}

	return (
		<div className="lg:col-span-2">
			<form
				onSubmit={onSubmit}
				className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8"
			>
				<div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
					<InputField
						id="name"
						label="Your name"
						name="name"
						value={name}
						onChange={(e) => setName(e.target.value)}
						autoComplete="name"
						required
					/>
					<InputField
						id="email"
						type="email"
						label="Email address"
						name="email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						autoComplete="email"
						required
					/>
				</div>

				<div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
					<SelectField
						id="budget"
						label="What do you need help with?"
						value={need}
						name="budget"
						onChange={(e) => setNeed(e.target.value)}
						options={[
							{
								value: "",
								label: "Select an option",
							},
							{
								value: "medicare",
								label: "Medicare (Advantage, Supplement, Part D)",
							},
							{
								value: "individual-family",
								label: "Individual or family health coverage",
							},
							{
								value: "self-employed",
								label: "Coverage as a self-employed / 1099 worker",
							},
							{
								value: "small-business",
								label: "Group coverage for a small business",
							},
							{
								value: "not-sure",
								label: "I’m not sure — I just need guidance",
							},
						]}
					/>
				</div>

				<div className="mt-6">
					<TextArea
						id="message"
						label="Tell me a bit about your situation"
						value={message}
						name="message"
						onChange={(e) => setMessage(e.target.value)}
						rows={6}
						required
					/>
				</div>

				{/* honeypot hidden field */}
				<div className="hidden" aria-hidden>
					<label htmlFor="website">Website</label>
					<input
						id="website"
						name="website"
						value={hp}
						onChange={(e) => setHp(e.target.value)}
					/>
				</div>

				{status === "success" && (
					<p className="mt-4 text-sm text-teal-600">
						Thank you — your message has been received. I’ll get
						back to you shortly.
					</p>
				)}
				{status === "error" && (
					<p className="mt-4 text-sm text-red-600">{error}</p>
				)}

				<div className="mt-6 flex flex-wrap items-center gap-3">
					<button
						type="submit"
						disabled={status === "sending"}
						className="inline-flex items-center justify-center rounded-full bg-teal-500 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-teal-400 disabled:opacity-60"
					>
						{status === "sending" ? "Sending…" : "Send message"}
					</button>
					<Link
						href={`mailto:${advisorSiteConfig.email}`}
						className="inline-flex items-center justify-center rounded-full border border-slate-300 px-6 py-3 text-sm font-medium text-slate-800 shadow-sm transition hover:bg-slate-50"
					>
						Email me directly
					</Link>
				</div>

				<p className="mt-4 text-xs text-slate-500">
					By sending this form you agree to our{" "}
					<Link
						href="/legal/privacy"
						className="underline underline-offset-2"
					>
						Privacy Policy
					</Link>
					. Your details are used only to respond to your inquiry.
				</p>
			</form>
		</div>
	);
}
