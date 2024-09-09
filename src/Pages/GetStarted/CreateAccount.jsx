import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaFacebook, FaGithub, FaGoogle, FaMicrosoft, FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
import useOAuth from "../../Hooks/useOAuth";
import useThemes from "../../Hooks/useThemes";
import "./CreateAccount.css";

const CreateAccount = () => {
   const { theme } = useThemes();
   const { createUser } = useOAuth();
   const [showPassword, setShowPassword] = useState(false);

   const { register, handleSubmit, formState: { isValid } } = useForm({ mode: "onChange" });

   const onSubmit = (data) => {
      console.log(data);
      const name = data.first_name + ' ' + data.last_name;
      const email = data.email;
      const password = data.password;
      const agree = data.agree;
      console.log(name, email, password, agree);

      createUser(data.email, data.password)
         .then((userCredential) => {
            const user = userCredential.user;
            console.log(user);
            console.log(user.metadata.creationTime);

            // updateUserProfile(name).then(() => {
            //    // Profile updated!

            //    const userDetails = {
            //       name: name,
            //       email: email,
            //       lastSignInTime: user.metadata.lastSignInTime,
            //       creationTime: user.metadata.creationTime
            //    }

            //    decrypted.post("/users", userDetails).then((res) => {
            //       if (res.data.insertedId) {
            //          console.log("User profile info updated.")
            //       }
            //    }).catch((error) => {
            //       console.log(error);
            //    })

            // }).catch((error) => {
            //    console.log(error);
            // });
         })
         .catch((error) => {
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
                     <span className="text-2xl">Create your account</span>
                     <strong>Have an account? <Link to="/log-in" className="text-green-400">Log in now</Link></strong>
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
                        {/*      <!-- Input field : First Name --> */}
                        <div className="relative mt-6">
                           <input
                              id="id-b01"
                              type="text"
                              name="id-b01"
                              placeholder="first name"
                              autoFocus
                              {...register("first_name", { required: true })}
                              className={`peer relative h-10 w-full rounded border border-slate-400 px-4 text-sm text-slate-500 placeholder-transparent outline-none transition-all autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-emerald-500 focus:outline-none invalid:focus:border-pink-500 disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400 ${(theme === 'dark' || theme === 'default-dark') ? 'bg-slate-800' : theme === 'warm' ? 'bg-yellow-300' : ''}`}
                           />
                           <label
                              htmlFor="id-b01"
                              className="absolute left-2 -top-4 z-[2] px-2 text-xs text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-2] before:block before:h-full before:w-full before:bg-transparent before:transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-sm peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-invalid:text-pink-500 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-emerald-500 peer-invalid:peer-focus:text-pink-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent"
                           >
                              First Name
                           </label>
                        </div>
                        {/*      <!-- Input field : Last Name --> */}
                        <div className="relative">
                           <input
                              id="id-b02"
                              type="text"
                              name="id-b02"
                              placeholder="last name"
                              {...register("last_name", { required: true })}
                              className={`peer relative h-10 w-full rounded border border-slate-400 px-4 text-sm text-slate-500 placeholder-transparent outline-none transition-all autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-emerald-500 focus:outline-none invalid:focus:border-pink-500 disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400 ${(theme === 'dark' || theme === 'default-dark') ? 'bg-slate-800' : theme === 'warm' ? 'bg-yellow-300' : ''}`}
                           />
                           <label
                              htmlFor="id-b02"
                              className="absolute left-2 -top-4 z-[2] px-2 text-xs text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-2] before:block before:h-full before:w-full before:bg-transparent before:transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-sm peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-invalid:text-pink-500 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-emerald-500 peer-invalid:peer-focus:text-pink-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent"
                           >
                              Last Name
                           </label>
                        </div>
                        {/*      <!-- Input field : Email Address --> */}
                        <div className="relative">
                           <input
                              id="id-b03"
                              type="email"
                              name="id-b03"
                              placeholder="email address"
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
                           <small className="absolute flex w-full justify-between px-4 py-1 text-xs text-slate-400 transition peer-invalid:text-pink-500 font-semibold">
                              <span>We recommend using your work email</span>
                           </small>
                        </div>
                        {/*      <!-- Input field : Password --> */}
                        <div className="relative mt-3 mb-6">
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
                              <span>Must be at least 8 characters</span>
                              <span>Does not contain your email address</span>
                           </small>
                        </div>

                        <div className="text-xs tracking-tight">
                           <label className="flex items-center space-x-2">
                              <input
                                 type="checkbox"
                                 name="agree"
                                 id="agree"
                                 {...register("agree", { required: true })}
                              />
                              <span>I accept the <Link className="text-green-400">Privacy Policy</Link> and the <Link className="text-green-400">Terms of Service</Link></span>
                           </label>
                        </div>
                     </div>
                     {/*  <!-- Action base sized basic button --> */}
                     <div className="flex justify-end mt-3">
                        <button className="inline-flex h-10 w-full items-center justify-center gap-2 whitespace-nowrap rounded bg-emerald-500 px-5 text-sm font-medium tracking-wide text-white transition duration-300 hover:bg-emerald-600 focus:bg-emerald-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-emerald-300 disabled:bg-emerald-300 disabled:shadow-none" disabled={!isValid}>
                           <span>Create Account</span>
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

export default CreateAccount;