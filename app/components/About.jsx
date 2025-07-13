"use client";

import { SectionWrapper } from "./HigherOrderComponents";
import { motion } from "framer-motion";
import Image from "next/image";
import { Tilt } from "react-tilt";
import { services } from "../constants";
import { fadeIn, textVariant } from "@/app/utils/motion";

// Your ServiceCard stays unchanged
const ServiceCard = ({ index, title, icon }) => {
	return (
		<Tilt
			options={{ max: 45, scale: 1, speed: 450 }}
			className="xs:w-[250px] w-full"
		>
			<motion.div
				variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
				className="w-full green-pink-gradient p-px rounded-[20px] shadow-card"
			>
				<div className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
					<Image
						src={icon}
						width={64}
						height={64}
						alt={title}
						className="w-16 h-16 object-contain"
					/>
					<h3 className="text-white text-[20px] font-bold text-center">
						{title}
					</h3>
				</div>
			</motion.div>
		</Tilt>
	);
};

const About = () => {
	return (
		<>
			<motion.div variants={textVariant()} className="flex flex-col md:flex-row md:items-center md:justify-between gap-10">
				{/* Left side: Introduction text */}
				<div className="flex-1">
					<p className="sectionSubText">Introduction</p>
					<h2 className="styles.sectionHeadText">Overview.</h2>

					<motion.p
						variants={fadeIn("", "", 0.1, 1)}
						className="mt-4 text-secondary text-[17px] max-w-[3xl] leading-[30px]"
					>
						My name is Anees. I am a professional and enthusiastic programmer in my daily life. I am a quick learner with a self-learning attitude. I love to learn and explore new technologies and am passionate about problem-solving. I love almost all the stacks of web application development and love to make the web more open to the world. My core skill is based on JavaScript and I love to do most of the things using JavaScript. I am available for any kind of job opportunity that suits my skills and interests.
					</motion.p>
				</div>

				<motion.div
					variants={fadeIn("right", "spring", 0.3, 1)}
					className="flex-1 max-w-xs bg-tertiary rounded-[20px] p-4 shadow-lg"
				>
					<div className="relative w-full h-72 rounded-[20px] overflow-hidden">
						<Image
							src="/profile.png"
							alt="Anees Profile Picture"
							fill
							className="object-cover rounded-[20px]"
							priority={true}
						/>
					</div>
				</motion.div>


			</motion.div>

			<div className="mt-20 flex flex-wrap gap-10">
				{services.map((service, index) => (
					<ServiceCard key={service.title} index={index} {...service} />
				))}
			</div>
		</>
	);
};

export default SectionWrapper(About, "about");
