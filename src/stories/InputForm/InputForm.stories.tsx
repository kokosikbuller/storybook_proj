import { Controller, useForm } from 'react-hook-form';
import { Input } from '../../components/Input';

type FormDataType = {
  email: string;
  password: string;
}

export default {
  title: 'Components/InputForm',
  component: Input,
};

export const WithReactHookForm = () => {
  const {
    control,
    handleSubmit,
    reset
  } = useForm<FormDataType>({
    defaultValues: {
      email: '',
      password: ''
    },
  });

  const onSubmit = (data: FormDataType) => {
    console.log(data);
    reset({
      email: '',
      password: ''
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto p-4 border rounded shadow space-y-4">

      <Controller
        name="email"
        control={control}
        rules={{ required: 'Email is required' }}
        render={({ field, fieldState }) => (
          <Input
            label="Email"
            {...field}
            error={fieldState.error?.message}
            type="email"
          />
        )}
      />

      <Controller
        name="password"
        control={control}
        rules={{ required: 'Password is required' }}
        render={({ field, fieldState }) => (
          <Input
            label="Password"
            {...field}
            error={fieldState.error?.message}
            type="password"
          />
        )}
      />

      <button
        type="submit"
        className="w-full px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-300 transition cursor-pointer"
      >
        Submit
      </button>
    </form>
  );
};
