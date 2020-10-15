const ValidateUser = (type, value) => {
    if (type === "email") {
      const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(value).toLowerCase());
    }
    if (type === "password") {
      if (value.length < 6) {
        return false;
      }
      return true;
    }
  };

  module.exports = ValidateUser;