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
		<footer className="flex flex-col-reverse lg:flex-row justify-between pt-24">
			<div>
				<p className="text-xl mb-4">thank you for visiting ♥</p>
				<a className="mb-4 block hover:text-slate-500" href="https://btower.dev">
					[check out btower.dev for more on my coding exp.]
				</a>

				<a className="mb-4 block hover:text-slate-500" href="https://github.com/brijr/product">
					[see the GitHub repo for this site]
				</a>
				<a
					className="mb-4 block hover:text-slate-500"
					href="https://open.spotify.com/playlist/3G5aNIKlM1UiUjVV146Toy?si=a589fe79468546e9"
				>
					[my fave Spotify playlist]
				</a>
				<p className="mb-4">© bridger tower | 2023 | bridgertower@gmail.com</p>
			</div>
			<ul className="flex flex-col lg:items-end gap-2 mb-16 lg:mb-0">
				{links.map((link: { name: string; href: string }) => (
					<li key={link.name}>
						<a
							className="flex p-0 hover:text-slate-500 items-end text-left hover:pl-2 text-xl transition-[500ms]"
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
