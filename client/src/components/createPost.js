import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { CREATE_POST } from "../utils/mutations";
//import auth from "../utils/auth";

const PostForm = () => {
  const [userFormData, setUserFormData] = useState({
    image: "",
    location: "",
    website: "",
    distance: "",
    description: "",
  });

  const [createPost, { error }] = useMutation(CREATE_POST);

  if (error) console.log(error);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserFormData({ ...userFormData, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await createPost({
        variables: { ...userFormData },
      });
    } catch (error) {
      console.error(error);
    }
    setUserFormData({
      image: "",
      location: "",
      website: "",
      distance: "",
      description: "",
    });
  };
  return (
    <form>
      <form>
        <div className="form-inner">
          <h2>Post Your Hike!</h2>

          <div className="form-group">
            <label htmlFor="name">Image</label>
            <input
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
              name="distance"
              value={userFormData.distance}
              onChange={handleInputChange}
              type="text"
              placeholder="miles/kms"
            />
          </div>

          <div className="form-group">
            <label htmlFor="name">Description</label>
            <input
              name="description"
              value={userFormData.description}
              onChange={handleInputChange}
              type="text"
              placeholder="post a description of your hike here"
            />
          </div>

          <button className="form-btn" onClick={handleFormSubmit}>
            Post
          </button>
        </div>
      </form>
    </form>
  );
};

export default PostForm;
