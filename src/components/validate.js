const validate = (values) => {
    let errors = {};
  
    if (!values.name.trim()) {
      errors.name = "Name is required";
    }
  
    if (!values.email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = "Email address is invalid";
    }
  
    if (!values.age) {
      errors.age = "Age is required";
    } else if (values.age <= 0) {
      errors.age = "Age must be greater than 0";
    }
  
    if (values.attending === "yes" && !values.guestName.trim()) {
      errors.guestName = "Guest Name is required if attending with a guest";
    }
  
    return errors;
  };
  
  export default validate;
  