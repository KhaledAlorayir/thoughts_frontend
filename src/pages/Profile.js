import React, { useEffect } from "react";
import BasicInformation from "../components/BasicInformation";
import ProfileInformation from "../components/ProfileInformation";
import Loading from "../components/Loading";
import { useSelector, useDispatch } from "react-redux";
import { getMyProfile } from "../actions/user";

const Profile = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMyProfile());
  }, [dispatch]);

  const { user, isAuth, profile, isLoading } = useSelector(
    (state) => state.user
  );

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      {isAuth && (
        <div className="h-full pt-20 px-3 md:px-24 xl:px-80 bg-slate-300">
          <div className="mt-8">
            <h3 className="text-4xl text-teal-600 font-semibold mb-5">
              Dashboard
            </h3>
            <h4 className="text-2xl">Welcome {user.name}!</h4>
          </div>
          <BasicInformation
            name={user.name}
            email={user.email}
            avatar={user.avatar}
            createdate={user.date}
          />
          {profile && (
            <ProfileInformation
              bio={profile.bio}
              soical={profile.social}
              location={profile.location}
            />
          )}
        </div>
      )}
    </>
  );
};

export default Profile;
