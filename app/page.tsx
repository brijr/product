import CaseStudies from '@/components/CaseStudies';
import Intro from '@/components/Intro';
import HeroCards from '@/components/HeroCards';
import Experience from '@/components/Experience';
import Footer from '@/components/Footer';
import Library from '@/components/Library';

export default function Home() {
	return (
		<main>
			<HeroCards />
			<Intro />
			<CaseStudies />
			<Experience />
			<Library />
			<Footer />
		</main>
	);
}
