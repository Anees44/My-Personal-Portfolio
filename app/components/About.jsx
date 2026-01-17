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
						Hi, I’m Anees, a Software Engineering graduate and currently working as a Full Stack Developer Intern. I enjoy building clean, responsive web interfaces and have hands-on experience with HTML, CSS, JavaScript, React.js, and Next.js.

						I’m a fast learner with a strong interest in Artificial Intelligence, and I have foundational experience in Python and AI concepts through academic and training-based projects. I enjoy exploring new technologies, solving problems, and continuously improving my skills by working on real-world projects.

						I’m always open to opportunities where I can learn, grow, and contribute to meaningful software solutions.
					</motion.p>
				</div>

				<motion.div
					variants={fadeIn("right", "spring", 0.3, 1)}
					className="flex-1 max-w-xs bg-tertiary rounded-[20px] p-4 shadow-lg"
				>
					<div className="relative w-full h-72 rounded-[20px] overflow-hidden">
						<Image
							src="/my Profile pic.jpg"
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
