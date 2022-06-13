//import { Cloudinary } from "cloudinary-core";
import React, { useState } from "react";

const ImageUpload = () => {
  const [fileData, setFileData] = useState("");
  const [images, setFile] = useState("");

  const handleFileChange = ({ target }) => {
    setFileData(target.files[0]);
    setFile(target.value);

    return (
      <form>
        <CustomInput
          type="file"
          name="file"
          accept="image/*"
          onChange={handleFileChange}
          placeholder="upload image"
          isRequired={true}
        />
      </form>
    );
  };
};

//var cl = new cloudinary.Cloudinary({ cloud_name: "drrjnrjac", secure: true });

export default ImageUpload;
