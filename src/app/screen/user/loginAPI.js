import axios from "axios";

const getLogin = (data) => {
  return new Promise((resolve, reject) => {
    axios
      .post("http://localhost:8080/api/login", data)
      .then((result) => {
        result.data.status === 200 ? resolve(result.data.data) : reject();
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export { getLogin };
