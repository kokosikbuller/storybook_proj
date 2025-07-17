import { Input } from "../../components/Input";

export default {
  title: 'Components/Input',
  component: Input,
};

export const Default = () => <Input placeholder="Type here..." label='Default' />;
export const WithoutLabel = () => <Input type="text" placeholder="Text input" />;
export const Clearable = () => <Input placeholder="Clearable" clearable label="Clearable" />;
export const Password = () => <Input type="password" placeholder="Password" label="Password" />;
export const PasswordClearable = () => <Input type="password" placeholder="Password with toggle and clear" clearable label="PasswordClearable" />;
export const Error = () => <Input type="password" placeholder="Password with toggle and clear" clearable label="PasswordClearable" error="This field has an error state" />;