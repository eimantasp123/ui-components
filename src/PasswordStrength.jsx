import { useState } from "react";
import PasswordStrengthIndicator from "./components/PasswordStrengthIndicator";
import { FaEye, FaEyeSlash } from "react-icons/fa";

export default function PasswordStrength() {
  const [password, setPassword] = useState("");
  const [type, setType] = useState("password");

  const togglePasswordVisibility = () => {
    setType(type === "password" ? "text" : "password");
  };

  return (
    <div className="w-[350px] select-none">
      <div className="relative">
        <input
          type={type}
          className="mb-4 w-full rounded-md border-[2px] border-neutral-200 px-4 py-2 outline-none transition-colors duration-300 ease-in-out focus:border-neutral-500"
          placeholder="Enter your password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <span
          onClick={togglePasswordVisibility}
          className="absolute right-5 top-3 cursor-pointer text-lg text-neutral-600"
        >
          {type === "password" ? <FaEye /> : <FaEyeSlash />}
        </span>
      </div>

      <PasswordStrengthIndicator password={password} />
    </div>
  );
}
