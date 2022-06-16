const UserSetting = ({ user }) => {
  return (
    <div>
      <img src={user.profilePic} width="100" height="100" />
      <div>Username: {user.username}</div>
      <div>Posts Count: {user.postCount}</div>
    </div>
  );
};

export default UserSetting;
