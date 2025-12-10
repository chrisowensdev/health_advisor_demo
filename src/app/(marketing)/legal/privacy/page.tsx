export default function PrivacyPolicyPage() {
	return (
		<main className="bg-white py-12">
			<div className="mx-auto max-w-3xl px-4 space-y-6">
				<h1 className="text-3xl font-semibold text-slate-900">
					Privacy Policy
				</h1>

				<p className="text-slate-700 text-sm sm:text-base">
					This Privacy Policy explains how we collect, use, and
					protect your personal information when you visit this
					website or submit information through our contact form. This
					website is intended for general informational purposes only
					and is not a HIPAA-covered system.
				</p>

				<h2 className="text-xl font-semibold text-slate-900">
					Information We Collect
				</h2>

				<p className="text-slate-700">
					When you contact us through this website, we may collect:
				</p>
				<ul className="list-disc pl-6 text-slate-700 space-y-1">
					<li>Your name</li>
					<li>Your email address</li>
					<li>Your phone number (if provided)</li>
					<li>Any information you include in the message field</li>
				</ul>

				<p className="text-slate-700">
					This information is used solely to respond to your inquiry
					and provide requested information about health or Medicare
					coverage options.
				</p>

				<h2 className="text-xl font-semibold text-slate-900">
					How Your Information Is Used
				</h2>
				<p className="text-slate-700">
					We use the information you submit only to:
				</p>
				<ul className="list-disc pl-6 text-slate-700 space-y-1">
					<li>Respond to your inquiry</li>
					<li>Provide information about services you’ve requested</li>
					<li>Schedule a consultation, if requested</li>
				</ul>

				<p className="text-slate-700">
					We do <strong>not</strong> sell, rent, or share your
					information with third parties for marketing purposes.
				</p>

				<h2 className="text-xl font-semibold text-slate-900">
					Not a HIPAA-Covered Submission
				</h2>
				<p className="text-slate-700">
					This website and contact form are not intended for
					transmitting Protected Health Information (PHI). Please do
					not submit medical conditions, diagnoses, prescriptions, or
					other sensitive health information through the contact form.
					If such information is needed, it will be collected securely
					during a private consultation.
				</p>

				<h2 className="text-xl font-semibold text-slate-900">
					Data Security
				</h2>
				<p className="text-slate-700">
					Reasonable technical measures are used to protect your
					information. However, no website or email system can
					guarantee total security. Please do not use this website to
					submit highly sensitive information.
				</p>

				<h2 className="text-xl font-semibold text-slate-900">
					Third-Party Tools
				</h2>
				<p className="text-slate-700">
					This site may use analytics tools to understand how visitors
					use the site. These tools do not collect personal
					information that directly identifies you.
				</p>

				<h2 className="text-xl font-semibold text-slate-900">
					Your Choices
				</h2>
				<p className="text-slate-700">
					You may request deletion of your contact information at any
					time by emailing us directly.
				</p>

				<h2 className="text-xl font-semibold text-slate-900">
					Updates to This Policy
				</h2>
				<p className="text-slate-700">
					This policy may be updated periodically. The latest version
					will always be posted on this page.
				</p>

				<p className="text-sm text-slate-500 mt-6">
					Last updated: {new Date().getFullYear()}
				</p>
			</div>
		</main>
	);
}
