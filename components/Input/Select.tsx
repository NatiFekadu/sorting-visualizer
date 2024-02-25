import { SelectOptionType } from "@/lib/types";

export const Select = ({
  options,
  defaltValue,
  onChange,
  isDisabled = false,
}: {
  options: SelectOptionType[];
  defaltValue: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  isDisabled?: boolean;
}) => {
  return (
    <div className="inline-block relative w-48">
      <select
        defaultValue={defaltValue}
        onChange={onChange}
        disabled={isDisabled}
        className="block appearance-none h-8 w-full bg-system-purple10 border-system-purple10 border px-4 pr-8 py-1 rounded-lg focus:outline-none focus:shadow-outline text-gray-300"
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2">
        <svg
          className="fill-gray-300 h-4 w-4"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
        </svg>
      </div>
    </div>
  );
};
