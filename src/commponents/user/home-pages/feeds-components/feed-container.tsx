import { ChangeEvent, FormEvent, useState } from "react";
import { useUserAddPostMutation } from "../../../../redux/features/api/apiSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Feed: React.FC = () => {
  const [postText, setPostText] = useState("");
  const [files, setFiles] = useState<File[]>([]);
  const [userAddPost] = useUserAddPostMutation();

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = Array.from(event.target.files || []);
    setFiles(selectedFiles);
  };
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // for using the form data
    const Data = new FormData();
    for (let i = 0; i < files.length; i++) {
      Data.append("image", files[i]);
    }
    Data.append("content", postText);

    console.log(Data, "formdataaaa", "post", postText, "img", files);
    if (postText == "" && files.length == 0) {
      toast("Add content !");
    } else {
      try {
        if (Data) {
          console.log("form data try block innnnnnnnnnnn", Data);
          // alert("add somethig to post");

          const res: any = await userAddPost(postText);
          console.log(res);
        }
      } catch (error) {
        console.log(error, "errorrrrrrrrrrrrrr");

        alert("add somethig to post");
      }
    }
  };

  // console.log(FormData);

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />

      <div >
        <div className=" py-5">

          <form onSubmit={handleSubmit}>
            <div className="rounded-md editor mx-auto w-12/12 flex flex-col text-gray-800 border border-gray-300 p-4 shadow-lg max-w-2xl">
              <textarea
                className="rounded-sm description bg-gray-100 sec p-1 h-30 border border-gray-300 outline-none"
                spellCheck={false}
                placeholder="Write some thing and post ...."
                value={postText}
                maxLength={350}
                style={{ maxHeight: "150px" }}
                onChange={(event) => setPostText(event.target.value)}
              ></textarea>

              <div className="icons flex text-gray-500 m-2">
                <label className="block">
                  <span className="sr-only">Choose profile photo</span>
                  {files.length > 0 && (
                    <div>
                      <h2>Selected Images:</h2>
                      {files.map((file, index) => (
                        <img
                          key={index}
                          src={URL.createObjectURL(file)}
                          alt={`Image ${index}`}
                        />
                      ))}
                    </div>
                  )}
                  <input
                    onChange={handleFileChange}
                    // multiple
                    type="file"
                    className="block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4                             file:rounded-full file:border-0 file:text-sm file:font-semibold                          file:bg-violet-50 file:text-violet-700                          hover:file:bg-violet-100"
                  />
                </label>
                {/* <div className="count ml-auto text-gray-400 text-xs font-semibold">
                0/300
              </div> */}
              </div>
              <div className="buttons flex">
                <button
                  type="submit"
                  className="btn border border-indigo-500 p-1 px-4 font-semibold cursor-pointer text-gray-200 ml-auto bg-indigo-500"
                >
                  Post
                </button>
              </div>
            </div>
          </form>
        </div>

        <div className="h-72 text-center bg-slate-500">
          <h1>cards</h1>
        </div>
        <div className="h-72 text-center">
          <h1>cards</h1>
        </div>
        <div className="h-72 text-center bg-slate-500">
          <h1>cards</h1>
        </div>
        <div className="h-72 text-center">
          <h1>cards</h1>
        </div>
        <div className="h-72 text-center bg-slate-500">
          <h1>cards</h1>
        </div>
        <div className="h-72 text-center">
          <h1>cards</h1>
        </div>
        <div className="h-72 text-center bg-slate-500">
          <h1>cards</h1>
        </div>
        <div className="h-72 text-center">
          <h1>cards</h1>
        </div>
        <div className="h-72 text-center bg-slate-500">
          <h1>cards</h1>
        </div>
        <div className="h-72 text-center">
          <h1>cards</h1>
        </div>
        <div className="h-72 text-center bg-slate-500">
          <h1>cards</h1>
        </div>
        <div className="h-72 text-center">
          <h1>cards</h1>
        </div>
      </div>
    </>
  );
};

export default Feed;
