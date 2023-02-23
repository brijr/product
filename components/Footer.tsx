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

export default function Footer() {
	return (
		<footer className="flex justify-between pt-24">
			<div>
				<p className="text-xl mb-4">Thank you for visiting.</p>
				<a href="https://btower.dev">Check out btower.dev for more.</a>
			</div>
			<ul>
				{links.map((link: { name: string; href: string }) => (
					<li key={link.name}>
						<a
							className="flex p-0 items-end text-xl transition-[500ms]"
							target="_blank"
							rel="noreferrer"
							href={link.href}
						>
							<p className="m-0 p-0 pr-1 text-left">
								{link.name} -{`>`}
							</p>
						</a>
					</li>
				))}
			</ul>
		</footer>
	);
}
