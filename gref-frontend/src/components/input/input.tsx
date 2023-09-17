type Props = {
  id: string;
  name: string;
  type: string;
  label: string;
  htmlFor?: string;
  required?: boolean;
  withPlaceholder?: boolean;
  register?: (fieldName: string) => any;
};

const Input = ({
  id,
  name,
  type,
  label,
  htmlFor,
  required,
  withPlaceholder,
  register,
}: Props) => (
  <div className="flex flex-col">
    {label && (
      <label
        htmlFor={htmlFor}
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        {label}
      </label>
    )}
    <input
      id={id}
      type={type}
      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      placeholder={withPlaceholder ? label : ''}
      required={required}
      autoComplete="off"
      {...register!(name)}
    />
  </div>
);

export default Input;
