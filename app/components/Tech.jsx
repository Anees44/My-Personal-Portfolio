// "use client";
// import { technologies } from "@/app/constants";
// import { SectionWrapper } from "./HigherOrderComponents";
// import { BallCanvas } from "./canvas";

// const Tech = () => {
// 	return (
// 		<>
// 			<h2 className="sectionHeadText text-center">Skills</h2>
// 			<br />
// 			<div className="flex flex-row flex-wrap justify-center gap-10">
// 				{technologies.map((technology) => (
// 					<div className="w-28 h-28" key={technology.name}>
// 						<BallCanvas icon={technology.icon} />
// 					</div>
// 				))}
// 			</div>
// 		</>
// 	);
// };

// export default SectionWrapper(Tech, "tech");





"use client";
import { technologies } from "@/app/constants";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "./HigherOrderComponents";
import { BallCanvas } from "./canvas";

const Tech = () => {
	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		// Check if device is mobile
		const mediaQuery = window.matchMedia("(max-width: 768px)");
		setIsMobile(mediaQuery.matches);

		const handleMediaQueryChange = (event) => {
			setIsMobile(event.matches);
		};

		mediaQuery.addEventListener("change", handleMediaQueryChange);

		return () => {
			mediaQuery.removeEventListener("change", handleMediaQueryChange);
		};
	}, []);

	return (
		<>
			<motion.div
				variants={textVariant()}
				initial="hidden"
				whileInView="show"
				viewport={{ once: true }}
			>
				<h2 className="sectionHeadText text-center">Skills</h2>
			</motion.div>
			<br />
			<div className="flex flex-row flex-wrap justify-center gap-6 sm:gap-10">
				{technologies.map((technology, index) => (
					<motion.div
						key={technology.name}
						variants={fadeIn("up", "spring", index * 0.1, 0.75)}
						initial="hidden"
						whileInView="show"
						viewport={{ once: true, amount: 0.25 }}
						className="w-24 h-24 sm:w-28 sm:h-28"
					>
						{isMobile ? (
							// 2D version for mobile
							<div className="w-full h-full flex flex-col items-center justify-center bg-tertiary rounded-2xl p-3 hover:scale-110 transition-transform cursor-pointer">
								<div className="relative w-14 h-14">
									<Image
										src={technology.icon}
										alt={technology.name}
										fill
										className="object-contain"
									/>
								</div>
								<p className="text-white text-[9px] mt-1 text-center font-medium">
									{technology.name}
								</p>
							</div>
						) : (
							// 3D ball for desktop
							<BallCanvas icon={technology.icon} />
						)}
					</motion.div>
				))}
			</div>
		</>
	);
};

export default SectionWrapper(Tech, "tech");