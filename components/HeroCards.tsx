import bgLeft from '@/public/bg_left.jpg';
import bgRight from '@/public/bg_right.jpg';

const links = [
	{
		name: 'Resume',
		href: 'https://read.cv/btower'
	},

	{
		name: 'Medium',
		href: 'https://brijr.medium.com/'
	},
	{
		name: 'LinkedIn',
		href: 'https://linkedin.com/in/brdgr'
	},
	{
		name: 'GitHub',
		href: 'https://github.com/brijr'
	},
	{
		name: 'Dribbble',
		href: 'https://dribbble.com/brijr'
	},
	{
		name: 'Pinterest',
		href: 'https://www.pinterest.com/bt0wer/'
	}
];

export default function HeroCards() {
	return (
		<section className="grid lg:grid-cols-2 gap-4 pb-24 pt-12 lg:py-24 text-white">
			{/* card one */}
			<div
				className="lg:h-[540px] float z-50 text-focus-in p-6 lg:p-16 rounded-xl shadow-lg flex flex-col justify-between"
				style={{
					backgroundImage: `url(${bgLeft.src})`,
					backgroundSize: 'cover',
					backgroundPosition: 'center'
				}}
			>
				<div>
					<h4 className="text-5xl font-semibold lg:mb-4 lg:mt-0 mt-4 mb-8">Bridger Tower</h4>
					<h5 className="text-3xl pb-24 lg:pb-0">
						Designer of Products, Experiences, and Interactions
					</h5>
				</div>
				<p className="text-xl lg:text-2xl">
					I am a marketing designer located in Salt Lake City, Utah. I am passionate about the
					balance of aesthetics and usability in software and websites.
				</p>
			</div>
			{/* card two */}
			<div
				className="hidden lg:flex h-[540px] float-delay z-50 text-focus-in p-16 rounded-xl shadow-lg flex-col justify-end items-end"
				style={{
					backgroundImage: `url(${bgRight.src})`,
					backgroundSize: 'cover',
					backgroundPosition: 'center'
				}}
			>
				<ul>
					{links.map((link: { name: string; href: string }) => (
						<li key={link.name} className="flex justify-end">
							<a
								className="flex p-0 items-end text-xl hover:pr-2 transition-[500ms]"
								target="_blank"
								rel="noreferrer"
								href={link.href}
							>
								<p className="m-0 p-0 pr-1">
									{link.name} -{`>`}
								</p>
							</a>
						</li>
					))}
				</ul>
			</div>
		</section>
	);
}
