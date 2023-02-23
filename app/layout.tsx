import './globals.css';
import { Manrope } from '@next/font/google';
import bg from '@/public/bg.svg';

const manrope = Manrope({ subsets: ['latin'] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html
			lang="en"
			style={{
				backgroundImage: `url(${bg.src})`
			}}
			className="text-slate-900 bg-slate-200 bg-gradient-to-br from-slate-300 to-slate-200 lg:p-12"
		>
			<head />
			<body className={manrope.className}>
				<div className="max-w-screen-lg m-auto">{children}</div>
			</body>
		</html>
	);
}
