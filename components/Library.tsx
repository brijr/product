const books = [
	{
		name: 'The Design of Everyday Things',
		author: 'Don Norman',
		link: 'https://amzn.to/3YWRmEE',
		coverImage: 'https://m.media-amazon.com/images/I/416Hql52NCL._SY346_.jpg'
	},
	{
		name: "Don't Make Me Think",
		author: 'Steve Krug',
		link: 'https://amzn.to/41lvAfn',
		coverImage: 'https://m.media-amazon.com/images/I/51WS36aA2BL.jpg'
	},
	{
		name: 'The Laws of UX',
		author: 'Jon Yablonski',
		link: 'https://amzn.to/3INauiK',
		coverImage: 'https://m.media-amazon.com/images/I/61OELobx9LL.jpg'
	},
	{
		name: 'Hooked: How to Build Habit-Forming Products',
		author: 'Eyal Nir',
		link: 'https://amzn.to/3lQRkzw',
		coverImage: 'https://m.media-amazon.com/images/I/51DlnjccG-L._SX322_BO1,204,203,200_.jpg'
	}
];

export default function Library() {
	return (
		<section className="py-24">
			<h2 className="text-3xl font-medium mb-6">From the Library</h2>
			<p className="mb-6">The books and ideas that shape my design philosophy.</p>
			<ul className="grid grid-cols-4 gap-4">
				{books.map((book) => (
					<li
						key={book.name}
						className="p-6 rounded-lg bg-slate-100 hover:bg-slate-300 transition-all  duration-500 shadow-lg"
					>
						<a
							href={book.link}
							target="_blank"
							rel="noreferrer"
							className="w-auto flex flex-col h-full justify-between"
						>
							<p className="text-xl mb-6">{book.name}</p>
							<div>
								<img className="h-48" src={book.coverImage} alt="Book Cover" />
							</div>
						</a>
					</li>
				))}
			</ul>
		</section>
	);
}
