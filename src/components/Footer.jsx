import React from "react";
import { footerLinks } from "../constants";

const Footer = () => {
  return (
    <footer className="py-5 sm:px-10 px-5">
      <div className="screen-max-width">
        <div>
          <p className="font-semibold text-gray text-xs">
            More ways to shop:{" "}
            <span className="underline text-blue"> Find an Apple Store</span> or{" "}
            <span className="underline text-blue">other retailers</span> near
            your
          </p>
          <p className="font-semibold text-gray text-xs">
            Or call 0712389290/0780137696
          </p>
          <p className="font-semibold text-white text-xs">
            This iPhone 15 Pro clone was developed by Tanyaradzwa T Mushonga
            (cypher)
          </p>
        </div>
        <div className="bg-neutral-700 my-5 h-[1px] w-full" />

        <div className="flex md:flex-row flex-col md:items-center justify-between">
          <p className="font-semibold text-gray text-xs">
            Copright @ 2024 Apple Inc. All rights reserved.
          </p>
          <div className="flex">
            {footerLinks.map((link, i) => (
              <p key={link}>
                {link}
                {i !== footerLinks.length - 1 && (
                  <span className="mx-2"> | </span>
                )}
              </p>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
