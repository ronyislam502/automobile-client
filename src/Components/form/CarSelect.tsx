import { Form, Select } from "antd";
import { Controller } from "react-hook-form";

type TSelectProps = {
  label: string;
  name: string;
  options: {
    value: string;
    label: string;
    disabled?: boolean;
  }[];
};

const CarSelect = ({ label, name, options }: TSelectProps) => {
  return (
    <div>
      <Controller
        name={name}
        render={({ field, fieldState: { error } }) => (
          <Form.Item label={label}>
            <Select {...field} options={options} />
            {error && <small>{error?.message}</small>}
          </Form.Item>
        )}
      />
    </div>
  );
};

export default CarSelect;