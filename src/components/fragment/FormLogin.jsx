import Button from "../elements/button";
import InputForm from "../elements/input";

const FormLogin = () => {
    return (
      <form action="">
        <InputForm
          label="Email"
          type="email"
          placeholder="example@email.com"
          name="email"
        />
        <InputForm
          label="Password"
          type="password"
          placeholder="****"
          name="password"
        />
        <Button classname="bg-blue-600 w-full">Login</Button>
      </form>
    );
}

export default FormLogin;