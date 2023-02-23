const caseStudies = [
	{
		name: 'Ampry',
		desc: 'Snippet about the project.',
		craftURL: 'https://www.craft.do/s/e6xmQ19WCOxHR7',
		bgImage:
			'https://images.unsplash.com/photo-1620658839921-293f998260d5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80'
	},
	{
		name: 'Tackle GTM Readiness Review',
		desc: 'Snippet about the project.',
		craftURL: 'https://www.craft.do/s/e6xmQ19WCOxHR7',
		bgImage:
			'https://images.unsplash.com/photo-1660513924321-d9142645a41d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2021&q=80'
	},
	{
		name: 'HustleCoin',
		desc: 'Snippet about the project.',
		craftURL: 'https://www.craft.do/s/e6xmQ19WCOxHR7',
		bgImage:
			'https://images.unsplash.com/photo-1614854262340-ab1ca7d079c7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80'
	},
	{
		name: 'Tackle Web Design System',
		desc: 'Snippet about the project.',
		craftURL: 'https://www.craft.do/s/e6xmQ19WCOxHR7',
		bgImage:
			'https://images.unsplash.com/photo-1528155124528-06c125d81e89?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=989&q=80'
	}
];

export default function CaseStudies() {
	return (
		<section className="py-24">
			<h2 className="text-3xl font-medium mb-6">Featured Projects and Case Studies</h2>
			<ul className="grid gap-4 grid-cols-3">
				{caseStudies.map(
					(caseStudy: { name: string; desc: string; craftURL: string; bgImage: string }) => (
						<li key={caseStudy.name} className="mb-4 z-50">
							<a
								href={caseStudy.craftURL}
								className="transition-all duration-500 p-12 hover:scale-95 text-white rounded-lg shadow-lg h-[500px] flex flex-col justify-between"
								style={{
									backgroundImage: `url("${caseStudy.bgImage}")`,
									backgroundSize: 'cover',
									backgroundPosition: 'center'
								}}
							>
								<h3 className="text-4xl font-medium mb-4">{caseStudy.name}</h3>
								<div>
									<p className="text-lg mb-4">{caseStudy.desc}</p>
								</div>
							</a>
						</li>
					)
				)}
			</ul>
		</section>
	);
}
