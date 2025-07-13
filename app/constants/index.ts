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
		company_name: "Eveloper Software House",
		icon: "/company/avm.webp",
		iconBg: "#383E56",
		date: "July 2024 – August 2024",
		points: [
			"Contributed to real client projects as a frontend developer using Next.js, React.js and Tailwind CSS"
		],
	},
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
		title: "ORDER TAKER & IPOS OPERATOR",
		company_name: "GrillOut Restaurant",
		icon: "/company/wtw.jpg",
		iconBg: "#E6DEDD",
		date: "January 2024 – Present",
		points: [
			"Effectively managed customer food orders using the IPOS system, ensuring speed and accuracy. Demonstrated strong communication and coordination with staff, maintained order records, and quickly adapted to digital tools in a fast-paced environment.",
		],
	},
];

const projects :{
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
		source_code_link: "/",
		platform: "Vercel",
		deploy_link: "/",
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
		source_code_link: "https://github.com/omunite215/hoobank",
		platform: "Vercel",
		deploy_link: "https://hoobankbyom.netlify.app/",
	},
	{
		name: "TextUtils Website",
		description:
			"TextUtils Website is a simple and user-friendly React-based tool for quick text editing tasks. It lets users convert text to uppercase or lowercase, remove extra spaces, copy content, and switch between dark and light modes. Perfect for anyone needing fast and efficient text formatting.",
		tags: [
			{
				name: "react",
				color: "blue-text-gradient",
			},
			{
				name: "materialui",
				color: "orange-text-gradient",
			},
			{
				name: "MongoDB",
				color: "green-text-gradient",
			},
			{
				name: "Express",
				color: "pink-text-gradient",
			},
		],
		image: "/projectimg/Textutils.png",
		source_code_link: "https://github.com/Anees44/TextUtils-Website",
		platform: "Vercel",
		deploy_link: "https://text-utils-website-wmav.vercel.app/",
	},
	{
		name: "Coming Soon Project",
		description:
			"Stay tuned for an exciting project that blends creativity, innovation, and cutting-edge tech. Something big is on its way to redefine the digital experience.",
		tags: [
			{
				name: "react",
				color: "blue-text-gradient",
			},
			{
				name: "tailwind",
				color: "green-text-gradient",
			},
			{
				name: "framer-motion",
				color: "orange-text-gradient",
			},
		],
		image: "/projectimg/comingsoonimg.png",
		source_code_link: "/",
		platform: "Vercel",
		deploy_link: "/",
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
