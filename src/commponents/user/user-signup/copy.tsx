<div>
<label
  className="block mb-1 font-bold text-gray-700"
  htmlFor="firstname"
>
  First Name
</label>
<input
  className="w-full px-3 py-2 border rounded text-gray-700 focus:outline-none focus:border-blue-500"
  id="firstname"
  type="text"
  name="firstname"
  required
  // value={userSignUpData.firstName}
  // onChange={(e) =>
  //   setUserSignUpData({
  //     ...userSignUpData,
  //     firstName: e.target.value,
  //   })
  // }
/>
</div>
<div>
<label
  className="block mb-1 font-bold text-gray-700"
  htmlFor="lastname"
>
  Last Name
</label>
<input
  className="w-full px-3 py-2 border rounded text-gray-700 focus:outline-none focus:border-blue-500"
  id="lastname"
  type="text"
  name="lastname"
  required
  // value={userSignUpData.lastName}
  // onChange={(e) =>
  //   setUserSignUpData({
  //     ...userSignUpData,
  //     lastName: e.target.value,
  //   })
  // }
/>
</div>
<div>
<label
  className="block mb-1 font-bold text-gray-700"
  htmlFor="email"
>
  Email Address
</label>
<input
  className="w-full px-3 py-2 border rounded text-gray-700 focus:outline-none focus:border-blue-500"
  id="email"
  type="email"
  name="email"
  required
  // onChange={(e) =>
  //   setUserSignUpData({
  //     ...userSignUpData,
  //     email: e.target.value,
  //   })
  // }
/>
</div>
<div>
<label
  className="block mb-1 font-bold text-gray-700"
  htmlFor="phone"
>
  Phone Number
</label>
<input
  className="w-full px-3 py-2 border rounded text-gray-700 focus:outline-none focus:border-blue-500"
  id="phone"
  type="number"
  name="phone"
  required
  // onChange={(e) =>
  //   setUserSignUpData({
  //     ...userSignUpData,
  //     phoneNumber: e.target.value,
  //   })
  // }
/>
</div>
<div>
<label
  className="block mb-1 font-bold text-gray-700"
  htmlFor="username"
>
  Username
</label>
<input
  className="w-full px-3 py-2 border rounded text-gray-700 focus:outline-none focus:border-blue-500"
  id="username"
  type="text"
  name="username"
  required
  // value={userSignUpData.userName}
  // onChange={(e) =>
  //   setUserSignUpData({
  //     ...userSignUpData,
  //     userName: e.target.value,
  //   })
  // }
/>
</div>
<div>
<label
  className="block mb-1 font-bold text-gray-700"
  htmlFor="password"
>
  Password
</label>
<input
  className="w-full px-3 py-2 border rounded text-gray-700 focus:outline-none focus:border-blue-500"
  id="password"
  type="password"
  name="password"
  required
  // onChange={(e) =>
  //   setUserSignUpData({
  //     ...userSignUpData,
  //     password: e.target.value,
  //   })
  // }
/>
</div>
{/* <div>
<label
  className="block mb-1 font-bold text-gray-700"
  htmlFor="confirm_password"
>
  Confirm Password
</label>
<input
  className="w-full px-3 py-2 border rounded text-gray-700 focus:outline-none focus:border-blue-500"
  id="confirm_password"
  type="password"
  name="confirm_password"
  required
/>
</div> */}
<div>
<button className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:border-blue-500">
  Sign Up
</button>
</div>
<div>
<Link to={"/login"}>
  <p className="pb-lg-2" style={{ color: "#393f81" }}>
    Login to your account <a style={{ color: "#393f81" }}></a>
  </p>
</Link>
</div>

{/* <div className="flex items-center justify-center space-x-4 mt-4">
<button
  className="bg-red-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:border-blue-500"
  onClick={helperSignupwithGoogle}
>
  Sign up with Google
</button>
<button
  className="bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:border-blue-500"
  onClick={helperSignupwithFaceBook}
>
  Sign up with Facebook
</button>
</div> */}



































function 




  // const handleSignup = async (event: React.FormEvent<HTMLFormElement>) => {
  //   event.preventDefault();

  //   console.log(userSignUpData);

  //   let errorMessage: any;
  //   try {
  //     if (userSignUpData) {
  // const res = await UserSignup(userSignUpData).unwrap();
  // console.log("response", res.status);
  // if (res.status == "success") {
  //   // console.log("user account created :: success");
  //   navigate("/login");
  // }
  //     }
  //   } catch (error: any) {
  //     // console.log(error?.status);
  //     // if (error && error?.status) {
  //     // console.log(error?.data);
  //     const html = error?.data;

  //     const regex = /Error: (.*)<br>/;
  //     const match = regex.exec(html);
  //     errorMessage = match ? match[1] : "";

  //     console.log(errorMessage);
  //   }
  // };

















  gender







   {/* <div className="mb-6">
            <label htmlFor="email" className="block mb-2 text-sm font-medium">
              Gender
            </label>
            <div className="flex ">
              <div className="mb-[0.125rem] mr-4 inline-block min-h-[1.5rem] pl-[1.5rem]">
                <input
                  className="relative float-left -ml-[1.5rem] mr-1 mt-0.5 h-5 w-5 appearance-none rounded-full border-2 border-solid border-neutral-300 before:pointer-events-none before:absolute before:h-4 before:w-4 before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] after:absolute after:z-[1] after:block after:h-4 after:w-4 after:rounded-full after:content-[''] checked:border-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:h-[0.625rem] checked:after:w-[0.625rem] checked:after:rounded-full checked:after:border-primary checked:after:bg-primary checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:border-primary checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:border-neutral-600 dark:checked:border-primary dark:checked:after:border-primary dark:checked:after:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:border-primary dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
                  type="radio"
                  name="inlineRadioOptions"
                  id="inlineRadio1"
                  value="option1"
                />
                <label
                  className="mt-px inline-block pl-[0.15rem] hover:cursor-pointer"
                  htmlFor="inlineRadio1"
                >
                  Male
                </label>
              </div>

              <div className="mb-[0.125rem] mr-4 inline-block min-h-[1.5rem] pl-[1.5rem]">
                <input
                  className="relative float-left -ml-[1.5rem] mr-1 mt-0.5 h-5 w-5 appearance-none rounded-full border-2 border-solid border-neutral-300 before:pointer-events-none before:absolute before:h-4 before:w-4 before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] after:absolute after:z-[1] after:block after:h-4 after:w-4 after:rounded-full after:content-[''] checked:border-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:h-[0.625rem] checked:after:w-[0.625rem] checked:after:rounded-full checked:after:border-primary checked:after:bg-primary checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:border-primary checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:border-neutral-600 dark:checked:border-primary dark:checked:after:border-primary dark:checked:after:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:border-primary dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
                  type="radio"
                  name="inlineRadioOptions"
                  id="inlineRadio2"
                  value="option2"
                />
                <label
                  className="mt-px inline-block pl-[0.15rem] hover:cursor-pointer"
                  htmlFor="inlineRadio2"
                >
                  Female
                </label>
              </div>
              <div className="mb-[0.125rem] mr-4 inline-block min-h-[1.5rem] pl-[1.5rem]">
                <input
                  className="relative float-left -ml-[1.5rem] mr-1 mt-0.5 h-5 w-5 appearance-none rounded-full border-2 border-solid border-neutral-300 before:pointer-events-none before:absolute before:h-4 before:w-4 before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] after:absolute after:z-[1] after:block after:h-4 after:w-4 after:rounded-full after:content-[''] checked:border-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:h-[0.625rem] checked:after:w-[0.625rem] checked:after:rounded-full checked:after:border-primary checked:after:bg-primary checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:border-primary checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:border-neutral-600 dark:checked:border-primary dark:checked:after:border-primary dark:checked:after:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:border-primary dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
                  type="radio"
                  name="inlineRadioOptions"
                  id="inlineRadio2"
                  value="option2"
                />
                <label
                  className="mt-px inline-block pl-[0.15rem] hover:cursor-pointer"
                  htmlFor="inlineRadio2"
                >
                  Other
                </label>
              </div>
            </div>
          </div> */}