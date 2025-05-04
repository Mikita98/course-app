// RadioButton.tsx
import { FC } from "react";

interface RadioButtonProps {
  modelValue: number;
  value: number;
  onChange: (value: number) => void;
  label?: string;
}

const RadioButton: FC<RadioButtonProps> = ({ modelValue, value, onChange }) => {
  return (
      <input
        type="radio"
        className="
        m-0 appearance-none w-22px h-22px rounded-full border-1 border-secondary-50 border-solid
        checked:bg-secondary-50
        checked:p-[5px]
        checked:bg-clip-content
        cursor-pointer
        focus-visible:outline-offset-[6px]
        focus-visible:outline-secondary-50"
        checked={modelValue === value}
        onClick={() => onChange(value)}
        value={value}
      />
  )
}

export default RadioButton
