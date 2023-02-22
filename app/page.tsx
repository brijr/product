import CaseStudies from '@/components/CaseStudies';
import Intro from '@/components/Intro';
import HeroCards from '@/components/HeroCards';
import Experience from '@/components/Experience';

export default function Home() {
	return (
		<main>
			<HeroCards />
			<Intro />
			<CaseStudies />
			<Experience />
		</main>
	);
}
