

import React, { useState, useRef } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import AvatarEditor from "react-avatar-editor";

const EditProfile: React.FC = () => {
  const [image, setImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [scale, setScale] = useState<number>(1);
  const editorRef = useRef<any>(null); // Ref to the AvatarEditor component

  // Define the initial form values
  const initialValues = {
    username: "arjun",
    firstName: "Arjun",
    lastName: "Raj",
    phoneNumber: "7510746862",
    email: "arjunraj046@gmail.com",
  };

  // Define the validation schema using Yup
  const validationSchema = Yup.object().shape({
    username: Yup.string().required("Username is required"),
    firstName: Yup.string().required("First Name is required"),
    lastName: Yup.string().required("Last Name is required"),
    phoneNumber: Yup.string().required("Phone Number is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
  });

  // Formik form submission and validation
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      // Implement your logic to save the edited profile data here
      // You can make API requests or dispatch Redux actions to save the data
      console.log("Form data submitted:", values);
      alert("Profile updated successfully!");
    },
  });

  // Handle image change and set image preview
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = (event) => {
        if (event.target && event.target.result) {
          setImage(file);
          setImagePreview(event.target.result as string);
        }
      };

      reader.readAsDataURL(file);
    }
  };

  // Handle scaling of the image
  const handleScaleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setScale(parseFloat(e.target.value));
  };

  // Handle cropping and getting the cropped image
  const handleCrop = () => {
    if (editorRef.current) {
      const canvas = editorRef.current.getImageScaledToCanvas();
      const croppedImage = canvas.toDataURL("image/jpeg"); // You can change the format if needed
      console.log("Cropped image:", croppedImage);

      // Now you can use the 'croppedImage' as needed, such as uploading it to a server
    }
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-lg">
      <h1 className="text-2xl font-semibold mb-4">Edit Profile</h1>
      <form onSubmit={formik.handleSubmit}>
        <div className="mb-4 text-center">
          {imagePreview && (
            <AvatarEditor
              ref={editorRef}
              image={imagePreview}
              width={200}
              height={200}
              border={10}
              borderRadius={100}
              scale={scale}
            />
          )}
          <input
            type="range"
            min="1"
            max="2"
            step="0.01"
            value={scale}
            onChange={handleScaleChange}
          />
          <label className="cursor-pointer bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
            Choose File
            <input
              type="file"
              accept="image/*"
              onChange={(e) => {
                formik.setFieldValue("profileImage", e.currentTarget.files?.[0]);
                handleImageChange(e);
              }}
              className="hidden"
            />
          </label>
        </div>

        {/* ... (rest of the form fields) */}

        <div className="mt-6 text-center">
          <button
            type="button"
            onClick={handleCrop}
            className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 mr-4"
          >
            Crop & Save
          </button>
          <button
            type="button"
            onClick={formik.handleReset}
            className="bg-red-500 text-white px-6 py-3 rounded-lg hover:bg-red-600"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditProfile;
