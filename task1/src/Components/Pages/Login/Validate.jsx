const Validate = (values) => {
  let errors = {};
  const password = values.password[0];
  const email = values.email;
  const fullname = values.fullname;
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,4}$/;

  if (!fullname) {
    errors.fullname = "*Name is Required.";
  }

  if (!email) {
    errors.email = "*Email is Required.";
  } else if (!emailPattern.test(email)) {
    errors.email = "Email is Invalid.";
  }

  if (!password) {
    errors.password = "*Password is Required.";
  } else if (password.length < 7) {
    errors.password = "Password must be more than 8 characters.";
  } else if (password.length < 15) {
    errors.password = "Password must not be more than 8 characters.";
  }

  return errors;
};

export default Validate;
