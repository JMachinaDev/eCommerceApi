module.exports = mongoose => {
  const Users = mongoose.model(
    'Users', mongoose.Schema(
      {
        name: {
          first_name: String,
          last_name: String,
        },
        email: String,
        mobile: Number
      }
    )
  );
  return Users;
};
