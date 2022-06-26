// export const validate = (data) => {
//   const errors = {};
//   if (!data.name.trim()) {
//     errors.name = "Username required";
//   } else {
//     delete errors.name;
//   }
//   if (!data.email) {
//     errors.email = "Email require";
//   } else if (!/\S+@\S+\.\S+/.test(data.email)) {
//     errors.email = "Email address is invalid";
//   } else {
//     delete errors.email;
//   }
//   if (!data.password) {
//     errors.password = "Password isrequired";
//   } else if (data.password.length < 6) {
//     errors.password = "Password need to be 6 charector or more";
//   } else {
//     delete errors.password;
//   }
//   if (!data.Confirmpassword) {
//     errors.confirmpassword = "Confirm password isrequired";
//   } else if (data.Confirmpassword !== data.password) {
//     errors.confirmpassword = "Not Match password";
//   } else {
//     delete errors.confirmpassword;
//   }
//   if (data.isAccepted) {
//     delete errors.isAccepted;
//   } else {
//     errors.isAccepted = "Accept is regulations";
//   }
//   return errors;
// };
export const validate = (data) => {
  const errors = {};
  if (!data.name.trim()) {
    errors.name = "Username required";
  } else {
    delete errors.name;
  }
  if (!data.username.trim()) {
    errors.username = "Username required";
  } else {
    delete errors.username;
  }
  if (!data.imgurl.trim()) {
    errors.imgurl = "Username required";
  } else {
    delete errors.imgurl;
  }
    if (!data.password) {
    errors.password = "Password isrequired";
  } else if (data.password.length < 4) {
    errors.password = "Password need to be 3 charector or more";
  } else {
    delete errors.password;
  }





  // if (!data.email) {
  //   errors.email = "Email require";
  // } else if (!/\S+@\S+\.\S+/.test(data.email)) {
  //   errors.email = "Email address is invalid";
  // } else {
  //   delete errors.email;
  // }
  // if (!data.password) {
  //   errors.password = "Password isrequired";
  // } else if (data.password.length < 6) {
  //   errors.password = "Password need to be 6 charector or more";
  // } else {
  //   delete errors.password;
  // }
  // if (!data.Confirmpassword) {
  //   errors.confirmpassword = "Confirm password isrequired";
  // } else if (data.Confirmpassword !== data.password) {
  //   errors.confirmpassword = "Not Match password";
  // } else {
  //   delete errors.confirmpassword;
  // }
  // if (data.isAccepted) {
  //   delete errors.isAccepted;
  // } else {
  //   errors.isAccepted = "Accept is regulations";
  // }
  return errors;
};
