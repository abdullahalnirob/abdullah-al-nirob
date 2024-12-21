import React from "react";
const Portfolio = () => {
  const projects = [
    {
      name: "Project 1",
      description: "This is a description of project 1",
      img: "https://via.placeholder.com/300x200",
      link: "https://example.com",
    },
    {
      name: "Project 2",
      description: "This is a description of project 2",
      img: "https://via.placeholder.com/300x200",
      link: "https://example.com",
    },
    {
      name: "Project 2",
      description: "This is a description of project 2",
      img: "https://via.placeholder.com/300x200",
      link: "https://example.com",
    },
    {
      name: "Project 2",
      description: "This is a description of project 2",
      img: "https://via.placeholder.com/300x200",
      link: "https://example.com",
    },
  ];
  return (
    <div className="px-7 md:px-20 py-20 bg-black" id="portfolio">
      <h1 className="text-4xl font-bold text-white mb-10  relative left-6">
        <div className="group relative inline-block">
          <span className="absolute bottom-0 right-0 h-5 w-5 rounded-full border-[3px] border-white bg-white"></span>
          <span className="absolute bottom-0 right-0 h-5 w-5 animate-ping rounded-full bg-white"></span>
        </div>
        <span className="ml-3">My Portfolio</span>
      </h1>
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((p) => {
            const { img } = p;
            return (
              <div className="p-4">
                <div
                  className="bg-zinc-100 h-full ring-1 ring-gray-600 border-opacity-60 rounded-lg overflow-hidden"
                  data-aos="fade-in"
                >
                  <img
                    className="lg:h-48 md:h-36 w-full object-cover object-center"
                    src={img}
                    alt="blog"
                  />
                  <div className="p-6">
                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                      The Catalyzer
                    </h1>
                    <p className="leading-relaxed mb-3">
                      Photo booth fam kinfolk cold-pressed sriracha leggings
                      jianbing microdosing tousled waistcoat.
                    </p>
                    <div className="flex items-center flex-wrap ">
                      <a className="">
                        <button className="bg-black hover:bg-transparent duration-300 ease-out text-xl rounded text-white hover:text-black py-[3px] ring-2 ring-black  px-4 cursor-pointer inline-flex items-center md:mb-2 lg:mb-0">
                          View
                          <svg
                            className="w-4 h-4 ml-2"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            stroke-width="2"
                            fill="none"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          >
                            <path d="M5 12h14"></path>
                            <path d="M12 5l7 7-7 7"></path>
                          </svg>
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
