/* eslint-disable @typescript-eslint/no-explicit-any */
import { Form } from "antd";
import { ReactNode } from "react";
import {
  FieldValues,
  FormProvider,
  SubmitHandler,
  useForm,
} from "react-hook-form";

type TFormConfig = {
  defaultValues?: Record<string, any>;
  resolver?: any;
};

type TFormProps = {
  onSubmit: SubmitHandler<FieldValues>;
  children: ReactNode;
} & TFormConfig;

const CarForm = ({ onSubmit, children }: TFormProps) => {
  const methods = useForm();
  return (
    <div>
      <FormProvider {...methods}>
        <Form layout="vertical" onFinish={methods.handleSubmit(onSubmit)}>
          {children}
        </Form>
      </FormProvider>
    </div>
  );
};

export default CarForm;