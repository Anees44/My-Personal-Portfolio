// export const textVariant = (delay) => {
//   return {
//     hidden: {
//       y: -50,
//       opacity: 0,
//     },
//     show: {
//       y: 0,
//       opacity: 1,
//       transition: {
//         type: "spring",
//         duration: 1.25,
//         delay: delay,
//       },
//     },
//   };
// };

// export const fadeIn = (direction, type, delay, duration) => {
//   return {
//     hidden: {
//       x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
//       y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
//       opacity: 0,
//     },
//     show: {
//       x: 0,
//       y: 0,
//       opacity: 1,
//       transition: {
//         type: type,
//         delay: delay,
//         duration: duration,
//         ease: "easeOut",
//       },
//     },
//   };
// };

// export const zoomIn = (delay, duration) => {
//   return {
//     hidden: {
//       scale: 0,
//       opacity: 0,
//     },
//     show: {
//       scale: 1,
//       opacity: 1,
//       transition: {
//         type: "tween",
//         delay: delay,
//         duration: duration,
//         ease: "easeOut",
//       },
//     },
//   };
// };

// export const slideIn = (direction, type, delay, duration) => {
//   return {
//     hidden: {
//       x: direction === "left" ? "-100%" : direction === "right" ? "100%" : 0,
//       y: direction === "up" ? "100%" : direction === "down" ? "100%" : 0,
//     },
//     show: {
//       x: 0,
//       y: 0,
//       transition: {
//         type: type,
//         delay: delay,
//         duration: duration,
//         ease: "easeOut",
//       },
//     },
//   };
// };

// export const staggerContainer = (staggerChildren, delayChildren) => {
//   return {
//     hidden: {},
//     show: {
//       transition: {
//         staggerChildren: staggerChildren,
//         delayChildren: delayChildren || 0,
//       },
//     },
//   };
// };




export const textVariant = (delay = 0) => {
	return {
		hidden: {
			y: -50,
			opacity: 0,
		},
		show: {
			y: 0,
			opacity: 1,
			transition: {
				type: "spring",
				duration: 1.25,
				delay: delay,
			},
		},
	};
};

export const fadeIn = (direction = "", type = "spring", delay = 0, duration = 0.75) => {
	return {
		hidden: {
			x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
			y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
			opacity: 0,
		},
		show: {
			x: 0,
			y: 0,
			opacity: 1,
			transition: {
				type: type,
				delay: delay,
				duration: duration,
				ease: "easeOut",
			},
		},
	};
};

export const zoomIn = (delay = 0, duration = 0.75) => {
	return {
		hidden: {
			scale: 0,
			opacity: 0,
		},
		show: {
			scale: 1,
			opacity: 1,
			transition: {
				type: "tween",
				delay: delay,
				duration: duration,
				ease: "easeOut",
			},
		},
	};
};

export const slideIn = (direction = "left", type = "tween", delay = 0, duration = 0.75) => {
	return {
		hidden: {
			x: direction === "left" ? "-100%" : direction === "right" ? "100%" : 0,
			y: direction === "up" ? "100%" : direction === "down" ? "100%" : 0,
		},
		show: {
			x: 0,
			y: 0,
			transition: {
				type: type,
				delay: delay,
				duration: duration,
				ease: "easeOut",
			},
		},
	};
};

export const staggerContainer = (staggerChildren = 0.1, delayChildren = 0) => {
	return {
		hidden: {},
		show: {
			transition: {
				staggerChildren: staggerChildren,
				delayChildren: delayChildren,
			},
		},
	};
};

// Additional useful animations

export const scaleVariant = (delay = 0) => {
	return {
		hidden: {
			scale: 0.8,
			opacity: 0,
		},
		show: {
			scale: 1,
			opacity: 1,
			transition: {
				type: "spring",
				delay: delay,
				duration: 0.75,
				stiffness: 100,
			},
		},
	};
};

export const rotateVariant = (delay = 0) => {
	return {
		hidden: {
			rotate: -180,
			opacity: 0,
		},
		show: {
			rotate: 0,
			opacity: 1,
			transition: {
				type: "spring",
				delay: delay,
				duration: 1,
			},
		},
	};
};

export const bounceVariant = (delay = 0) => {
	return {
		hidden: {
			y: -100,
			opacity: 0,
		},
		show: {
			y: 0,
			opacity: 1,
			transition: {
				type: "spring",
				delay: delay,
				duration: 0.8,
				bounce: 0.5,
			},
		},
	};
};

export const flipVariant = (delay = 0) => {
	return {
		hidden: {
			rotateY: 90,
			opacity: 0,
		},
		show: {
			rotateY: 0,
			opacity: 1,
			transition: {
				type: "spring",
				delay: delay,
				duration: 1,
			},
		},
	};
};

export const navVariants = {
	hidden: {
		opacity: 0,
		y: -50,
		transition: {
			type: "spring",
			stiffness: 300,
			damping: 140,
		},
	},
	show: {
		opacity: 1,
		y: 0,
		transition: {
			type: "spring",
			stiffness: 80,
			delay: 0.5,
		},
	},
};

export const footerVariants = {
	hidden: {
		opacity: 0,
		y: 50,
		transition: {
			type: "spring",
			stiffness: 300,
			damping: 140,
		},
	},
	show: {
		opacity: 1,
		y: 0,
		transition: {
			type: "spring",
			stiffness: 80,
			delay: 0.5,
		},
	},
};

export const planetVariants = (direction = "left") => ({
	hidden: {
		x: direction === "left" ? "-100%" : "100%",
		rotate: 120,
	},
	show: {
		x: 0,
		rotate: 0,
		transition: {
			type: "spring",
			duration: 1.8,
			delay: 0.5,
		},
	},
});

export const hoverVariant = {
	hover: {
		scale: 1.05,
		transition: {
			duration: 0.3,
			type: "spring",
			stiffness: 300,
		},
	},
};

export const tapVariant = {
	tap: {
		scale: 0.95,
	},
};