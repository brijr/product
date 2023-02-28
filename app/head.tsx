import Script from 'next/script';

export default function Head() {
	return (
		<>
			<title>Bridger Tower is a Marketing Designer.</title>
			<meta content="width=device-width, initial-scale=1" name="viewport" />
			<meta
				name="description"
				content="Marketing Designer | Creator of Products, Experiences, and Interactions"
			/>
			<link rel="icon" href="/favicon.ico" />
			{/* Google Analytics */}
			<Script
				strategy="afterInteractive"
				src="https://www.googletagmanager.com/gtag/js?id=G-TP91W6EG66"
			/>
			<Script
				id="google-analytics"
				strategy="afterInteractive"
				dangerouslySetInnerHTML={{
					__html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', 'G-TP91W6EG66', {
                  page_path: window.location.pathname,
                  });
                  `
				}}
			/>
		</>
	);
}
