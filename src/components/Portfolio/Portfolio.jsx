import React from "react";
import {
  Skeleton,
  SkeletonLine,
  Tabs,
  TabsContent,
  TabsItem,
  TabsList,
} from "keep-react";

const Portfolio = () => {
  const RawCode = [
    {
      name: "Englishজানালা",
      tech: ["HTML", "Tawilwindcss", "JavaScript", "API"],
      res: "No",
      description: "This is a description of project 2",
      img: "https://i.ibb.co.com/HLsrPp7D/5555.png",
      link: "https://english-janala-abdullah.surge.sh/",
    },
    {
      name: "Bangladesh 2.0",
      tech: ["HTML", "CSS"],
      res: "No",
      description: "This is a description of project 1",
      img: "https://i.ibb.co.com/5x4ck7hp/111.png",
      link: "https://abdullahalnirob.github.io/ph-assignment-01/",
    },
    {
      name: "Browse4Pets",
      tech: ["HTML", "Tawilwindcss"],
      res: "YES",
      description: "This is a description of project 2",
      img: "https://i.ibb.co.com/B2bgxvJc/33.png",
      link: "https://abdullahalnirob.github.io/ph-assignment-03/",
    },
    {
      name: "Kids School",
      tech: ["HTML", "CSS"],
      res: "No",
      description: "This is a description of project 2",
      img: "https://i.ibb.co.com/qvXdMPs/2222.png",
      link: "https://abdullahalnirob.github.io/ph-assignment-02/",
    },

    {
      name: "DevBoard",
      tech: ["HTML", "Tawilwindcss", "JavaScript"],
      res: "No",
      description: "This is a description of project 2",
      img: "https://i.ibb.co.com/xK6v6D0b/444.png",
      link: "https://abdullahalnirob.github.io/ph-assignment-05/",
    },
  ];
  const ReactJs = [
    {
      name: "CodeCraftor Agency",
      tech: ["React", "Tawilwindcss", "EmailJs"],
      res: "YES",
      img: "https://i.ibb.co.com/TD8Btbh4/777.png",
      link: "https://codecraftor.xyz/",
    },
    {
      name: "Spa Services",
      tech: ["React", "Tawilwindcss", "AOS Animation"],
      res: "YES",
      img: "https://i.ibb.co.com/HDtCg74K/888.png",
      link: "https://spaweb4455.vercel.app/",
    },
    {
      name: "LuLubaba.com",
      tech: ["React", "Tawilwindcss", "REST API"],
      res: "YES",
      img: "https://i.ibb.co.com/gZzm703Q/11-11.png",
      link: "https://e-commerce-web-omega-one.vercel.app/",
    },
    {
      name: "Foodie's",
      tech: ["React", "Tawilwindcss", "Firebase Auth"],
      res: "YES",
      img: "https://i.ibb.co.com/Kjsq5SjD/99999.png",
      link: "https://foodie-es.vercel.app/",
    },
    {
      name: "AuctionGallery",
      tech: ["React", "Tawilwindcss"],
      res: "No",
      img: "https://i.ibb.co.com/JwrHFTDs/666.png",
      link: "https://english-janala-abdullah.surge.sh/",
    },
    {
      name: "Burger Order",
      tech: ["React", "CSS"],
      res: "YES",
      img: "https://i.ibb.co.com/YFdFK393/10.png",
      link: "https://food-webste-abdullah.vercel.app/",
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

      {/* Tabs */}
      <Tabs defaultValue="item-1" className="">
        <TabsList className="flex my-10 flex-wrap md:flex-nowrap items-center justify-center gap-2 overflow-x-auto scrollbar-hide px-2">
          <TabsItem
            className="text-white px-3 py-2 whitespace-nowrap"
            value="item-1"
          >
            Raw Code
          </TabsItem>
          <TabsItem
            className="text-white px-3 py-2 whitespace-nowrap"
            value="item-2"
          >
            Frontend
          </TabsItem>
          <TabsItem
            className="text-white px-3 py-2 whitespace-nowrap"
            value="item-3"
          >
            FullStack
          </TabsItem>
          <TabsItem
            className="text-white px-3 py-2 whitespace-nowrap"
            value="item-4"
          >
            Client Project
          </TabsItem>
          <TabsItem
            className="text-white px-3 py-2 whitespace-nowrap"
            value="item-5"
          >
            Ads Video
          </TabsItem>
        </TabsList>

        <TabsContent value="item-1">
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {RawCode.map((p) => {
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
                        alt="Project Image"
                      />
                      <div className="p-6">
                        <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                          {p.name}
                        </h1>
                        <p className="flex flex-wrap gap-2 mb-3">
                          {p.tech.map((t, index) => (
                            <span
                              key={index}
                              className="px-2 py-1 ring-1 ring-black text-black text-sm rounded"
                            >
                              {t}
                            </span>
                          ))}
                        </p>
                        <p className="pb-2">
                          Responsive Status :{" "}
                          <span
                            className={
                              p.res === "YES"
                                ? "text-green-600 font-bold"
                                : "text-red-600 font-bold"
                            }
                          >
                            {p.res}
                          </span>
                        </p>
                        <div className="flex items-center flex-wrap ">
                          <a target="_blank" href={p.link} className="">
                            <button className="bg-black hover:bg-transparent duration-300 ease-out text-xl rounded text-white hover:text-black py-[3px] ring-2 ring-black  px-4 cursor-pointer inline-flex items-center md:mb-2 lg:mb-0">
                              Live View
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
        </TabsContent>
        <TabsContent value="item-2">
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {ReactJs.map((p) => {
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
                        alt="Project Image"
                      />
                      <div className="p-6">
                        <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                          {p.name}
                        </h1>
                        <p className="flex flex-wrap gap-2 mb-3">
                          {p.tech.map((t, index) => (
                            <span
                              key={index}
                              className="px-2 py-1 ring-1 ring-black text-black text-sm rounded"
                            >
                              {t}
                            </span>
                          ))}
                        </p>
                        <p className="pb-2">
                          Responsive Status :{" "}
                          <span
                            className={
                              p.res === "YES"
                                ? "text-green-600 font-bold"
                                : "text-red-600 font-bold"
                            }
                          >
                            {p.res}
                          </span>
                        </p>
                        <div className="flex items-center flex-wrap ">
                          <a target="_blank" href={p.link} className="">
                            <button className="bg-black hover:bg-transparent duration-300 ease-out text-xl rounded text-white hover:text-black py-[3px] ring-2 ring-black  px-4 cursor-pointer inline-flex items-center md:mb-2 lg:mb-0">
                              Live View
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
        </TabsContent>
        <TabsContent
          value="item-3"
          className="flex flex-col justify-between items-center text-center"
        >
          <img
            className="w-20"
            src="https://english-janala-abdullah.surge.sh/assets/alert-error.png"
            alt=""
          />
          <p className="my-2 text-white font-bold text-3xl">
            No Content Available!
          </p>
          <p className="text-gray-400">Content Will upload soon!</p>
        </TabsContent>
        <TabsContent
          value="item-4"
          className="flex flex-col justify-between items-center text-center"
        >
          <img
            className="w-20"
            src="https://english-janala-abdullah.surge.sh/assets/alert-error.png"
            alt=""
          />
          <p className="my-2 text-white font-bold text-3xl">
            No Content Available!
          </p>
          <p className="text-gray-400">Content Will upload soon!</p>
        </TabsContent>
        <TabsContent
          value="item-5"
          className="flex flex-col justify-between items-center text-center"
        >
          <img
            className="w-20"
            src="https://english-janala-abdullah.surge.sh/assets/alert-error.png"
            alt=""
          />
          <p className="my-2 text-white font-bold text-3xl">
            No Content Available!
          </p>
          <p className="text-gray-400">Content Will upload soon!</p>
        </TabsContent>
      </Tabs>
      {/* Tabs */}
    </div>
  );
};

export default Portfolio;
