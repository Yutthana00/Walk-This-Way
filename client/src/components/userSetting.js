const UserSetting = ({ user }) => {
  return (
    <div>
      <img
        src={user.profilePic}
        alt="great choice for your profile!"
        width="100"
        height="100"
      />
      <div>Username: {user.username}</div>
      <div>Number of posts: {user.postCount}</div>
    </div>
  );
};

export default UserSetting;
