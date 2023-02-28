export default function Intro() {
	return (
		<section className="py-24">
			<h2 className="text-3xl font-medium mb-6 text-focus-in">
				Marketing Designer with passion for Code and Development.
			</h2>
			<p className="lg:w-3/4 text-lg text-focus-in">
				As an experienced developer and designer, I have a deep understanding of how technology
				works and how to create products that meet user needs. I am able to work with
				cross-functional teams to design and develop products and systems that are both functional
				and user-friendly.
			</p>
			<div className="flex gap-6">
				<div className="flex my-6">
					<a className="flex justify-center gap-2" href="https://btower.dev">
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
							Read my Resume
						</p>
					</a>
				</div>
				<div className="flex my-6">
					<a className="flex justify-center gap-2" href="https://read.cv/btower">
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
								d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
							/>
						</svg>

						<p className="transition-[500ms] text-focus-in hover:border-b-2 hover:border-b-slate-800">
							See my Dev Portfolio
						</p>
					</a>
				</div>
			</div>
		</section>
	);
}
