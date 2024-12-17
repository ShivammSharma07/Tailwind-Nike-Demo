import React from "react";
import { offer } from "../assets/images";
import Button from "../components/Button";
import { arrowRight } from "../assets/icons";

const SpecialOffer = () => {
  return (
    <section className="flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container">
      <div className="flex-1">
        <img
          src={offer}
          width={773}
          height={687}
          alt=""
          className="object-contain w-full"
        />
      </div>
      <div className="flex flex-1 flex-col">
        <h2 className="font-palanquin text-4xl font-bold lg:max-w-lg">
          <span className="text-coral-red">Special</span> Offers
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
    </section>
  );
};

export default SpecialOffer;
