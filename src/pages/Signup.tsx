import { Button } from "@/components/ui/button";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";

const Signup = () => {
  return (
    <div className="text-green-500 flex justify-between p-0 items-center">
      <div className="w-100">
        <img src="loginImg.png" className="" alt="" />
      </div>
      <FieldGroup>
        <Field>
          <FieldLabel htmlFor="form-name">Name</FieldLabel>
          <Input
            id="form-name"
            type="text"
            placeholder="Enter your full name"
            required
          />
        </Field>
        <Field>
          <FieldLabel htmlFor="fieldgroup-email">Email</FieldLabel>
          <Input
            id="fieldgroup-email"
            type="email"
            className="text-white"
            placeholder="name@example.com"
          />
          <FieldDescription>
            We'll never share your details with anyone.
          </FieldDescription>

          <Field>
            <FieldLabel htmlFor="fieldgroup-password">Password</FieldLabel>
            <Input
              type="password"
              id="fieldgroup-password"
              placeholder="Enter password"
            />
          </Field>
        </Field>
        {/* button secrion  */}
        <Field orientation="horizontal">
          <Button type="reset">Reset</Button>
          <Button type="submit">Submit</Button>
        </Field>
      </FieldGroup>
    </div>
  );
};

export default Signup;
