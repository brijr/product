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
		<section className="grid grid-cols-2 gap-4 py-24 text-white">
			{/* card one */}
			<div
				className="h-[540px] p-16 rounded-xl shadow-lg flex flex-col justify-between"
				style={{
					backgroundImage: `url(${bgLeft.src})`,
					backgroundSize: 'cover',
					backgroundPosition: 'center'
				}}
			>
				<div>
					<h4 className="text-5xl font-semibold mb-6">Bridger Tower</h4>
					<h5 className="text-4xl">Product Designer</h5>
				</div>
				<p className="text-2xl">
					I am a product designer located in Salt Lake City, Utah. I am passionate about the balance
					of aesthetics and usability in software and websites.
				</p>
			</div>
			{/* card two */}
			<div
				className="h-[540px] p-16 rounded-xl shadow-lg flex flex-col justify-end items-end"
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
