import PropTypes from 'prop-types';
import { useEffect, useRef } from "react";

const ConfirmationModal = ({ closeModal, handleDelete }) => {
   const wrapperRef = useRef(null);

   useEffect(() => {
      function handleClickOutside(event) {
         if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
            closeModal()
         }
      }
      document.addEventListener("mousedown", handleClickOutside)
      return () => {
         document.removeEventListener("mousedown", handleClickOutside)
      }
   }, [closeModal])

   useEffect(() => {
      let html = document.querySelector("html")

      if (html) {
         html.style.overflowY = "hidden"

         const focusableElements =
            'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'

         const modal = document.querySelector("#modal")

         const firstFocusableElement =
            modal.querySelectorAll(focusableElements)[0]

         const focusableContent = modal.querySelectorAll(focusableElements)

         const lastFocusableElement =
            focusableContent[focusableContent.length - 1]

         const handleKeyDown = (e) => {
            if (e.keyCode === 27) {
               closeModal()
            }

            let isTabPressed = e.key === "Tab" || e.keyCode === 9

            if (!isTabPressed) {
               return
            }

            if (e.shiftKey) {
               if (document.activeElement === firstFocusableElement) {
                  lastFocusableElement.focus()
                  e.preventDefault()
               }
            } else {
               if (document.activeElement === lastFocusableElement) {
                  firstFocusableElement.focus()
                  e.preventDefault()
               }
            }
         }

         document.addEventListener("keydown", handleKeyDown)

         firstFocusableElement.focus()

         return () => {
            document.removeEventListener("keydown", handleKeyDown)
            html.style.overflowY = "visible"
         }
      }
   }, [closeModal])

   return (
      <>
         <div
            className="fixed top-0 left-0 z-20 flex items-center justify-center w-screen h-screen bg-slate-300/20 backdrop-blur-sm"
            aria-labelledby="header-5a content-5a"
            aria-modal="true"
            tabIndex="-1"
            role="dialog"
         >
            <div
               ref={wrapperRef}
               className="flex max-h-[90vh] max-w-xs flex-col gap-6 overflow-hidden rounded bg-white p-6 text-center text-slate-500 shadow-xl shadow-slate-700/10"
               id="modal"
               role="document"
            >
               <header id="header-5a" className="flex flex-col items-center gap-4">
                  <svg
                     xmlns="http://www.w3.org/2000/svg"
                     className="w-8 h-8 stroke-pink-500"
                     fill="none"
                     viewBox="0 0 24 24"
                     stroke="currentColor"
                     strokeWidth="1.5"
                     role="graphics-symbol"
                     aria-labelledby="title-21 desc-21"
                  >
                     <title id="title-21">Icon title</title>
                     <desc id="desc-21">
                        A more detailed description of the icon
                     </desc>
                     <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                     />
                  </svg>
                  <h3 className="flex-1 text-xl font-medium text-slate-700">
                     Delete File?
                  </h3>
               </header>
               <div id="content-5a" className="flex-1 overflow-auto">
                  <p>After deleting the file, recovery will not be possible</p>
               </div>
               <div className="flex justify-start gap-2">
                  <button
                     onClick={handleDelete}
                     className="inline-flex items-center justify-center flex-1 h-10 gap-2 px-5 text-sm font-medium tracking-wide text-white transition duration-300 rounded whitespace-nowrap bg-indigo-500 hover:bg-indigo-600 focus:bg-indigo-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-indigo-300 disabled:bg-indigo-300 disabled:shadow-none"
                  >
                     <span>Yes, I&apos;m sure</span>
                  </button>
                  <button
                     onClick={closeModal}
                     className="inline-flex items-center justify-center flex-1 h-10 gap-2 px-5 text-sm font-medium tracking-wide transition duration-300 rounded justify-self-center whitespace-nowrap text-indigo-500 hover:bg-indigo-100 hover:text-indigo-600 focus:bg-indigo-200 focus:text-indigo-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:text-indigo-300 disabled:shadow-none disabled:hover:bg-transparent"
                  >
                     <span>Maybe not</span>
                  </button>
               </div>
            </div>
         </div>
      </>
   );
};

ConfirmationModal.propTypes = {
   closeModal: PropTypes.func.isRequired,
   handleDelete: PropTypes.func.isRequired,
};

export default ConfirmationModal;