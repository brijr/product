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
				<h3 className="text-3xl mb-6">Recent Design Work</h3>
				<div className="flex items-center justify-center">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth={1.5}
						stroke="currentColor"
						className="w-6 h-6"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
						/>
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
