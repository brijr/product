import resume from '@/stores/resume.json';

export default function Experience() {
	return (
		<section className="py-24">
			<div className="grid grid-cols-2 gap-12">
				<ul>
					<h2 className="text-3xl font-medium mb-6">Experience</h2>
					{resume.jobs.map((job) => (
						<li key={job.company} className="mb-12">
							<div className="mb-4">
								<a
									className="text-xl font-medium transition-all duration-500 hover:text-blue-300"
									href={job.href}
								>
									{job.title} at {job.company}
								</a>
								<small className="ml-4">{job.years}</small>
								<p className="italic opacity-50">{job.location}</p>
							</div>
							<p className="border-l-2 border-l-slate-700 pl-4">{job.description}</p>
							<div className="mt-6">
								<p className="text-lg opacity-75 mb-2">Featured Projects</p>
								<ul>
									{job.featuredProjects.map(
										(project: {
											href: string;
											title: string;
											description: string;
											techStack: string;
										}) => (
											<li key={project.title} className="mb-2">
												<a
													href={project.href}
													className="text-md transition-all duration-500 hover:ml-4"
												>
													-{'>'} {project.title}
												</a>
												<small className="ml-4 opacity-50">Built With: {project.techStack}</small>
											</li>
										)
									)}
								</ul>
							</div>
						</li>
					))}
				</ul>
				<div>
					<h2 className="text-3xl font-medium mb-6">Education</h2>
					{/* byu */}
					<h4 className="text-xl mb-4 font-medium">
						Bachelors in Communications: Advertising{'  '}
						<small className="opacity-50 block">Brigham Young University</small>
					</h4>
					<p className="border-l-2 border-l-slate-700 pl-4 mb-12">
						Studied brand strategy, account management, communication design, and growth marketing
						creating an intriguing skill set and thought process. I employ many of the skills I
						developed in the advertising program to understanding the user and creating impactful
						products for them.
					</p>
					{/* Google UX */}
					<h4 className="text-xl my-4 font-medium">
						Google UX Design Certificate{'  '}
						<small className="opacity-50 block">Google</small>
					</h4>
					<p className="border-l-2 border-l-slate-700 pl-4">
						Obtained the Google UX Design Certificate through Coursera. Learning the foundations of
						UX design, including empathizing with users, building wireframes and prototypes, and
						conducting research to test your designs.
					</p>
				</div>
			</div>
		</section>
	);
}
