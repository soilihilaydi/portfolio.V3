"use client";

import Image from "next/image";
import { motion } from "framer-motion";


const Homepage = () => {

  return (
    <motion.div
    className="h-full"
    initial={{ y: "-200vh" }}
    animate={{ y: "0%" }}
    transition={{ duration: 1 }}
  >

    <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">

          {/* IMAGE CONTAINER */}

          <div className="h-1/2 lg:h-full lg:w-1/2 relative">
          <Image src="/hero.png" alt="" fill className="object-contain ml-[-25%]"/>
          </div>

           {/* TEXT CONTAINER */}

          <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-8 items-center justify-center">

            {/* TITLE */}

            <h1 className="text-4xl  md:text-6xl font-bold">Créer des expériences numériques, concevoir l'imaginaire.</h1>

            {/* DESC */}

            <p className="md:text-xl">

              Amoureux de l’esthétique et de la communication, je souhaite développer et renforcer 
              mes compétence pour travailler sur la création de sites en tant que développeur full stack.</p>

            {/* BUTTONS */}

            <div className="w-full flex gap-4">

              <button className="p-4 rounded-lg ring-1 ring-black bg-black text-white">Voir mon travail</button>

              <button className="p-4 rounded-lg ring-1 ring-black">Contacte moi</button>
            </div>
        </div>
    </div>
    </motion.div>
  );
};

export default Homepage;
