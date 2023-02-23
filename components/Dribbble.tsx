'use client';

import React, { useState, useEffect } from 'react';

const accessToken = '33f6b249840bf29923d747505622fb27fefa014de97c331c2633ae85c2770b36';

async function getDribbbleShots() {
	const res = await fetch(`https://api.dribbble.com/v2/user/shots?access_token=${accessToken}`);
	const data = await res.json();
	return data;
}

function Design() {
	const [loading, setLoading] = useState(true);
	const [shots, setShots] = useState([]);

	useEffect(() => {
		async function fetchData() {
			const data = await getDribbbleShots();
			setShots(data);
			setLoading(false);
		}

		fetchData();
	}, []);

	if (loading) {
		return (
			<section id="dribbble" className="my-24">
				<div className="flex items-center justify-center">
					<svg className="animate-spin h-8 w-8 text-gray-500" viewBox="0 0 24 24">
						<circle
							className="opacity-25"
							cx="12"
							cy="12"
							r="10"
							stroke="currentColor"
							strokeWidth="4"
						></circle>
						<path
							className="opacity-75"
							fill="currentColor"
							d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647zM12 20a8 8 0 01-8-8H0c0 6.627 5.373 12 12 12v-4zm5-5.291A7.962 7.962 0 0120 12h-4c0 3.042-1.135 5.824-3 7.938l3-2.647z"
						></path>
					</svg>
				</div>
			</section>
		);
	}

	return (
		<section id="dribbble" className="my-24">
			<h3 className="text-3xl mb-6">Recent Design Work</h3>
			<ul className="grid grid-cols-2 md:grid-cols-3 gap-2">
				{shots.map(
					(shot: {
						id: number;
						html_url: string;
						images: {
							normal: string;
						};
					}) => (
						<li key={shot.id}>
							<a href={shot.html_url} rel="noreferrer" target="_blank">
								<img
									className="hover:scale-95 rounded-lg shadow-md transition-all"
									src={shot.images.normal}
									alt="Dribbble Shot"
								/>
							</a>
						</li>
					)
				)}
			</ul>
		</section>
	);
}

export default Design;
