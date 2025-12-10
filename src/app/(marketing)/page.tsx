// app/page.tsx (or components/HomeHero.tsx)

import FAQPreview from "./page/_components/FAQPreview";
import FinalCTA from "./page/_components/FinalCTA";
import HeroSection from "./page/_components/HeroSection";
import HowItWorks from "./page/_components/HowItWorks";
import PlansOverview from "./page/_components/PlansOverview";
import TestimonialsSection from "./page/_components/TestimonialsSection";
import WhoIHelp from "./page/_components/WhoIHelp";
import WhyClientsChooseMe from "./page/_components/WhyClientsChooseMe";

export default function HomePage() {
	return (
		<main className="min-h-screen bg-slate-50">
			<HeroSection />
			<WhoIHelp />
			<PlansOverview />
			<HowItWorks />
			<WhyClientsChooseMe />
			<TestimonialsSection />
			<FAQPreview />
			<FinalCTA />
		</main>
	);
}
