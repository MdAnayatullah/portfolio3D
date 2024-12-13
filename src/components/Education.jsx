import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

// const EducationCard = () => (
//   <motion.div
//     variants={fadeIn("", "spring", 0.25)}
//     className="bg-black-200 p-10 rounded-3xl w-full"
//   >
//     {/* <p className="text-white font-black text-[48px]"> */}
//     <div className="p-4">
//       <div className="mb-6">
//         <h2 className="text-xl font-semibold">
//           Zakir Husain College of Engineering and Technology, Aligarh Muslim
//           University (AMU)
//         </h2>
//         <p>B.Tech in Computer Science and Engineering</p>
//         <p>CGPA: 8.043 | 2020-24</p>
//       </div>
//       <div className="mb-6">
//         <h2 className="text-xl font-semibold">
//           Aligarh Muslim University, Dept. Polytechnic
//         </h2>
//         <p>Diploma in Computer Engineering</p>
//         <p>Percentage: 85.86% | 2017-20</p>
//       </div>
//       <div>
//         <h2 className="text-xl font-semibold">
//           Aligarh Muslim University, City High School
//         </h2>
//         <p>Matriculation</p>
//         <p>Percentage: 91.2% | 2017</p>
//       </div>
//     </div>
//     {/* </p> */}
//   </motion.div>
// );

// function Education() {
//   const fadeIn = {
//     initial: { opacity: 0, y: 30 },
//     animate: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.5, ease: "easeOut" },
//     },
//   };
//   return (
//     <div className="mt-12 bg-black-100 rounded-[20px]">
//       <div
//         className={`${styles.padding}
//       bg-tertiary rounded-2xl min-h-[300px]
//       `}
//       >
//         <motion.div variants={textVariant()}>
//           {/* <p className={styles.sectionSubText}>What other say</p> */}
//           <h2 className={styles.sectionHeadText}>Educations.</h2>
//         </motion.div>
//       </div>

//       <div className={`${styles.paddingX} -mt-20 pb-14 flex flex-wrap gap-7`}>
//         <EducationCard />
//       </div>
//     </div>
//   );
// }

function Education() {
  const fadeIn = {
    initial: { opacity: 0, y: 30 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <div className="mt-12 bg-gray-800 rounded-lg shadow-lg overflow-hidden">
      <div className="bg-gradient-to-r from-tertiary to-blue-950 p-8 text-white">
        <motion.h1 initial="initial" animate="animate" variants={fadeIn}>
          <h2 className={styles.sectionHeadText}>Educations.</h2>
        </motion.h1>
        <p className="opacity-75">My academic journey and achievements.</p>
      </div>

      <div className="p-8 space-y-6">
        <motion.div
          initial="initial"
          animate="animate"
          variants={fadeIn}
          className="bg-gray-900 p-6 rounded-lg shadow-md"
        >
          <h2 className="text-xl font-semibold text-blue-400">
            Zakir Husain College of Engineering and Technology, Aligarh Muslim
            University (AMU)
          </h2>
          <p className="text-gray-300">
            B.Tech in Computer Science and Engineering
          </p>
          <p className="text-gray-400">CPI: 8.04/10 | 2020-24</p>
        </motion.div>

        <motion.div
          initial="initial"
          animate="animate"
          variants={fadeIn}
          className="bg-gray-900 p-6 rounded-lg shadow-md"
        >
          <h2 className="text-xl font-semibold text-blue-400">
            Aligarh Muslim University, Dept. Polytechnic
          </h2>
          <p className="text-gray-300">Diploma in Computer Engineering</p>
          <p className="text-gray-400">Percentage: 85.86% | 2017-20</p>
        </motion.div>

        <motion.div
          initial="initial"
          animate="animate"
          variants={fadeIn}
          className="bg-gray-900 p-6 rounded-lg shadow-md"
        >
          <h2 className="text-xl font-semibold text-blue-400">
            Aligarh Muslim University, City High School
          </h2>
          <p className="text-gray-300">Matriculation</p>
          <p className="text-gray-400">CGPA: 9.6/10 | 2017</p>
        </motion.div>
      </div>
    </div>
  );
}

export default SectionWrapper(Education, "education");
