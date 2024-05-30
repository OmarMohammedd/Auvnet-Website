export const slideIn = (direction, type, delay, duration) => {
  return {
    hidden: {
      x: direction === "left" ? "-2%" : direction === "right" ? "100%" : 0,
      y: direction === "up" ? "100%" : direction === "down" ? "100%" : 0,
      opacity: 0,
    },
    show: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        type: type,
        delay: delay,
        duration: duration,
        ease: "linear",
      },
    },
    exit: {
      opacity: 0,
      x: direction === "left" ? "-2%" : direction === "right" ? "100%" : 0,
      y: direction === "up" ? "100%" : direction === "down" ? "100%" : 0,
      transition: {
        type: type,
        delay: delay,
        duration: duration,
        ease: "linear",
      },
    },
  };
};
export const slideInServices = (
  direction,
  type,
  delay,
  duration,
  opacity = true
) => {
  return {
    hidden: {
      y: "0",
      opacity: 1,
    },
    show: {
      opacity: 0,
      y: "-100%",
      transition: {
        delay: delay,
        duration: duration,
      },
    },
  };
};
export const preServices = (
  direction,
  type,
  delay,
  duration,
  opacity = true
) => {
  return {
    hidden: {
      x: direction === "left" ? "-0%" : direction === "right" ? "100%" : 0,
      y: direction === "up" ? "0" : direction === "down" ? "100%" : 0,
      opacity: 1,
    },
    show: {
      x: 0,
      y: "40vh",
      opacity: 0,

      transition: {
        delay: delay,
        duration: duration,
        ease: "linear",
      },
    },
  };
};
export const preServicesone = (direction, delay, duration) => {
  return {
    hidden: {
      x: direction === "left" ? "-0%" : direction === "right" ? "100%" : 0,
      y: direction === "up" ? "0" : direction === "down" ? "100%" : 0,
    },
    show: {
      x: 0,
      y: "20vh",
      transition: {
        delay: delay,
        duration: duration,
        ease: "linear",
      },
    },
  };
};
export const preServicesonedash = (direction, delay, duration) => {
  return {
    hidden: {
      x: direction === "left" ? "-0%" : direction === "right" ? "100%" : 0,
      y: direction === "up" ? "0" : direction === "down" ? "100%" : 0,
    },
    show: {
      x: 0,
      y: "-20vh",
      transition: {
        stiffness: 250,
        type: "spring",
        delay: delay,
        duration: duration,
      },
    },
  };
};
export const projectMontain = (delay, duration) => {
  return {
    hidden: {
      scale: 1,
    },
    show: {
      scale: 6,
      transition: {
        delay: delay,
        duration: duration,
      },
    },
  };
};
export const altProjectMontain = (delay, duration) => {
  return {
    hidden: {
      y: 0,
    },
    show: {
      y: "35vh",
      transition: {
        delay: delay,
        duration: duration,
      },
    },
  };
};
export const servicesBackground = (delay, duration) => {
  return {
    hidden: {
      scale: 1,
    },
    show: {
      scale: 12,
      transition: {
        delay: delay,
        duration: duration,
      },
    },
  };
};
export const serivicesOpacity = (delay, duration) => {
  return {
    hidden: {
      opacity: 1,
    },
    show: {
      opacity: 0,
      transition: {
        delay: delay,
        duration: duration,
      },
    },
  };
};
export const leftService = (delay, duration , isSpring=false) => {
  return {
    hidden: {
      x: "-90%",
    },
    show: {
      x: 0,
      transition: {
        delay: delay,
        duration: duration,
      },
    },
  };
};
export const leftService2 = (delay, duration , isSpring=false) => {
  return {
    hidden: {
      x: "-90%",
    },
    show: {
      x: 0,
      transition: {
        delay: delay,
        duration: duration,
        type: isSpring && 'spring' ,
        stiffness:isSpring &&60
      },
    },
  };
};
export const bottomService = (delay, duration) => {
  return {
    hidden: {
      y: "90%",
    },
    show: {
      y: 0,
      transition: {
        delay: delay,
        duration: duration,

        type:  'spring' ,
        stiffness:60
      },
    },
  };
};
export const rightService = (delay, duration) => {
  return {
    hidden: {
      x: "90%",
    },
    show: {
      x: 0,
      transition: {
        delay: delay,
        duration: duration,
      },
    },
  };
};
export const hideFunction = (delay, duration) => {
  return {
    hidden: {
      opacity: 1,
    },
    show: {
      opacity: 0,
      transition: {
        delay: delay,
        duration: duration,
      },
    },
  };
};
export const showFunction = (delay, duration) => {
  return {
    hidden: {
      opacity: 0,
    },
    show: {
      opacity: 1,
      transition: {
        delay: delay,
        duration: duration,
      },
    },
  };
};
export const displayFunc = (delay, duration) => {
  return {
    hidden: {
      display: 'block',
    },
    show: {
      display: 'flex',
      transition: {
        delay: delay,
        duration: duration,
      },
    },
  };
};
export const showHideFunction = (delay, duration) => {
  return {
    hidden: {
      opacity: 0,
    },
    show: {
      opacity: 1,
      transition: {
        delay: delay,
        duration: duration,
      },
    },
  };
};
export const projectHeadingFunction = (delay, duration) => {
  return {
    hidden: {
      y: 0,
      x: 0,
    },
    show: {
      y: "-20vh",
      x: "-20vw",
      transition: {
        delay: delay,
        duration: duration,
      },
    },
  };
};
export const projectHeadingFunctionres = (delay, duration) => {
  return {
    hidden: {
      y: 0,
      x: 0,
    },
    show: {
      y: "-5vh",
      transition: {
        delay: delay,
        duration: duration,
      },
    },
  };
};
export const projectDescFunction = (delay, duration) => {
  return {
    hidden: {
      x: "-100%",
    },
    show: {
      x: "0",
      transition: {
        delay: delay,
        duration: duration,
        stiffness: 120,
        type: "spring",
      },
    },
  };
};
export const coursesImgs = (duration) => ({
  hidden: {
    width: 285,
    filter: "grayscale(100%)", // Apply grayscale filter in hidden state
  },
  show: {
    width: 570,
    filter: "grayscale(0%)", // Remove grayscale filter in show state
    transition: {
      duration: duration,
    },
  },
  exit: {
    width: 285,
    filter: "grayscale(100%)", // Apply grayscale filter when exiting
    transition: {
      duration: duration,
    },
  },
});
export const courseArrow = (duration) => ({
  hidden: {
    width: "54px",
  },
  show: {
    width: "108px",
    transition: {
      duration: duration,
    },
  },
  exit: {
    width: "54px",
    transition: {
      duration: duration,
    },
  },
});
export const courseArrowRight = (duration) => ({
  hidden: {
    size: 20,
  },
  show: {
    size: 40,
    transition: {
      duration: duration,
    },
  },
  exit: {
    size: 20,
    transition: {
      duration: duration,
    },
  },
});
export const getStartedFunc = (duration) => ({
  hidden: {
    y: "-100%",
  },
  show: {
    y: "0",
    transition: {
      duration: duration,
    },
  },
});
export const navBarFunction = (duration) => ({
  hidden: {
    height: "30px",
  },
  show: {
    height: "460px",
    transition: {
      duration: duration,
    },
  },
  exit: {
    height: "30px",
    transition: {
      duration: duration,
    },
  },
});
export const navBarFunctionForMobile = (duration) => ({
  hidden: {
    height: "0px",
  },
  show: {
    height: "460px",
    transition: {
      duration: duration,
    },
  },
  exit: {
    height: "0px",
    transition: {
      duration: duration,
    },
  },
});
