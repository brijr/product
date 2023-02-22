import resume from '@/stores/resume.json';

export default function Experience() {
	return (
		<section className="py-24">
			<h2 className="text-3xl font-medium mb-6">Experience and Education</h2>
			<ul>
				{resume.jobs.map((job) => (
					<li key={job.company} className="mb-12">
						<div className="mb-4">
							<a
								className="text-xl transition-all duration-500 hover:text-blue-300"
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
											{/* <p className='ml-4'>{project.description}</p> */}
											<small className="ml-4 opacity-50">Built With: {project.techStack}</small>
										</li>
									)
								)}
							</ul>
						</div>
					</li>
				))}
			</ul>
		</section>
	);
}
