const { Schema, model, Types } = require("mongoose");
const bcrypt = require("bcrypt");

const UserSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },

    password: {
      type: String,
      required: true,
    },

    profilePic: {
      type: String,
      defaultValue:
        "https://previews.dropbox.com/p/thumb/ABmSuWYtu_ScZ24dHGESOF1kNrOyTyAMN3fulp8hjBRAte4MzUzkgQUCpjTP8DKCVshhwhZLzgVacswcCK5dOSABzDAdxBx-1AFi4BZEjkxVb5-1iC_BnpEWtBCwHEaXlL9_FHdt97PM8KNNNyuAX-s1tTr26bWiESTXgAzqn4_CzgDeCQPYUqwgWBHxQsnuxtvI74saBjSWfpT36OREvPFG94EGulPAXVYypP1ceg9LHo-q3udz9fpiT8p5xBgNS7etCeLzPuba2hgvcPIXw8VUw8L92andZkuQbWb7gJaH6AtkOO19FneyQo6CXoc3-_GvHUyNMzRAeFCXDzgMoZnteeGiezGBTZLAhEOnvReTRNpc3Y9EuTOsq79BTjBwkSQ/p.png",
    },

    posts: [
      {
        type: Schema.Types.ObjectId,
        ref: "Post",
      },
    ],
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

// Post count virtual
UserSchema.virtual("postCount").get(function () {
  return this.posts.length;
});

// hash user password
UserSchema.pre("save", async function (next) {
  if (this.isNew || this.isModified("password")) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

// custom method to compare and validate password for logging in
UserSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

const User = model("User", UserSchema);

module.exports = User;
