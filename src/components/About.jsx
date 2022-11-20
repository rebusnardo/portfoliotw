import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full  grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-red-600">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>Hi, nice to meet you. Please take a look around</p>
          </div>
          <div>
            <p>
              I’m trying to use page level css to alter the H2 to use this new
              font family. I specify h2, .h2 on the CSS tab for the page. When I
              view the page, the font is not Raleway but the first available
              system font. Is there a way to use the added fonts in CSS versus
              picking it from the font selector on the element? thanks
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
