import React from "react";
import "./OnBoarding.css";
// import Nav from "../../components/Nav";
import { useState, useEffect } from "react";
// import { storage } from "../../firebase";
// import { ref, uploadBytes, getDownloadURL, listAll } from "firebase/storage";

function OnBoarding({ authToken, setShowModal, showModal, setIsSignUp }) {
  // const [imageUpload, setImageUpload] = useState(null);
  // const [imageUrls, setImageUrls] = useState([]);
  // const imagesListRef = ref(storage, "images/");
  // // --------------------upload photo function----------------------
  // const uploadFile = () => {
  //   if (imageUpload == null) return;

  //   const imageRef = ref(storage, `images/${imageUpload.name}`);

  //   uploadBytes(imageRef, imageUpload).then((snapshot) => {
  //     getDownloadURL(snapshot.ref).then((url) => {
  //       setImageUrls((prev) => [...prev, url]);
  //     });
  //   });
  // };
  // //-------------- Lấy dữ liệu trả về từ firebase---------------------
  // useEffect(() => {
  //   listAll(imagesListRef).then((res) => {
  //     res.items.forEach((item) => {
  //       getDownloadURL(item).then((url) => {
  //         setImageUrls((prev) => [...prev, url]);
  //       });
  //     });
  //   });
  // }, []);
  // -------------------------------submit form------------------------------------------
  const [formData, setFormData] = useState({
    id: "",
    first_name: "",
    dob_day: "",
    dob_month: "",
    dob_year: "",
    show_gender: false,
    gender_identity: "man",
    gender_interest: "woman",
    email: "",
    url1: "",
    url2: "",
    url3: "",
    about: "",
    matches: [],
  });

  const handleSubmit = () => {
    console.log("submited");
  };
  const handleChange = (e) => {
    console.log("clicked");
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    const name = e.target.name;

    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // const handleChangePhoto = (e) => {
  //   setImageUpload(e.target.files[0]);
  // };

  return (
    <>
      {/* <Nav setShowModal={() => {}} showModal={false} /> */}
      <div className="onboarding">
        <h1>Tell us more about you!</h1>
        <form onSubmit={handleSubmit}>
          <section>
            <label className="label-title" htmlFor="first_name">
              First Name
            </label>
            <input
              type="text"
              id="first_name"
              name="first_name"
              placeholder="First Name"
              required={true}
              value={formData.first_name}
              onChange={handleChange}
            />

            {/* ---------------------------------DOB------------------------------------ */}
            <div className="multiple-input-conatainer">
              <label className="label-title" htmlFor="dob_day">
                Birthday:
              </label>
              <input
                type="number"
                id="dob_day"
                name="dob_day"
                placeholder="DD"
                required={true}
                value={formData.dob_day}
                className="dob"
                onChange={handleChange}
              />
              <input
                type="number"
                id="dob_month"
                name="dob_month"
                placeholder="MM"
                required={true}
                value={formData.dob_month}
                className="dob"
                onChange={handleChange}
              />
              <input
                type="number"
                id="dob_year"
                name="dob_year"
                placeholder="YYYY"
                required={true}
                value={formData.dob_year}
                className="dob"
                onChange={handleChange}
              />
              <br />
              {/* -----------------------------gender---------------------------------- */}
              <div className="multiple-input-conatainer">
                <label className="label-title" htmlFor="gender">
                  Gender:
                </label>
                <input
                  type="radio"
                  id="man-gender-identity"
                  name="gender_identity"
                  value="man"
                  onChange={handleChange}
                  checked={formData.gender_identity === "man"}
                />
                <label className="radio-title" htmlFor="man-gender-identity">
                  Man
                </label>
                <input
                  type="radio"
                  id="woman-gender-identity"
                  name="gender_identity"
                  value="woman"
                  onChange={handleChange}
                  checked={formData.gender_identity === "woman"}
                />
                <label className="radio-title" htmlFor="woman-gender-identity">
                  Woman
                </label>
                <input
                  type="radio"
                  id="more-gender-identity"
                  name="gender_identity"
                  value="more"
                  onChange={handleChange}
                  checked={formData.gender_identity === "more"}
                />
                <label className="radio-title" htmlFor="more-gender-identity">
                  More
                </label>
              </div>
              {/* ------------------------------------show gender-------------------------------------------- */}
              <input
                type="checkbox"
                id="show_gender"
                name="show_gender"
                onChange={handleChange}
                checked={formData.show_gender}
              />
              <label htmlFor="show-gender">Show gender on my profile</label>{" "}
              <br />
              {/* ---------------------------------------------------------------------- */}
              <div className="multiple-input-conatainer">
                <label className="label-title">Show me:</label>
                <input
                  type="radio"
                  id="man-gender-interest"
                  name="gender_interest"
                  value="man"
                  onChange={handleChange}
                  checked={formData.gender_interest === "man"}
                />
                <label className="radio-title" htmlFor="man-gender-interest">
                  Man
                </label>
                <input
                  type="radio"
                  id="woman-gender-interest"
                  name="gender_interest"
                  value="woman"
                  onChange={handleChange}
                  checked={formData.gender_interest === "woman"}
                />
                <label className="radio-title" htmlFor="woman-gender-interest">
                  Woman
                </label>
                <input
                  type="radio"
                  id="everyone-gender-interest"
                  name="gender_interest"
                  value="everyone"
                  onChange={handleChange}
                  checked={formData.gender_interest === "everyone"}
                />
                <label
                  className="radio-title"
                  htmlFor="everyone-gender-interest"
                >
                  Everyone
                </label>

                {/* --------------------------------About me--------------------------------- */}
                <textarea
                  type="text"
                  id="about"
                  name="about"
                  placeholder="I like..."
                  required={true}
                  value={formData.about}
                  cols={65}
                  rows={10}
                  onChange={handleChange}
                />
              </div>
            </div>
            <input id="submit" type="submit" />
          </section>
          {/* ---------------------------------right side (photo)------------------------------------ */}
          <section>
            <div>
              <label className="label-title" htmlFor="photo">
                Profile Photo:
              </label>
              <input
                type="file"
                name="url"
                id="url"
                value={formData.url1}
                required={true}
                // onChange={handleChangePhoto}
              />
              <button> Upload Image</button>
              {/* onClick={uploadFile} */}
            </div>
            <div className="Photo-field">
              <div className="photo-container">
                {/* {imageUrls.map((url, index) => {
                  return <img key={index} className="pic" src={url} />;
                })} */}
              </div>
            </div>
          </section>
        </form>
      </div>
    </>
  );
}

export default OnBoarding;
