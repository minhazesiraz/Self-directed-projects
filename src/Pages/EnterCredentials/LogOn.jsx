import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaFacebook, FaGithub, FaGoogle, FaMicrosoft, FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import useOAuth from "../../Hooks/useOAuth";
import useThemes from "../../Hooks/useThemes";


const LogOn = () => {
   const { theme } = useThemes();
   const { enterCredentials } = useOAuth();
   const navigate = useNavigate();
   const [showPassword, setShowPassword] = useState(false);


   const { register, handleSubmit, formState: { isValid } } = useForm({ mode: "onChange" });

   const onSubmit = (data) => {
      console.log(data);
      const email = data.email;
      const password = data.password;
      console.log(email, password);

      enterCredentials(email, password).then((userCredential) => {
         const user = userCredential.user;
         console.log(user);
         navigate('/');
      }).catch((error) => {
         const errorCode = error.code;
         const errorMessage = error.message;
         console.log(errorCode, errorMessage);
      })
   }

   return (
      <>
         <div className="container px-6 m-auto">
            <div className="grid grid-cols-4 gap-6 md:grid-cols-8 lg:grid-cols-12">
               <div className={`col-span-4 overflow-hidden rounded shadow-inherit shadow-md ring-1 ring-slate-800 ring-offset-slate-900 ring-offset-2 p-4 ${(theme === 'dark' || theme === 'default-dark') ? "bg-slate-800" : theme === 'warm' ? 'bg-warm' : ''}`}>

                  <div className="flex flex-col gap-y-2">
                     <span className="text-2xl">Log in to your account</span>
                     <strong>Don&apos;t have an account? <Link to="/create-an-account" className="text-green-400">Sign Up</Link></strong>
                     <div className="flex flex-col gap-y-2">
                        <button className="flex items-center border border-slate-400 rounded py-1 pr-1 ps-4 w-full hover:shadow-md hover:shadow-slate-500">
                           <FaGoogle />
                           <span className="ps-2">Google</span>
                        </button>
                        <button className="flex items-center border border-slate-400 rounded py-1 pr-1 ps-4 w-full hover:shadow-md hover:shadow-slate-500">
                           <FaMicrosoft />
                           <span className="ps-2">Microsoft</span>
                        </button>
                        <button className="flex items-center border border-slate-400 rounded py-1 pr-1 ps-4 w-full hover:shadow-md hover:shadow-slate-500">
                           <FaFacebook />
                           <span className="ps-2">Facebook</span>
                        </button>
                        <button className="flex items-center border border-slate-400 rounded py-1 pr-1 ps-4 w-full hover:shadow-md hover:shadow-slate-500">
                           <FaGithub />
                           <span className="ps-2">GitHub</span>
                        </button>
                     </div>
                  </div>

                  <div className="flex items-center text-sm pt-2">
                     <div className="flex-grow border-b border-slate-400"></div>
                     <span className="px-3">Or with email and password</span>
                     <div className="flex-grow border-b border-slate-400"></div>
                  </div>

                  <form onSubmit={handleSubmit(onSubmit)}>
                     {/*  <!-- Body--> */}
                     <div className="flex flex-col gap-y-6">

                        {/*      <!-- Input field : Email Address --> */}
                        <div className="relative mt-6">
                           <input
                              id="id-b03"
                              type="email"
                              name="id-b03"
                              placeholder="email address"
                              autoFocus
                              {...register("email", { required: true })}
                              className={`peer relative h-10 w-full rounded border border-slate-400 px-4 text-sm text-slate-500 placeholder-transparent outline-none transition-all autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-emerald-500 focus:outline-none invalid:focus:border-pink-500 disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400 ${(theme === 'dark' || theme === 'default-dark') ? 'bg-slate-800' : theme === 'warm' ? 'bg-yellow-300' : ''}
                              `}
                           />
                           <label
                              htmlFor="id-b03"
                              className="absolute left-2 -top-4 z-[2] px-2 text-xs text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-2] before:block before:h-full before:w-full before:bg-transparent before:transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-sm peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-invalid:text-pink-500 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-emerald-500 peer-invalid:peer-focus:text-pink-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent"
                           >
                              Email Address
                           </label>
                        </div>
                        {/*      <!-- Input field : Password --> */}
                        <div className="relative mb-6">
                           <input
                              id="id-b04"
                              type={showPassword ? "text" : "password"}
                              name="id-b04"
                              placeholder="password"
                              {...register("password", { required: true })}
                              className={`peer relative h-10 w-full rounded border border-slate-400 px-4 text-sm text-slate-500 placeholder-transparent outline-none transition-all autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-emerald-500 focus:outline-none invalid:focus:border-pink-500 disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400 ${(theme === 'dark' || theme === 'default-dark') ? 'bg-slate-800' : theme === 'warm' ? 'bg-yellow-300' : ''}`}
                           />
                           <label
                              htmlFor="id-b04"
                              className="absolute left-2 -top-4 z-[2] px-2 text-xs text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-2] before:block before:h-full before:w-full before:bg-transparent before:transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-sm peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-invalid:text-pink-500 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-emerald-500 peer-invalid:peer-focus:text-pink-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent"
                           >
                              Password
                           </label>
                           <span className="absolute top-2.5 right-4 h-5 w-5 cursor-pointer stroke-slate-400 peer-disabled:cursor-not-allowed" onClick={() => setShowPassword(!showPassword)}>
                              {showPassword ? <FaRegEye /> : <FaRegEyeSlash />}
                           </span>
                           <small className="absolute flex flex-col w-full justify-between px-4 py-1 text-xs text-slate-400 transition peer-invalid:text-pink-500">
                              <span><Link className="text-red-500">Forgot Password?</Link></span>
                           </small>
                        </div>
                     </div>
                     {/*  <!-- Action base sized basic button --> */}
                     <div className="flex justify-end mt-3">
                        <button className="inline-flex h-10 w-full items-center justify-center gap-2 whitespace-nowrap rounded bg-emerald-500 px-5 text-sm font-medium tracking-wide text-white transition duration-300 hover:bg-emerald-600 focus:bg-emerald-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-emerald-300 disabled:bg-emerald-300 disabled:shadow-none" disabled={!isValid}>
                           <span>Log in</span>
                        </button>
                     </div>
                  </form>

               </div>
               <div className="col-span-4 lg:col-span-8">Column 8/12</div>
            </div>
         </div>
      </>
   );
};

export default LogOn;