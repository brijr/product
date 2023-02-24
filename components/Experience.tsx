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
					<a className="flex justify-start gap-2" href="https://read.cv/btower">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth={1.5}
							stroke="currentColor"
							className="w-6 h-6 text-focus-in"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M18.375 12.739l-7.693 7.693a4.5 4.5 0 01-6.364-6.364l10.94-10.94A3 3 0 1119.5 7.372L8.552 18.32m.009-.01l-.01.01m5.699-9.941l-7.81 7.81a1.5 1.5 0 002.112 2.13"
							/>
						</svg>
						<p className="transition-[500ms] text-focus-in hover:border-b-2 hover:border-b-slate-800">
							View the rest of my Resume
						</p>
					</a>
				</ul>
				<div>
					<h2 className="text-3xl font-medium mb-6">Education</h2>
					{/* byu */}
					<h4 className="text-xl font-medium my-4">
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
					<p className="border-l-2 border-l-slate-700 pl-4 mb-12">
						Obtained the Google UX Design Certificate through Coursera. Learning the foundations of
						UX design, including empathizing with users, building wireframes and prototypes, and
						conducting research to test your designs.
					</p>
					{/* Design tools */}
					<h4 className="text-xl font-medium my-4">
						8+ Years of Design Tool Experience{'  '}
						<small className="opacity-50 block">Figma, Adobe, and more!</small>
					</h4>
					<p className="border-l-2 border-l-slate-700 pl-4 mb-12">
						I am passionate about constantly improving and learning. I have worked heavily with
						Figma, Sketch, and Adobe XD. I have also worked with Adobe Photoshop, Illustrator, and
						InDesign professionally. These tools equip me to demonstrate and present design
						solutions to clients and stakeholders.
					</p>
				</div>
			</div>
		</section>
	);
}
