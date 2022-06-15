import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { CREATE_POST } from "../utils/mutations";
import { useAuthContext } from "../utils/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
//import auth from "../utils/auth";

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

const INITIAL_FORM_STATE = {
  image: "",
  location: "",
  author: "",
  website: "",
  distance: 0,
  description: "",
};

const PostForm = () => {
  // Hooks need to be in a position where they can load in the same order everytime

  const auth = useAuthContext();
  const navigate = useNavigate();
  const [userFormData, setUserFormData] = useState(INITIAL_FORM_STATE);
  const [error, setError] = useState("");

  const [createPost, { error: apiError }] = useMutation(CREATE_POST);

  if (error) console.log(error);

  const handleInputChange = async (event) => {
    const { name, value } = event.target;

    if (name === "image") {
      const base64Image = await convertImageToBase64(event.target.files[0]);

      const imageDataObject = {
        preview: URL.createObjectURL(event.target.files[0]),
        data: base64Image,
      };

      setUserFormData({ ...userFormData, image: imageDataObject });
      return;
    }

    setUserFormData({ ...userFormData, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const parsedDistance = parseInt(userFormData.distance);

      if (!parsedDistance || isNaN(parsedDistance)) {
        setError("Distance must be a number!");
        return;
      }

      const dataToSubmit = {
        ...userFormData,
        author: auth.getProfile().data.username,
        distance: parsedDistance,
        image: userFormData?.image?.data || "",
      };

      setError("");

      await createPost({
        variables: { postData: dataToSubmit },
      });

      setUserFormData(INITIAL_FORM_STATE);
      // When done, programmatically navigate the user to the homepage
      navigate("/");
    } catch (error) {
      console.error(error);

      if (error.message === "Image size is too big") {
        setError("The image you uploaded is too big, try again");
      }
    }
  };
  return (
    <>
      <form onSubmit={handleFormSubmit}>
        <div className="form-inner">
          <h2>Post Your Hike!</h2>

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
            <input type="submit" value="Upload Image" name="submit" />
          </div>

          <div className="form-group">
            <label htmlFor="name">Location</label>
            <input
              id="location"
              name="location"
              value={userFormData.location}
              onChange={handleInputChange}
              type="text"
              placeholder="location"
            />
          </div>

          <div className="form-group">
            <label htmlFor="name">Route</label>
            <input
              id="website"
              name="website"
              value={userFormData.website}
              onChange={handleInputChange}
              type="text"
              placeholder="post a route URL here"
            />
          </div>

          <div className="form-group">
            <label htmlFor="name">Distance</label>
            <input
              id="distance"
              name="distance"
              value={userFormData.distance}
              onChange={handleInputChange}
              type="number"
              placeholder="miles/kms"
            />
          </div>

          <div className="form-group">
            <label htmlFor="name">Description</label>
            <input
              id="description"
              name="description"
              value={userFormData.description}
              onChange={handleInputChange}
              type="text"
              placeholder="post a description of your hike here"
            />
          </div>
          {error && <p>{error}</p>}
          {apiError && <p>Something has gone wrong with the server!</p>}
          <input className="form-btn" type="submit" value="post" />
        </div>
      </form>
      <Link to={"/"}>
        <button> Go Back </button>
      </Link>
    </>
  );
};

export default PostForm;
