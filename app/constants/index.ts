export const navLinks = [
	{
		id: "about",
		title: "About",
	},
	{
		id: "work",
		title: "Work",
	},
	{
		id: "tech",
		title: "Skills",
	},
	{
		id: "Works",
		title: "Projects",
	},
	{
		id: "contact",
		title: "Contact",
	},
];

const services = [
	{
		title: "Frontend Developer",
		icon: "/backend.webp",
	},
	{
		title: "Responsive Web Designer",
		icon: "/web.webp",
	},
	{
		title: "React/Next.js Specialist",
		icon: "/mobile.webp",
	},
	{
		title: "AI-Integrated Web Solutions",
		icon: "/creator.webp",
	},
];

const technologies = [
	{
		name: "HTML 5",
		icon: "/tech/html.webp",
	},
	{
		name: "CSS 3",
		icon: "/tech/css.webp",
	},
	{
		name: "JavaScript",
		icon: "/tech/javascript.webp",
	},
	{
		name: "TypeScript",
		icon: "/tech/typescript.webp",
	},
	{
		name: "React JS",
		icon: "/tech/reactjs.webp",
	},
	{
		name: "Next.JS",
		icon: "/tech/nextjs.svg",
	},
	{
		name: "Tailwind CSS",
		icon: "/tech/tailwind.webp",
	},
	{
		name: "git",
		icon: "/tech/git.webp",
	},
	{
		name: "figma",
		icon: "/tech/figma.webp",
	},
	{
		name: "bootstrap",
		icon: "/tech/bootstrap.webp",
	},
	{
		name: "MongoDB",
		icon: "/tech/mongodb.webp",
	},
];

const experiences = [
	{
		title: "FrontEnd Developer Intern",
		company_name: "Innova Corex (Remote)",
		icon: "/company/sparkbright.webp",
		iconBg: "#E6DEDD",
		date: "March 2025 – April 2025",
		points: [
			"Completed a remote one-month internship focused on real-world frontend tasks using NEXT.js, React.js and Tailwind CSS. Delivered quality work on time, built responsive UI components, and communicated effectively in a team-oriented virtual environment."
		],
	},
	{
		title: "Full Stack Developer Intern",
		company_name: "Giga Developers",
		icon: "/company/wtw.jpg",
		iconBg: "#E6DEDD",
		date: "Octuber 2025 – Present",
		points: [
			"Working as a MERN Stack Intern, focusing mainly on frontend development with React.js and Next.js, while learning and assisting with basic backend tasks using Node.js and MongoDB. ",
		],
	},
];

const projects: {
	name: string;
	description: string;
	tags: {
		name: string;
		color: string;
	}[];
	image: string;
	source_code_link?: string;
	deploy_link: string;
	platform: "Netlify" | "Vercel" | "Figma" | "Wordpress" | "Web"
}[] = [
		{
			name: "OfficeSphere - Office Management System",
			description:
				"Stay tuned for an exciting project that blends creativity, innovation, and cutting-edge tech. Something big is on its way to redefine the digital experience.",
			tags: [
				{
					name: "react",
					color: "blue-text-gradient",
				},
				{
					name: "CSS",
					color: "green-text-gradient",
				},
				{
					name: "JavaScript",
					color: "orange-text-gradient",
				},
				{
					name: "MongoDB",
					color: "green-text-gradient",
				},
			],
			image: "/projectimg/comingsoonimg.png",
			source_code_link: "/",
			platform: "Vercel",
			deploy_link: "/",
		},
		{
			name: "Grillout Restaurant Website",
			description:
				"GrillOut is a modern restaurant website showcasing a diverse menu of burgers, steaks, wraps, and more. Designed with a sleek interface, it offers smooth navigation, optimized images, and an intuitive ordering experience to attract and engage food lovers.",
			tags: [
				{
					name: "Next.js",
					color: "red-text-gradient",
				},
				{
					name: "tailwind",
					color: "blue-text-gradient",
				},
			],
			image: "/projectimg/grilloutresturantimage.png",
			source_code_link: "https://github.com/Anees44/Grillout-Resturant-Website",
			platform: "Vercel",
			deploy_link: "https://grillout-resturant-website-t71v.vercel.app/",
		},
		{
			name: "Scrapify – AI-Powered Web Scraper ",
			description:
				"Developed a smart web scraping tool that extracts data from dynamic websites, leveraging AI for content summarization and filtering.The tool offers a responsive UI with a dashboard for easy management of scraping tasks. (Under Construction)",
			tags: [
				{
					name: "Next.js",
					color: "blue-text-gradient",
				},
				{
					name: "tailwind",
					color: "green-text-gradient",
				},
				{
					name: "MongoDB",
					color: "green-text-gradient",
				},
			],
			image: "/projectimg/scrapifyimage.png",
			source_code_link: "https://github.com/Anees44/My-Personal-Portfolio.git",
			platform: "Vercel",
			deploy_link: "https://scrapify-rho.vercel.app/",
		},
		{
			name: "Personal Portfolio Website",
			description:
				"A responsive Bank HomePage showcasing different features such as various payment gateways integration, easy money transfer, advanced security, etc. It has a beautiful interface made using Tailwind CSS and React",
			tags: [
				{
					name: "Next.js",
					color: "green-text-gradient",
				},
				{
					name: "tailwind",
					color: "blue-text-gradient",
				},
			],
			image: "/projectimg/portfolioimage.png",
			source_code_link: "https://github.com/Anees44/My-Personal-Portfolio",
			platform: "Vercel",
			deploy_link: "https://my-personal-portfolio-tan-three.vercel.app/",
		},
		{
			name: "TextUtils Website",
			description:
				"TextUtils Website is a simple and user-friendly React-based tool for quick text editing tasks. It lets users convert text to uppercase or lowercase, remove extra spaces, copy content, and switch between dark and light modes. Perfect for anyone needing fast and efficient text formatting.",
			tags: [
				{
					name: "Next.js",
					color: "blue-text-gradient",
				},
				{
					name: "tailwind",
					color: "orange-text-gradient",
				},


			],
			image: "/projectimg/Textutils.png",
			source_code_link: "https://github.com/Anees44/TextUtils-Website",
			platform: "Vercel",
			deploy_link: "https://text-utils-website-wmav.vercel.app/",
		},
		{
			name: "Todo-List Website",
			description:
				"A simple and interactive Todo List Application built using HTML, CSS, and JavaScript. This website helps users manage daily tasks by adding, completing, and deleting todos in an easy and user-friendly interface.",
			tags: [
				{
					name: "HTML",
					color: "blue-text-gradient",
				},
				{
					name: "CSS",
					color: "green-text-gradient",
				},
				{
					name: "JavaScript",
					color: "orange-text-gradient",
				},
			],
			image: "/projectimg/toto-list-app.PNG",
			source_code_link: "https://github.com/Anees44/Todo-List-app.git",
			platform: "Vercel",
			deploy_link: "https://todo-list-app-silk-sigma.vercel.app/",
		},
		{
			name: "Faith Bond Website",
			description:
				"A modern Muslim matrimonial web application built with React.js, React Router, and Tailwind CSS. The platform includes multiple pages such as Home, Login, Register, Testimonials, Contact, and Dashboard. It features a responsive design",
			tags: [
				{
					name: "React.js",
					color: "blue-text-gradient",
				},
				{
					name: "tailwind",
					color: "green-text-gradient",
				},
				{
					name: "shadCN",
					color: "orange-text-gradient",
				},
				{
					name: "mongodb",
					color: "green-text-gradient",
				},
			],
			image: "/projectimg/marriageImg.PNG",
			source_code_link: "/",
			platform: "Vercel",
			deploy_link: "https://trae-dating-project.vercel.app/",
		},
		{
			name: "Live Weather Check",
			description:
				"A simple and responsive Weather Application built using HTML, CSS, and JavaScript. This website allows users to search for any city and get real-time weather information such as temperature, weather conditions, humidity, and wind speed.",
			tags: [
				{
					name: "HTML",
					color: "blue-text-gradient",
				},
				{
					name: "CSS",
					color: "green-text-gradient",
				},
				{
					name: "JavaScript",
					color: "orange-text-gradient",
				},
			],
			image: "/projectimg/weather-app.PNG",
			source_code_link: "https://github.com/Anees44/Weather-App-Website.git",
			platform: "Vercel",
			deploy_link: "https://weather-app-website-beta.vercel.app/",
		},
		{
			name: "Coming Soon Project",
			description:
				"Stay tuned for an exciting project that blends creativity, innovation, and cutting-edge tech. Something big is on its way to redefine the digital experience.",
			tags: [
				{
					name: "next",
					color: "blue-text-gradient",
				},
				{
					name: "tailwind",
					color: "green-text-gradient",
				},
				{
					name: "shadCN",
					color: "orange-text-gradient",
				},
				{
					name: "mySQL",
					color: "green-text-gradient",
				},
			],
			image: "/projectimg/comingsoonimg.png",
			source_code_link: "/",
			platform: "Vercel",
			deploy_link: "/",
		},
	];

export { services, technologies, experiences, projects };
