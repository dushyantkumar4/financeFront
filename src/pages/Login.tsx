import { Button } from "@/components/ui/button";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";

const Login = () => {
  return (
    <div className="flex justify-between p-0 items-center w-full">
      <div className="">
        <img src="loginImg.png" className="" alt="" />
      </div>
      <div className="">
        <FieldGroup className="text-green-500 ">
          <Field>
            <FieldLabel htmlFor="fieldgroup-email">Email</FieldLabel>
            <Input
              id="fieldgroup-email"
              type="email"
              className="text-white"
              placeholder="name@example.com"
            />
            <FieldDescription>
              We'll send updates to this address.
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
            <Button type="reset" variant="outline">
              Reset
            </Button>
            <Button type="submit">Submit</Button>
          </Field>
        </FieldGroup>
      </div>
    </div>
  );
};

export default Login;
