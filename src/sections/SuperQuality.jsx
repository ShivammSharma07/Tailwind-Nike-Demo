import React from "react";
import Button from "../components/Button";
import { arrowRight } from "../assets/icons";
import { shoe8 } from "../assets/images";
const SuperQuality = () => {
  return (
    <section
      id="about-us"
      className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container"
    >
      <div className="flex flex-1 flex-col">
        <h2 className="font-palanquin text-4xl font-bold lg:max-w-lg">
          We Provide You <span className="text-coral-red">Super</span> Quality
          Shoes
        </h2>
        <p className="mt-4 lg:max-w-lg  info-text ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum,
          sapiente! Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Voluptatum, sapiente!
        </p>
        <p className="mt-6 lg:max-w-lg info-text ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum,
          sapiente! Lorem ipsum dolor sit amet consectetur
        </p>
        <div className="mt-11">
          <Button label="View details" iconURL={arrowRight} />
        </div>
      </div>
      <div className="flex-1 flex justify-center items-center">
        <img
          src={shoe8}
          alt="shoes"
          width={570}
          height={522}
          className="object-contain"
        />
      </div>
    </section>
  );
};

export default SuperQuality;
