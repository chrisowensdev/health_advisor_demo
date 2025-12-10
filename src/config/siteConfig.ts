// src/config/siteConfig.ts

export type AdvisorSiteConfig = {
	siteUrl: string;
	brandName: string;
	brandShortName?: string;
	tagline: string;

	advisorName: string;
	credentials?: string;
	phone: string;
	email: string;

	address?: {
		line1: string;
		line2?: string;
		city: string;
		state: string;
		zip: string;
	};

	serviceAreas: string[]; // e.g. ["Virginia", "North Carolina", "Maryland"]

	officeHours?: string;

	// Used for CTAs and microcopy
	contactCopy: {
		primaryCtaLabel: string;
		secondaryCtaLabel: string;
		responseTime?: string;
	};

	social?: {
		facebook?: string;
		linkedin?: string;
		x?: string;
		youtube?: string;
	};

	legal: {
		disclaimerUrl: string;
		privacyUrl: string;
		termsUrl?: string;
		notGovernmentAffiliationText: string;
		requiredMedicareDisclaimer: string;
	};

	builtBy: {
		label: string;
		url: string;
	};
};

export const advisorSiteConfig: AdvisorSiteConfig = {
	siteUrl: "https://clearpathhealthadvisors.com", // 🔁 update if different
	brandName: "ClearPath Health Advisors",
	brandShortName: "ClearPath Health",
	tagline: "Plain-language guidance for Medicare & health coverage.",

	advisorName: "Jane Smith",
	credentials: "Licensed Health & Medicare Advisor",
	phone: "555-123-4567",
	email: "hello@clearpathhealthadvisors.com",

	address: {
		line1: "123 Main Street",
		city: "Richmond",
		state: "VA",
		zip: "23220",
	},

	serviceAreas: ["Virginia", "North Carolina", "Maryland"],

	officeHours: "Monday–Friday, 9:00 AM – 5:00 PM",

	contactCopy: {
		primaryCtaLabel: "Book Your Free Coverage Review",
		secondaryCtaLabel: "Ask a Question",
		responseTime: "Typically responds within one business day.",
	},

	social: {
		// Fill in if/when you have them
		// facebook: "https://facebook.com/yourpage",
		// linkedin: "https://linkedin.com/in/yourprofile",
	},

	legal: {
		disclaimerUrl: "/legal/disclaimer",
		privacyUrl: "/legal/privacy",
		// termsUrl: "/legal/terms", // add later if you ever create one
		notGovernmentAffiliationText:
			"Not connected with or endorsed by the U.S. Government or the federal Medicare program.",
		requiredMedicareDisclaimer:
			"We do not offer every plan available in your area. Any information we provide is limited to those plans we do offer. Please contact Medicare.gov, 1-800-MEDICARE, or your local State Health Insurance Program (SHIP) to get information on all of your options.",
	},

	builtBy: {
		label: "Site design & development by Elevate DevWorks",
		url: "https://elevatedevworks.com",
	},
};
