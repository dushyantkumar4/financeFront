import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { useNavigate } from "react-router-dom";
import { api } from "@/api/client";
import { ArrowRight } from "lucide-react";
import { toast } from "sonner";

const Signup = () => {
  const [register, setRegister] = useState<boolean>(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const endpoint = register ? "/api/register" : "/api/login";
      const payload = register
        ? formData
        : {
            email: formData.email,
            password: formData.password,
          };
      const res = await api.post(endpoint, payload);

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));
      toast.success("success", {
        description: register
          ? "user created successfuly "
          : "user loggedin successfuly",
      });
      navigate("/dashboard");
    } catch (err) {
      toast.error("error", {
        position: "top-center",
        description: err?.response?.data?.errors || "Auth failed",
      });
    }
  };
  const handleReset = async () => {
    setFormData({
      name: "",
      email: "",
      password: "",
    });
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      {/* left section  */}
      <div className="flex items-center justify-center p-4">
        <img
          src={register ? "signupimg.png" : "loginImg.png"}
          className="w-full max-w-sm object-contain"
          alt="auth"
        />
      </div>
      {/* right section  */}
      <div className="flex items-center justify-center p-6 ">
        <form
          action=""
          onSubmit={handleSubmit}
          className="w-full max-w-md space-y-4"
        >
          <FieldGroup>
            <div className="text-gray-400 flex items-center">
              Click here to &nbsp;
              <button
                onClick={() => setRegister(!register)}
                className="text-green-500 cursor-pointer"
              >
                {register ? "Login" : "Register"}
              </button>{" "}
              &nbsp;
              <ArrowRight />
            </div>

            <Field className="text-green-500">
              <FieldLabel htmlFor="fieldgroup-email">Email</FieldLabel>
              <Input
                id="fieldgroup-email"
                type="email"
                placeholder="name@example.com"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
              <FieldDescription>
                We'll never share your details with anyone.
              </FieldDescription>
            </Field>
            {register ? (
              <Field className="text-green-500">
                <FieldLabel htmlFor="form-name">Name</FieldLabel>
                <Input
                  id="form-name"
                  type="text"
                  placeholder="Enter your full name"
                  required
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </Field>
            ) : (
              ""
            )}
            <Field className="text-green-500">
              <FieldLabel htmlFor="fieldgroup-password">Password</FieldLabel>
              <Input
                type="password"
                id="fieldgroup-password"
                placeholder="Enter password"
                name="password"
                value={formData.password}
                onChange={handleChange}
              />
            </Field>

            {/* button secrion  */}
            <Field orientation="horizontal">
              <Button type="button" onClick={handleReset}>
                Reset
              </Button>
              <Button type="submit">Submit</Button>
            </Field>
          </FieldGroup>
        </form>
      </div>
    </div>
  );
};

export default Signup;
