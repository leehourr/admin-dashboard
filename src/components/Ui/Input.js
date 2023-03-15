import React from "react";
import { useField } from "formik";

const Input = ({ placeholder, bottom, ...props }, ref) => {
  const [field, meta] = useField(props);
  //   console.log(field.name);
  //   console.log(meta.error);
  console.log(meta.touched, field.name, meta.error);

  return (
    <div className="relative w-full">
      <input
        //   ref={ref}
        className={`outline-none border-b-[5px] ${
          meta.touched && meta.error && "border-b-red-400"
        } w-full py-4 pl-4 rounded-lg bg-[#E0E0E0] shadow-[5px_5px_7px_rgba(0,0,0,0.2),-5px_-5px_9px_rgba(255,255,255,10)] dark:bg-[#333333] dark:shadow-[10px_10px_20px_rgba(29,29,29),-5px_-5px_9px_rgba(73,73,73)]`}
        type={field.type}
        name={field.name}
        required
        placeholder={placeholder}
        {...field}
        {...props}
      />
      {meta.touched && meta.error && (
        <span className="text-red-400">{meta.error}</span>
      )}
    </div>
  );
};

export default Input;
