import CaseStudies from '@/components/CaseStudies';
import Intro from '@/components/Intro';
import HeroCards from '@/components/HeroCards';
import Experience from '@/components/Experience';
import Footer from '@/components/Footer';
import Library from '@/components/Library';
import Dribbble from '@/components/Dribbble';
import Testimonials from '@/components/Testimonials';

export default function Home() {
	return (
		<main className="p-6 lg:p-0">
			<HeroCards />
			<Intro />
			<CaseStudies />
			<Experience />
			<Dribbble />
			<Library />
			<Testimonials />
			<Footer />
		</main>
	);
}
