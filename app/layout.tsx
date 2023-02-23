import './globals.css';
import { Manrope } from '@next/font/google';
import MovingBackground from '@/components/MovingBackground';
import Image from 'next/image';
import cap from '@/public/cap.svg';

const manrope = Manrope({ subsets: ['latin'] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en" className="text-slate-900 lg:p-12">
			<head />
			<body className={manrope.className}>
				<MovingBackground />
				<div className="fixed text-4xl h-screen w-screen inset-0 flex flex-col flex-wrap justify-center items-center backdrop-blur-md bg-slate-400 bg-opacity-50 text-focus-out">
					<Image src={cap} className="w-32 mb-12 invert" alt="a keycap with a b on it"></Image>
					<h2 className="font-medium mt-6">Bridger Tower is a Product Designer and Developer</h2>
				</div>
				<div className="max-w-screen-lg m-auto text-focus-in-delayed">{children}</div>
			</body>
		</html>
	);
}
