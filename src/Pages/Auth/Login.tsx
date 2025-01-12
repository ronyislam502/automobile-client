import { Button, Row } from "antd";
import CarForm from "../../Components/form/CarForm";
import CarInput from "../../Components/form/CarInput";

const Login = () => {
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div>
      <Row justify="center" align="middle" style={{ height: "50vh" }}>
        <CarForm onSubmit={onSubmit}>
          <CarInput type="text" name="email" label="email" />
          <CarInput type="text" name="password" label="Password" />
          <Button htmlType="submit">LogIn</Button>
        </CarForm>
      </Row>
    </div>
  );
};

export default Login;
