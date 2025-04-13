import React from "react";
import me from "../../assets/logo.png";
import forid1 from "../../assets/forid1.jpg";
import forid2 from "../../assets/forid2.jpg";
const Hero = () => {
  return (
    <div className="py-20 md:h-[100vh] bg-[#eaeaea]" id="home">
      <div className="px-6 md:px-20 flex flex-col-reverse md:flex-row justify-between items-center h-full">
        <div className="md:w-[50%] md:transform md:-translate-y-2">
          <h1
            className="text-5xl md:text-7xl font-bold"
            data-aos-delay="500"
            data-aos="fade-up"
            data-aos-duration="800"
          >
            ABDULLAH
          </h1>
          <div
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="700"
            className="flex"
          >
            <h1 className="text-5xl md:text-7xl font-bold">AL NIROB</h1>{" "}
            <span className="text-md">@</span>
          </div>
          <h2
            data-aos="fade-up"
            data-aos-duration="700"
            data-aos-delay="1000"
            className="text-2xl md:text-4xl font-bold"
          >
            WEB DEV.
          </h2>
          <p
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="1000"
            className="mb-4 text-[10px] md:text-sm"
          >
            A Front-End Web Developer with a focus on React.js. I create modern,
            responsive web applications that offer great user experiences. My
            skills turn innovative ideas into visually appealing and functional
            websites. Let's bring your vision to life!
          </p>
          <div className="flex items-center gap-4">
            {/* <button
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="1200"
              className="bg-black text-white px-5 md:px-8 py-3 rounded-full"
            >
              Contact me
            </button> */}
            <button
              className="group relative bg-black text-white px-5 md:px-8 py-2 rounded-full"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="1200"
            >
              <a
                href="#contact"
                className="relative inline-flex overflow-hidden"
              >
                <div className="translate-y-0 skew-y-0 transition duration-500 group-hover:-translate-y-[110%] group-hover:skew-y-12">
                  Contact me
                </div>
                <div className="absolute translate-y-[114%] skew-y-12 transition duration-500 group-hover:translate-y-0 group-hover:skew-y-0">
                  Contact me
                </div>
              </a>
            </button>
            <a href="Abdullah-Al-Nirob.pdf" download="Abdullah-Al-Nirob.pdf">
              <button
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay="1300"
                className="bg-transparent hover:bg-slate-200 text-black ring-1 ring-black px-3 md:px-6 py-2 rounded-full"
              >
                Download Resume
              </button>
            </a>
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="1400"
            className="flex flex-col mt-4 "
          >
            <div className="flex -space-x-4 items-center">
              <img
                alt=""
                className="w-9 md:w-12 h-9 md:h-12 border rounded-full dark:bg-gray-500 dark:border-gray-300"
                // src="https://scontent.fjsr11-1.fna.fbcdn.net/v/t39.30808-6/318974290_683452633390424_4742636809046044495_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeFp-RbCOKiA8YvC5rFM6zVhKrWcU9zNKKAqtZxT3M0ooH-lhtyVfRm6teeNH_C-Emm8zzOMLYA6OU4tdXWhcHkJ&_nc_ohc=Xu098yTMaZMQ7kNvgGNRmLH&_nc_zt=23&_nc_ht=scontent.fjsr11-1.fna&_nc_gid=A_-S4gKbd5k4cDPukc37t0k&oh=00_AYB6hsUeQfhnnTMRY5pv3nJHbEs-kik5So21aO9Ks90pwA&oe=6758C86B"
                src={forid1}
              />
              <img
                alt=""
                className="w-9 md:w-12 h-9 md:h-12 border rounded-full dark:bg-gray-500 dark:border-gray-300"
                // src="https://scontent.fjsr11-1.fna.fbcdn.net/v/t39.30808-6/437146608_409428758505426_6742917804333406796_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeHqM-KyypJebmZEly4Y4nOQ7-4-ayGv2Hbv7j5rIa_YdiluumTFs6QwmWO-1JNlXPwuvrbbrCNR_hFRidqKI7Ir&_nc_ohc=aQxhHXs3E9QQ7kNvgEhr1Fp&_nc_zt=23&_nc_ht=scontent.fjsr11-1.fna&_nc_gid=AKONmqqBxzsAdiE5qyfrBac&oh=00_AYAJ4LZ1bPLTfh9JXwAQSckdxOb-RiUArHo2ry645j3fsA&oe=6758B5EB"
                src={forid2}
              />
              <span className="flex items-center justify-center w-9 md:w-12 h-9 md:h-12 font-semibold border rounded-full dark:bg-gray-50 dark:text-gray-800 dark:border-gray-300">
                +3
              </span>
              <span className="transform translate-x-7 text-sm font-semibold">
                Happy And Satisfied Clients
              </span>
            </div>
          </div>
        </div>
        <img
          data-aos="zoom-in"
          data-aos-duration="800"
          data-aos-delay="400"
          src={me}
          alt=""
          className=" w-[50%] md:w-[30%]"
        />
      </div>
    </div>
  );
};

export default Hero;
