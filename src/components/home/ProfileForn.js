import React, { useState } from "react";
import Header from "../Ui/Header";
import { Formik, Form } from "formik";
import * as yup from "yup";
import Input from "../Ui/Input";

const formInfos = {
  first_name: "",
  last_name: "",
  email: "",
  contact_number: "",
  address_1: "",
  address_2: "",
};

const ProfileForn = () => {
  const [info, setInfo] = useState(formInfos);
  const { first_name, last_name, email, contact_number, address_1, address_2 } =
    info;
  const inputHandler = (e) => {
    const { name, value } = e.target;
    setInfo((prev) => ({ ...prev, [name]: value }));
  };

  // console.log(yup);
  const formValidation = yup.object({
    first_name: yup.string().required("Name is required.").max(100),
    last_name: yup.string().required("Name is required.").max(100),
    email: yup
      .string()
      .required("Email address is required.")
      .email("Must be a valid email")
      .max(100),
    contact_number: yup.string().required("Must be number").max(100),
    address_1: yup.string().required("Address is required").max(100),
    address_2: yup.string().required("Address is required").max(100),
  });
  return (
    <div className="w-full">
      <Header title="CREATE USER" subtitle="Create a new user" />
      <Formik
        // onSubmit={submitHandler}
        enableReinitialize
        initialValues={{
          first_name,
          last_name,
          email,
          contact_number,
          address_1,
          address_2,
        }}
        validationSchema={formValidation}
      >
        {(formik) => (
          <Form>
            <div className="flex items-center justify-between gap-7">
              <Input type="text" name="first_name" placeholder="First Name" />
              <Input
                type="text"
                name="last_name"
                placeholder="Last Name"
                onChange={inputHandler}
              />
            </div>
            <div className="flex flex-col w-full mt-12 gap-12">
              <Input type="text" name="email" placeholder="Email" />
              <Input
                type="text"
                name="contact_number"
                placeholder="Contact number"
                onChange={inputHandler}
              />
              <Input
                type="text"
                name="address_1"
                placeholder="Address 1"
                onChange={inputHandler}
              />
              <Input
                type="text"
                name="address_2"
                onChange={inputHandler}
                placeholder="Address 2"
              />
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ProfileForn;
