import React, { useState, useEffect } from "react";
import { BiEditAlt } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { UpdateProfile } from "../actions/user";
import InputField from "./InputField";
import {
  AiFillYoutube,
  AiFillTwitterCircle,
  AiFillFacebook,
  AiFillInstagram,
} from "react-icons/ai";

const ProfileInformation = ({ bio, social, location }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [ProfileData, setProfileData] = useState({
    bio,
    location,
  });

  const [SoicalData, setSoicalData] = useState(
    social ? social : { twitter: "", instagram: "", youtube: "", facebook: "" }
  );

  const ChangeHandler = (e) => {
    setProfileData((state) => ({ ...state, [e.target.name]: e.target.value }));
  };

  useEffect(() => {
    setProfileData({
      bio,
      location,
    });
    setSoicalData(
      social
        ? social
        : { twitter: "", instagram: "", youtube: "", facebook: "" }
    );
  }, [isEdit]);

  const dispatch = useDispatch();

  const SubmitHandler = () => {
    dispatch(UpdateProfile({ ...ProfileData, social: { ...SoicalData } }));
  };

  return (
    <div className="mt-20 ">
      <div className="flex items-center justify-between text-xl text-teal-600 mb-5">
        <h5 className="font-semibold">Profile</h5>
        <div className="flex items-center gap-5">
          {isEdit && (
            <button
              onClick={SubmitHandler}
              className="bg-teal-600 text-base text-slate-100 p-2 rounded hover:bg-teal-500 transition-all"
            >
              SAVE
            </button>
          )}
          <button
            onClick={() => setIsEdit((state) => !state)}
            className="text-2xl hover:text-teal-400 transition-all "
          >
            <BiEditAlt />
          </button>
        </div>
      </div>
      <div className="bg-slate-400 rounded px-5 py-2">
        <div className="mb-8">
          <p className="text-lg font-mono font-medium mb-2">Bio:</p>
          {!isEdit ? (
            <p className="text-slate-800">{bio}</p>
          ) : (
            <textarea
              value={ProfileData.bio}
              name="bio"
              onChange={ChangeHandler}
              className="w-full p-2 rounded focus:outline-none border-teal-600 resize-none focus:border-[1px] font-medium bg-gray-50"
            ></textarea>
          )}
        </div>
        <div className="mb-8">
          <p className="text-lg font-mono font-medium mb-2">Location:</p>
          {!isEdit ? (
            <p className="text-slate-800">{location}</p>
          ) : (
            <InputField
              name="location"
              onChange={ChangeHandler}
              state={ProfileData.location}
            />
          )}
        </div>
        <SoicalContiner
          social={social}
          isEdit={isEdit}
          SoicalData={SoicalData}
          setSoicalData={setSoicalData}
        />
      </div>
    </div>
  );
};

const SoicalContiner = ({ social, isEdit, SoicalData, setSoicalData }) => {
  const ChangeHandler = (e) => {
    setSoicalData((state) => ({
      ...state,
      [e.target.name]: e.target.value,
    }));
  };

  if (!isEdit) {
    return (
      <>
        {social && (
          <div className="mb-8">
            <p className="text-lg font-mono font-medium mb-5">Soical:</p>
            <ul className="flex text-5xl md:text-6xl items-center justify-around">
              {social?.twitter && (
                <li className="hover:text-teal-600 transition-all">
                  <a href={social.twitter} target="_blank" rel="noreferrer">
                    <AiFillTwitterCircle />
                  </a>
                </li>
              )}
              {social?.instagram && (
                <li className="hover:text-teal-600 transition-all">
                  <a href={social.instagram} target="_blank" rel="noreferrer">
                    <AiFillInstagram />
                  </a>
                </li>
              )}
              {social?.youtube && (
                <li className="hover:text-teal-600 transition-all">
                  <a href={social.youtube} target="_blank" rel="noreferrer">
                    <AiFillYoutube />
                  </a>
                </li>
              )}
              {social?.facebook && (
                <li className="hover:text-teal-600 transition-all">
                  <a href={social.facebook} target="_blank" rel="noreferrer">
                    <AiFillFacebook />
                  </a>
                </li>
              )}
            </ul>
          </div>
        )}
      </>
    );
  }
  return (
    <div className="mb-8">
      <p className="text-lg font-mono font-medium mb-5">Soical:</p>

      <InputField
        holder="Twitter"
        state={SoicalData.twitter}
        name="twitter"
        onChange={ChangeHandler}
      />
      <InputField
        name="instagram"
        holder="Instagram"
        state={SoicalData.instagram}
        onChange={ChangeHandler}
      />
      <InputField
        name="youtube"
        holder="Youtube"
        onChange={ChangeHandler}
        state={SoicalData.youtube}
      />
      <InputField
        name="facebook"
        holder="Facebook"
        state={SoicalData.facebook}
        onChange={ChangeHandler}
      />
    </div>
  );
};

export default ProfileInformation;
