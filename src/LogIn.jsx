import React from "react";
import Button from "./Button";
import { withFormik } from "formik";
import * as Yup from "yup";
import Input from "./Input";
import axios from "axios";
import { withAlert, withUser } from "./WithProvider";

function callLoginApi(values, bag) {
  axios
    .post("https://myeasykart.codeyogi.io/login", {
      email: values.email,
      password: values.password,
    })
    .then((res) => {
      const { user, token } = res.data;
      localStorage.setItem("token", token);
      bag.props.setUser(user);
    })
    .catch(() => {
      console.log("Invalid Credentials");
      bag.props.setAlert({
        type: "error",
        message: "Invalid Credentials " + values.password,
      });
    });
}
const schema = Yup.object().shape({
  email: Yup.string().email().required(),
  password: Yup.string().required(),
});

const initialValues = {
  email: "",
  password: "",
};
export function Login({
  values,
  touched,
  errors,
  handleChange,
  handleBlur,
  handleSubmit,
}) {
  return (
    <div className="flex items-center justify-center w-full h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col w-96 p-5 rounded-md shadow-md bg-white"
      >
        <h1 className="text-2xl font-bold self-center mb-4">
          Login to Codeyogi
        </h1>
        <Input
          values={values.name}
          onBlur={handleBlur}
          onChange={handleChange}
          errors={errors.email}
          touched={touched.email}
          label="Email address"
          id="email-address"
          name="email"
          type="email"
          required
          autoComplete="email"
          placeholder="Email address"
          className="rounded-b-none"
        />
        <Input
          values={values.name}
          onBlur={handleBlur}
          onChange={handleChange}
          errors={errors.password}
          touched={touched.password}
          label="Password"
          id="password"
          name="password"
          type="password"
          required
          autoComplete="password"
          placeholder="Password"
          className="rounded-t-none"
        />

        <Button type="submit" className="mt-3 self-end disabled:bg-indigo-400">
          Login
        </Button>
      </form>
    </div>
  );
}
const FormikLogin = withFormik({
  initialValues: initialValues,
  validationSchema: schema,
  handleSubmit: callLoginApi,
})(Login);

export default withAlert(withUser(FormikLogin));
