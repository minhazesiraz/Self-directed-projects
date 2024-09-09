import glide from "@glidejs/glide";
import { useEffect } from "react";
import useThemes from "../../../../Hooks/useThemes";
import "./Sliders.css";

const Sliders = () => {
   const { theme } = useThemes();

   useEffect(() => {
      const slider = new glide(".glide-03", {
         type: "slider",
         focusAt: "center",
         perView: 1,
         autoplay: false,
         animationDuration: 700,
         gap: 0,
         classes: {
            nav: {
               // active: "[&>*]:bg-wuiSlate-700",
               active: "[&>*]:bg-slate-700",
            },
         },
      }).mount()

      return () => {
         slider.destroy()
      }
   }, [])

   const detailed = [
      {
         "job": "Hi, here’s a concise overview of web development.",
         "attach": "https://Tailwindmix.b-cdn.net/image-05.jpg",
         "duties": "At BaaQia.com, we excel in crafting cutting-edge LMS, eCommerce, portfolio, corporate, news, and educational websites. With tailored, innovative solutions, we ensure your specific needs are met, delivering a highly functional and visually captivating online presence that sets you apart."
      },
      {
         "job": "Hi, here’s a concise overview of graphics design.",
         "attach": "https://Tailwindmix.b-cdn.net/image-01.jpg",
         "duties": "BaaQia.com delivers exceptional graphic design services, from logos and business cards to t-shirts. We create a cohesive, professional brand image that powerfully represents your business, ensuring you stand out and make a lasting impression."
      },
      {
         "job": "Hi, here’s a concise overview of digital marketing.",
         "attach": "https://Tailwindmix.b-cdn.net/image-02.jpg",
         "duties": "At BaaQia.com, we drive business growth through powerful digital marketing strategies and top-tier SEO services. Our expert team targets your audience, enhances visibility, and achieves your goals with precision. Elevate your digital presence with us for exceptional results."
      },
      {
         "job": "Hi, here’s a concise overview of branding.",
         "attach": "https://Tailwindmix.b-cdn.net/image-03.jpg",
         "duties": "Build a strong, memorable brand with BaaQia.com. We craft consistent messaging and a unified visual identity across all platforms, ensuring your brand stands out and deeply resonates with your audience."
      },
      {
         "job": "Hi, here's a concise overview of 24/7 Online Support.",
         "attach": "https://Tailwindmix.b-cdn.net/image-04.jpg",
         "duties": "BaaQia.com provides round-the-clock online maintenance and support services to keep your website and digital assets up-to-date and secure. We ensure your online presence remains seamless, protected, and always operational, no matter the hour."
      },
   ]

   return (
      <>
         <div
            // className="py-16"
            className={`py-16 ${(theme === 'dark' || theme === 'default-dark') ? 'bg-gradient-to-bl from-purple-400 via-purple-50 to-transparent' : ''} ${(theme === 'light' || theme === 'default-light') ? 'bg-gradient-to-bl from-purple-400 via-purple-50 to-transparent' : ''} ${theme === 'warm' ? 'bg-gradient-to-bl from-purple-400 via-purple-50 to-transparent' : ''}`}
         >
            <div className="relative w-full glide-03">
               {/*    <!-- Slides --> */}
               <div className="overflow-hidden" data-glide-el="track">
                  <ul className="whitespace-no-wrap flex-no-wrap [backface-visibility: hidden] [transform-style: preserve-3d] [touch-action: pan-Y] [will-change: transform] relative flex w-full overflow-hidden p-0">
                     {
                        detailed.map((detail, i) => (
                           <li key={i}>
                              <div className="relative">
                                 <img
                                    src={detail.attach}
                                    className="w-full h-96 object-cover"
                                 />
                                 <div
                                    className={`absolute ${i % 2 === 0 ? 'bottom-10 w-3/6 left-20 h-4/6' : 'top-10 w-3/6 right-20 h-4/6'} flex flex-col justify-between bg-gray-900 bg-opacity-25 rounded p-4`}
                                 >
                                    <div className={`flex ${i % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                                       <strong className={`flex ${i % 2 === 0 ? '' : 'text-right'} font-shadows`}>Where Creativity Meets Technology.</strong>
                                    </div>
                                    <div className={`flex ${i % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                                       <strong className={`flex text-2xl ${i % 2 === 0 ? '' : 'text-right'}`}>{detail.job}</strong>
                                    </div>
                                    <p className={`flex ${i % 2 === 0 ? '' : 'text-right'}`}>{detail.duties}</p>
                                    <div className={`flex ${i % 2 === 0 ? 'justify-start' : 'justify-end'} gap-3`}>
                                       <button className="border px-6 py-1 rounded hover:bg-black bg-red-600 hover:ease-in hover:duration-300">GET STARTED</button>
                                       <button className="border px-6 py-1 rounded">LEARN MORE</button>
                                    </div>
                                 </div>
                              </div>
                           </li>
                        ))
                     }
                  </ul>
               </div>
               {/*    <!-- Controls --> */}
               <div
                  className="absolute left-0 flex items-center justify-between w-full h-0 px-4 top-1/2 controls-hidden"
                  data-glide-el="controls"
               >
                  <button
                     className="inline-flex items-center justify-center w-8 h-8 transition duration-300 border rounded-full border-slate-700 bg-white/20 text-slate-700 hover:border-slate-900 hover:text-slate-900 focus-visible:outline-none lg:h-12 lg:w-12"
                     data-glide-dir="<"
                     aria-label="prev slide"
                  >
                     <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-5 h-5"
                     >
                        <title>prev slide</title>
                        <path
                           strokeLinecap="round"
                           strokeLinejoin="round"
                           d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
                        />
                     </svg>
                  </button>
                  <button
                     className="inline-flex items-center justify-center w-8 h-8 transition duration-300 border rounded-full border-slate-700 bg-white/20 text-slate-700 hover:border-slate-900 hover:text-slate-900 focus-visible:outline-none lg:h-12 lg:w-12"
                     data-glide-dir=">"
                     aria-label="next slide"
                  >
                     <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-5 h-5"
                     >
                        <title>next slide</title>
                        <path
                           strokeLinecap="round"
                           strokeLinejoin="round"
                           d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                        />
                     </svg>
                  </button>
               </div>
               {/*    <!-- Indicators --> */}
               <div
                  className="absolute bottom-0 flex items-center justify-center w-full gap-2"
                  data-glide-el="controls[nav]"
               >
                  {
                     detailed.map((detail, i) => (
                        <button
                           key={i}
                           className="p-4 group"
                           data-glide-dir={`=${i}`}
                           aria-label={`goto slide ${i + 1}`}
                        >
                           <span className="block w-2 h-2 transition-colors duration-300 rounded-full bg-white/20 ring-1 ring-slate-700 focus:outline-none"></span>
                        </button>
                     ))
                  }
               </div>
            </div>
         </div>
      </>
   );
};

export default Sliders;