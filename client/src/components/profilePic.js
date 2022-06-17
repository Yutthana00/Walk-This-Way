import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_PROFILE_PIC } from "../utils/mutations";
//import { useNavigate } from "react-router-dom";

// image is converted to a string
const convertImageToBase64 = (file) => {
  return new Promise((resolve, reject) => {
    // create new file reader for image
    const fileReader = new FileReader();

    fileReader.readAsDataURL(file);

    // set callbacks for promise
    fileReader.onload = () => {
      resolve(fileReader.result);
    };
    fileReader.onerror = (error) => {
      reject(error);
    };
  });
};

const INITIAL_FORM_STATE = { image: "" };

const ProfilePic = ({ setIsProfilePicVisible, refetchUsers }) => {
  const [userFormData, setUserFormData] = useState(INITIAL_FORM_STATE);

  const [addProfilePic, { error }] = useMutation(ADD_PROFILE_PIC);

  if (error) console.log(error);

  //upload file and convert to base64 - this is then uploaded to Cloudinary by the back end
  const handleInputChange = async (event) => {
    const { name } = event.target;
    if (name === "image") {
      const base64Image = await convertImageToBase64(event.target.files[0]);

      const imageDataObject = {
        //show preview of photo to be uploaded
        preview: URL.createObjectURL(event.target.files[0]),
        data: base64Image,
      };

      setUserFormData({ image: imageDataObject });
      return;
    }
  };
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      // user is updated by adding profile picture
      await addProfilePic({
        variables: { profilePic: userFormData?.image?.data || "" },
      });
      setUserFormData(INITIAL_FORM_STATE);
      refetchUsers();

      setIsProfilePicVisible(false);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <div className="form-inner">
          <h2>Add a profile picture</h2>
          <div className="form-group">
            <label htmlFor="name">Image</label>
            {userFormData?.image?.preview && (
              <img
                src={userFormData?.image?.preview}
                alt="preview"
                width="100"
                height="100"
              />
            )}
            <input
              type="file"
              id="image"
              name="image"
              onChange={handleInputChange}
            />
            <input
              className="form-btn"
              type="submit"
              value="Upload Image"
              name="submit"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default ProfilePic;
