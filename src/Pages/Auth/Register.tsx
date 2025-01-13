import { Button, Row } from "antd";
import CarForm from "../../Components/form/CarForm";
import CarInput from "../../Components/form/CarInput";
import SectionTitle from "../../Components/shared/SectionTitle";
import { Link } from "react-router-dom";
import { FieldValues } from "react-hook-form";

const Register = () => {
  const onSubmit = (data: FieldValues) => {
    console.log(data);
  };

  return (
    <div className="">
      <SectionTitle heading="Register Please!!!" />
      <Row justify="center" align="middle" style={{ height: "50vh" }}>
        <CarForm onSubmit={onSubmit}>
          <CarInput type="text" name="name" label="Name" />
          <CarInput type="email" name="email" label="E-mail" />
          <CarInput type="text" name="phone" label="Phone" />
          <CarInput type="text" name="password" label="Password" />
          <CarInput type="text" name="address" label="Address" />
          <Button htmlType="submit">Register</Button>
        </CarForm>
      </Row>
      <h2 className="text-center text-xl font-medium mt-20">
        Already have an account?{" "}
        <span className="text-green-400">
          <Link to="/register">Please Login</Link>
        </span>
      </h2>
    </div>
  );
};

export default Register;
