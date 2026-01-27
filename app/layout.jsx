// import { Poppins as FontSans } from "next/font/google";
// import "@/app/styles/globals.css";

// const fontSans = FontSans({
//   subsets: ["latin"],
//   weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
//   variable: "--font-sans",
// });

// // If you need metadata in JS, you can just leave it as a plain object
// export const metadata = {
//   title: "Anees | Portfolio",
//   description: "My name is Anees. I am a professional and enthusiastic programmer in my daily life. I am a quick learner with a self-learning attitude. I love to learn and explore new technologies and am passionate about problem-solving. I love almost all the stacks of web application development and love to make the web more open to the world. My core skill is based on JavaScript and I love to do most of the things using JavaScript. I am available for any kind of job opportunity that suits my skills and interests.",
// };

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <body className={fontSans.variable}>{children}</body>
//     </html>
//   );
// }




import { Poppins as FontSans } from "next/font/google";
import "@/app/styles/globals.css";

const fontSans = FontSans({
	subsets: ["latin"],
	weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
	variable: "--font-sans",
	display: "swap",
});

export const metadata = {
	title: "Anees | Portfolio",
	description:
		"My name is Anees. I am a professional and enthusiastic programmer in my daily life. I am a quick learner with a self-learning attitude. I love to learn and explore new technologies and am passionate about problem-solving. I love almost all the stacks of web application development and love to make the web more open to the world. My core skill is based on JavaScript and I love to do most of the things using JavaScript. I am available for any kind of job opportunity that suits my skills and interests.",
	keywords: [
		"Anees",
		"Portfolio",
		"MERN Stack Developer",
		"Full Stack Developer",
		"JavaScript",
		"React",
		"Node.js",
		"Web Developer",
	],
	authors: [{ name: "Anees" }],
	openGraph: {
		title: "Anees | Portfolio",
		description: "Professional MERN Stack Developer Portfolio",
		type: "website",
	},
};

export default function RootLayout({ children }) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body className={fontSans.variable} suppressHydrationWarning>
				{children}
			</body>
		</html>
	);
}