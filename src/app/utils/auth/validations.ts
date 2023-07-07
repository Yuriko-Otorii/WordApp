import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

export const useSignupValidation = () => {

  const validationSchema = Yup.object().shape({
    username: Yup.string().required("Username is required"),
    email: Yup
      .string()
      .lowercase()
      .email("Wrong email format")
      .required("Email is required"),
    password: Yup.string().required("Password is required"),
    confirmPassword: Yup.string().required("Confirm password is required"),
  });

  
  const formOptions = { resolver: yupResolver(validationSchema) };
  const { register, handleSubmit, formState: { errors, isSubmitting, isDirty, isValid } } = useForm(formOptions);

  return { register, handleSubmit, errors, isSubmitting, isDirty, isValid }
} 

export const passwordSchema = Yup
  .string()
  .test(
    'password',
    "Password must include at least 1 lowercase letter, 1 capital letter, 1 number, and 1 special character",
    value =>
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>])/.test(value!)
  )
  .min(8, "Password must be at least 8 characters")
  .max(10, "Password must be up to 10 characters")
  .required("Password is required");