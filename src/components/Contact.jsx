import { motion } from "framer-motion";
import React from "react";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

// template_j31qy1e
// service_kcgle8t
// VN3iIw2vWblpKzFFy

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefualt();
    setLoading(true);

    emailjs
      .send(
        "service_kcgle8t",
        "template_j31qy1e",
        {
          from_name: form.name,
          to_name: "Nicolas",
          from_email: form.email,
          to_email: "jomoral2013@gmail.com",
          message: form.message,
        },
        "VN3iIw2vWblpKzFFy"
      )
      .then(
        () => {
          setLoading(false);
          alert("Gracias por contactarse. Responderé lo mas rapido posible");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.log(error);
          alert("Hubo un error");
        }
      );
  };

  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75 bg-black-100 p-8 rounded-2xl"
      >
        <h3 className={styles.sectionHeadText}>Contacto</h3>
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label htmlFor="" className="flex flex-col">
            <span className="text-white">Nombre</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Su Nombre"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
            />
          </label>

          <label htmlFor="" className="flex flex-col">
            <span className="text-white">Email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Su Email"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
            />
          </label>

          <label htmlFor="" className="flex flex-col">
            <span className="text-white">Mensaje</span>
            <textarea
              rows="7"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Su mensaje"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
            />
          </label>
          <button
            className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl "
            type="submit"
          >
            {loading ? "Enviando..." : "Enviar"}
          </button>
        </form>
      </motion.div>
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
