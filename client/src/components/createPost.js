import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { CREATE_POST } from "../utils/mutations";
import { useAuthContext } from "../utils/AuthProvider";
//import auth from "../utils/auth";
const INITIAL_FORM_STATE = {
  image: "",
  location: "",
  author: "",
  website: "",
  distance: 0,
  description: "",
};

const PostForm = () => {
  const auth = useAuthContext();
  const [userFormData, setUserFormData] = useState(INITIAL_FORM_STATE);
  const [error, setError] = useState("");

  const [createPost, { error: apiError }] = useMutation(CREATE_POST);

  if (error) console.log(error);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
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
      };

      setError("");

      const { data } = await createPost({
        variables: { postData: dataToSubmit },
      });

      setUserFormData(INITIAL_FORM_STATE);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <form onSubmit={handleFormSubmit}>
      <div className="form-inner">
        <h2>Post Your Hike!</h2>

        <div className="form-group">
          <label htmlFor="name">Image</label>
          <input
            id="image"
            name="image"
            value={userFormData.image}
            onChange={handleInputChange}
            type="text"
            placeholder="upload your image here"
          />
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
  );
};

export default PostForm;
