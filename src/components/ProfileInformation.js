import React, { useState, useEffect } from "react";
import { BiEditAlt } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { UpdateProfile } from "../actions/user";

const ProfileInformation = ({ bio, soical, location }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [ProfileData, setProfileData] = useState({
    bio,
    location,
    soical,
  });

  const ChangeHandler = (e) => {
    setProfileData((state) => ({ ...state, [e.target.name]: e.target.value }));
  };

  useEffect(() => {
    setProfileData({
      bio,
      location,
      soical,
    });
  }, [isEdit]);

  const dispatch = useDispatch();

  const SubmitHandler = () => {
    dispatch(UpdateProfile(ProfileData));
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
        <div>
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
      </div>
    </div>
  );
};

export default ProfileInformation;
