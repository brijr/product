import ampry from '@/public/outerspace.webp';
import ReadinessReview from '@/public/readiness_review.jpg';

const caseStudies = [
	{
		name: 'Ampry',
		desc: 'Snippet about the project.',
		notionId: 'Ampry-26b5174e995248c1919436eb44938f5a',
		bgImage:
			'https://images.unsplash.com/photo-1620658839921-293f998260d5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80'
	},
	{
		name: 'Tackle GTM Readiness Review',
		desc: 'Snippet about the project.',
		notionId: 'Tackle-GTM-Readiness-Review-cbc17b82b96f46e9a99940e7ce89da92',
		bgImage:
			'https://images.unsplash.com/photo-1660513924321-d9142645a41d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2021&q=80'
	},
	{
		name: 'HustleCoin',
		desc: 'Snippet about the project.',
		notionId: 'HustleCoin-acb7bf3adb7749a983c24359b150e6e5',
		bgImage:
			'https://images.unsplash.com/photo-1614854262340-ab1ca7d079c7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80'
	},
	{
		name: 'Tackle Web Design System',
		desc: 'Snippet about the project.',
		notionId: 'Tackle-Brand-Design-System-5dc467a2d5d5497f95a53daffeaecf7b',
		bgImage:
			'https://images.unsplash.com/photo-1528155124528-06c125d81e89?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=989&q=80'
	}
];

export default function CaseStudies() {
	return (
		<section className="py-24">
			<h2 className="text-3xl font-medium mb-6">Featured Projects and Case Studies</h2>
			<ul className="flex gap-4 overflow-x-auto flex-nowrap overflow-y-visible">
				{caseStudies.map((caseStudy) => (
					<li key={caseStudy.name} className="mb-4 z-50">
						<a
							href={`https://btower.notion.site/${caseStudy.notionId}`}
							className="transition-all duration-500 p-12 hover:scale-95 text-white rounded-lg shadow-lg w-[350px] h-[500px] flex flex-col justify-between"
							style={{
								backgroundImage: `url("${caseStudy.bgImage}")`,
								backgroundSize: 'cover',
								backgroundPosition: 'center'
							}}
						>
							<h3 className="text-4xl font-medium mb-4">{caseStudy.name}</h3>
              <div>
                <p className="text-xl mb-2">{caseStudy.desc}</p>
                <p>Read More -{'>'}</p>
              </div>
						</a>
					</li>
				))}
			</ul>
			<p className='flex justify-end w-full animate-pulse'>Scroll -{'>'}</p>
		</section>
	);
}
