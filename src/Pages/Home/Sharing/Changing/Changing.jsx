import useThemes from "../../../../Hooks/useThemes";


const Changing = () => {
   const { theme, toggleTheme } = useThemes();

    return (
        <>
            <div className="fixed bottom-4 right-4 z-10">
            <div className="group flex flex-col-reverse gap-2">
               <button className="group relative z-50 inline-flex h-14 items-center justify-center gap-2 self-center whitespace-nowrap rounded bg-emerald-500 px-7 text-sm font-medium tracking-wide text-white transition duration-300 hover:bg-emerald-600 focus:bg-emerald-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-emerald-300 disabled:bg-emerald-300 disabled:shadow-none">
                  <span className="relative transition duration-300 only:-mx-6 group-hover:rotate-45">
                     <span className="sr-only">Button description</span>
                     <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="h-6 w-6"
                        aria-label="Plus icon"
                        role="graphics-symbol"
                     >
                        <path
                           strokeLinecap="round"
                           strokeLinejoin="round"
                           d="M12 4.5v15m7.5-7.5h-15"
                        />
                     </svg>
                  </span>
               </button>
               <button
                  className={`inline-flex h-0 w-0 translate-y-2 flex-col items-center justify-center gap-2 self-center justify-self-center overflow-hidden whitespace-nowrap rounded px-6 text-sm font-medium tracking-wide text-emerald-500 opacity-0 transition duration-300 hover:bg-emerald-200 hover:text-emerald-600 focus:bg-emerald-200 focus:text-emerald-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-emerald-300 disabled:bg-emerald-100 disabled:text-emerald-400 disabled:shadow-none group-hover:h-14 group-hover:w-14 group-hover:translate-y-0 group-hover:opacity-100 ${theme === 'light' ? 'bg-emerald-200' : 'bg-emerald-100'}`}
                  onClick={() => toggleTheme('light')}
               >
                  <span className="relative only:-mx-6">
                     <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="h-5 w-5"
                        aria-label="pencil-square icon"
                        role="graphics-symbol"
                     >
                        <path
                           strokeLinecap="round"
                           strokeLinejoin="round"
                           d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                        />
                     </svg>
                  </span>
                  <span className="text-xs font-medium">Edit</span>
               </button>
               <button
                  className="inline-flex h-0 w-0 translate-y-2 flex-col items-center justify-center gap-2 self-center justify-self-center overflow-hidden whitespace-nowrap rounded bg-emerald-50 px-6 text-sm font-medium tracking-wide text-emerald-500 opacity-0 transition delay-[0.05s] duration-300 hover:bg-emerald-100 hover:text-emerald-600 focus:bg-emerald-200 focus:text-emerald-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-emerald-300 disabled:bg-emerald-100 disabled:text-emerald-400 disabled:shadow-none group-hover:h-14 group-hover:w-14 group-hover:translate-y-0 group-hover:opacity-100"
                  onClick={() => toggleTheme('dark')}
               >
                  <span className="relative only:-mx-6">
                     <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="h-5 w-5"
                        aria-label="document-duplicate icon"
                        role="graphics-symbol"
                     >
                        <path
                           strokeLinecap="round"
                           strokeLinejoin="round"
                           d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 0 1-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 0 1 1.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 0 0-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 0 1-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H9.75"
                        />
                     </svg>
                  </span>
                  <span className="text-xs font-medium">Copy</span>
               </button>
               <button
                  className="inline-flex h-0 w-0 translate-y-2 flex-col items-center justify-center gap-2 self-center justify-self-center overflow-hidden whitespace-nowrap rounded bg-emerald-50 px-6 text-sm font-medium tracking-wide text-emerald-500 opacity-0 transition delay-[0.10s] duration-300 hover:bg-emerald-100 hover:text-emerald-600 focus:bg-emerald-200 focus:text-emerald-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-emerald-300 disabled:bg-emerald-100 disabled:text-emerald-400 disabled:shadow-none group-hover:h-14 group-hover:w-14 group-hover:translate-y-0 group-hover:opacity-100"
                  onClick={() => toggleTheme('orange')}
               >
                  <span className="relative only:-mx-6">
                     <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="h-5 w-5"
                     >
                        <path
                           strokeLinecap="round"
                           strokeLinejoin="round"
                           d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z"
                        />
                     </svg>
                  </span>
                  <span className="text-xs font-medium">Paste</span>
               </button>
               <button
                  className="inline-flex h-0 w-0 translate-y-2 flex-col items-center justify-center gap-2 self-center justify-self-center overflow-hidden whitespace-nowrap rounded bg-emerald-50 px-6 text-sm font-medium tracking-wide text-emerald-500 opacity-0 transition delay-[0.15s] duration-300 hover:bg-emerald-100 hover:text-emerald-600 focus:bg-emerald-200 focus:text-emerald-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-emerald-300 disabled:bg-emerald-100 disabled:text-emerald-400 disabled:shadow-none group-hover:h-14 group-hover:w-14 group-hover:translate-y-0 group-hover:opacity-100"
                  onClick={() => toggleTheme('default')}
               >
                  <span className="relative only:-mx-6">
                     <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="h-5 w-5"
                        aria-label="camera icon"
                        role="graphics-symbol"
                     >
                        <path
                           strokeLinecap="round"
                           strokeLinejoin="round"
                           d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z"
                        />
                     </svg>
                  </span>
                  <span className="text-xs font-medium">Share</span>
               </button>
            </div>
         </div>
        </>
    );
};

export default Changing;