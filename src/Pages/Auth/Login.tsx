import { Button, Row } from "antd";
import CarForm from "../../Components/form/CarForm";
import CarInput from "../../Components/form/CarInput";
import { useLoginMutation } from "../../redux/feature/auth/authApi";
import { FieldValues } from "react-hook-form";
import { useAppDispatch } from "../../redux/hooks";
import { setUser } from "../../redux/feature/auth/authSlice";
import { verifyToken } from "../../utils/verifyToken";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";

const Login = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [login] = useLoginMutation();
  const onSubmit = async (data: FieldValues) => {
    const toastId = toast.loading("Logging in...");
    try {
      const userData = {
        email: data.email,
        password: data.password,
      };
      const res = await login(userData);
      const user = verifyToken(res?.data?.data?.accessToken);
      dispatch(setUser({ user: user, token: res?.data?.data?.accessToken }));
      toast.success("Logged in", { id: toastId, duration: 2000 });
      navigate("/");
    } catch (error) {
      toast.error("Something wrong", { id: toastId, duration: 2000 });
    }
  };
  return (
    <div className="border ">
      <Row justify="center" align="middle" style={{ height: "50vh" }}>
        <CarForm onSubmit={onSubmit}>
          <CarInput type="email" name="email" label="email" />
          <CarInput type="text" name="password" label="Password" />
          <Button htmlType="submit">LogIn</Button>
        </CarForm>
      </Row>
      <h2 className="text-center text-xl font-medium">
        Don't have an account?{" "}
        <span className="text-green-400">
          <Link to="/register">Create Account</Link>
        </span>
      </h2>
    </div>
  );
};

export default Login;
