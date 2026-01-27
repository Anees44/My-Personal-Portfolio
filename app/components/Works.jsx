// "use client";

// import { motion } from "framer-motion";
// import Image from "next/image";
// import Link from "next/link";
// import React from "react";
// import { Tilt } from "react-tilt";
// import { projects } from "../constants";
// import { fadeIn, textVariant } from "../utils/motion";
// import { SectionWrapper } from "./HigherOrderComponents";

// const ProjectCard = ({
//   index,
//   name,
//   description,
//   tags,
//   image,
//   source_code_link,
//   deploy_link,
//   platform,
// }) => {
//   return (
//     <motion.div
//       variants={fadeIn("up", "spring", index * 0.5, 0.75)}
//       className="w-full sm:w-[360px]"
//     >
//       <Tilt
//         options={{
//           max: 45,
//           scale: 1,
//           speed: 450,
//         }}
//         className="bg-tertiary p-5 rounded-2xl w-full h-full"
//       >
//         <div className="relative w-full h-[200px] sm:h-[230px] rounded-2xl overflow-hidden">
//           <Image
//             src={image}
//             alt="project_image"
//             fill
//             className="object-cover rounded-2xl"
//           />

//           <div className="absolute inset-0 flex justify-end m-3 gap-2 card-img_hover">
//             {source_code_link && (
//               <Link
//                 href={source_code_link}
//                 target="_blank"
//                 className="black-gradient w-10 h-10 rounded-full flex justify-center items-center"
//               >
//                 <Image
//                   src="/tech/github.webp"
//                   width={24}
//                   height={24}
//                   alt="source code"
//                 />
//               </Link>
//             )}

//             {deploy_link && (
//               <Link
//                 href={deploy_link}
//                 target="_blank"
//                 className="black-gradient w-10 h-10 rounded-full flex justify-center items-center"
//               >
//                 <Image
//                   src={
//                     platform === "Netlify"
//                       ? "/tech/netlify.webp"
//                       : platform === "Vercel"
//                       ? "/tech/vercel.svg"
//                       : platform === "Wordpress"
//                       ? "/tech/wordpress.webp"
//                       : platform === "Web"
//                       ? "/web.webp"
//                       : "/tech/figma.webp"
//                   }
//                   width={24}
//                   height={24}
//                   alt="live"
//                 />
//               </Link>
//             )}
//           </div>
//         </div>

//         <div className="mt-5">
//           <h3 className="text-white font-bold text-lg sm:text-xl">{name}</h3>
//           <p className="mt-2 text-secondary text-sm">{description}</p>
//         </div>

//         <div className="mt-4 flex flex-wrap gap-2">
//           {tags.map((tag) => (
//             <p key={`${name}-${tag.name}`} className={`text-sm ${tag.color}`}>
//               #{tag.name}
//             </p>
//           ))}
//         </div>
//       </Tilt>
//     </motion.div>
//   );
// };

// const Works = () => {
//   return (
//     <>
//       <motion.div variants={textVariant()}>
//         <p className="sectionSubText">My work</p>
//         <h2 className="sectionHeadText">Projects.</h2>
//       </motion.div>

//       <div className="w-full flex">
//         <motion.p
//           variants={fadeIn("", "", 0.1, 1)}
//           className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
//         >
//          Following projects showcases my skills and experience through real-world examples of my work. Each project is briefly described with links to code repositories and live demos in it. It reflects my ability to solve complex problems, work with different technologies, and manage projects effectively.
//         </motion.p>
//       </div>

//       <div className="mt-12 flex flex-col sm:flex-row flex-wrap gap-7 justify-center">
//         {projects.map((project, index) => (
//           <ProjectCard key={`project-${index}`} index={index} {...project} />
//         ))}
//       </div>
//     </>
//   );
// };

// export default SectionWrapper(Works, "projects");





"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Tilt } from "react-tilt";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "./HigherOrderComponents";

const ProjectCard = ({
	index,
	name,
	description,
	tags,
	image,
	source_code_link,
	deploy_link,
	platform,
}) => {
	return (
		<motion.div
			variants={fadeIn("up", "spring", index * 0.5, 0.75)}
			initial="hidden"
			whileInView="show"
			viewport={{ once: true, amount: 0.25 }}
			className="w-full sm:w-[360px]"
		>
			<Tilt
				options={{
					max: 45,
					scale: 1,
					speed: 450,
				}}
				className="bg-tertiary p-5 rounded-2xl w-full min-h-[450px] flex flex-col"
			>
				<div className="relative w-full h-[200px] sm:h-[230px] rounded-2xl overflow-hidden">
					<Image
						src={image}
						alt={`${name} project`}
						fill
						className="object-cover rounded-2xl"
						sizes="(max-width: 640px) 100vw, 360px"
					/>

					<div className="absolute inset-0 flex justify-end m-3 gap-2">
						{source_code_link && (
							<Link
								href={source_code_link}
								target="_blank"
								rel="noopener noreferrer"
								className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer hover:scale-110 transition-transform"
							>
								<Image
									src="/tech/github.webp"
									width={24}
									height={24}
									alt="GitHub"
								/>
							</Link>
						)}

						{deploy_link && (
							<Link
								href={deploy_link}
								target="_blank"
								rel="noopener noreferrer"
								className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer hover:scale-110 transition-transform"
							>
								<Image
									src={
										platform === "Netlify"
											? "/tech/netlify.webp"
											: platform === "Vercel"
											? "/tech/vercel.svg"
											: platform === "Wordpress"
											? "/tech/wordpress.webp"
											: platform === "Web"
											? "/web.webp"
											: "/tech/figma.webp"
									}
									width={24}
									height={24}
									alt={platform || "Deployment"}
								/>
							</Link>
						)}
					</div>
				</div>

				<div className="mt-5 flex-1 flex flex-col">
					<h3 className="text-white font-bold text-[18px] sm:text-[20px] md:text-[24px]">
						{name}
					</h3>
					<p className="mt-2 text-secondary text-[13px] sm:text-[14px] leading-[18px] sm:leading-[20px] flex-1">
						{description}
					</p>

					<div className="mt-4 flex flex-wrap gap-2">
						{tags.map((tag) => (
							<p
								key={`${name}-${tag.name}`}
								className={`text-[12px] sm:text-[14px] ${tag.color}`}
							>
								#{tag.name}
							</p>
						))}
					</div>
				</div>
			</Tilt>
		</motion.div>
	);
};

const Works = () => {
	return (
		<>
			<motion.div 
				variants={textVariant()}
				initial="hidden"
				whileInView="show"
				viewport={{ once: true }}
			>
				<p className="sectionSubText">My work</p>
				<h2 className="sectionHeadText">Projects.</h2>
			</motion.div>

			<div className="w-full flex">
				<motion.p
					variants={fadeIn("", "", 0.1, 1)}
					initial="hidden"
					whileInView="show"
					viewport={{ once: true }}
					className="mt-3 text-secondary text-[15px] sm:text-[17px] max-w-3xl leading-[26px] sm:leading-[30px]"
				>
					Following projects showcases my skills and experience through
					real-world examples of my work. Each project is briefly described with
					links to code repositories and live demos in it. It reflects my
					ability to solve complex problems, work with different technologies,
					and manage projects effectively.
				</motion.p>
			</div>

			<div className="mt-12 sm:mt-16 md:mt-20 flex flex-wrap gap-5 sm:gap-7 justify-center items-stretch">
				{projects.map((project, index) => (
					<ProjectCard key={`project-${index}`} index={index} {...project} />
				))}
			</div>
		</>
	);
};

export default SectionWrapper(Works, "projects");