import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[250px] w-full">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-primary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <img
          src={icon}
          alt="web-development"
          className="w-16 h-16 object-contain"
        />

        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <h3 className={styles.sectionHeadText}>Presentación</h3>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        Soy un desarrollador Full Stack con experiencia en la creación de aplicaciones web mediante el uso de lenguajes como JavaScript, Java, PHP y frameworks como React, React Native, AngularJS y Node.js. Además, cuento con sólidos conocimientos tanto en bases de datos relacionales SQL (MySQL) como no relacionales (Mongo DB). También otras tecnologías como Github, GitLab y Docker. 
Mi dedicación y pasión por la tecnología lo reflejo en mi constante búsqueda de aprendizaje y mejora de mis habilidades técnicas. Estoy enfocado en ofrecer soluciones eficientes y de alta calidad para abordar los desafíos que se presentan. Considero que la innovación y la excelencia técnica son fundamentales en el campo del desarrollo de software, y estoy comprometido a mantenerme actualizado con las últimas tendencias y prácticas.

      </motion.p>
      <div className="mt-20 flex flex-wrap gap-40">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
