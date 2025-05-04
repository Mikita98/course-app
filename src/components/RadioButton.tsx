// RadioButton.tsx
import { FC } from "react";
import './RadioButton.css';

interface RadioButtonProps {
  modelValue: number;
  value: number;
  onChange: (value: number) => void;
  label?: string;
}

const RadioButton: FC<RadioButtonProps> = ({ modelValue, value, onChange }) => {
  return (
    <div className="radio-wrapper inline-flex">
      <input
        type="radio"
        className="
        radio
        m-0 appearance-none w-22px h-22px rounded-full border-1 border-secondary-50 border-solid
        checked:bg-secondary-50
        checked:p-[5px]
        checked:bg-clip-content
        cursor-pointer
        focus-visible:outline-none"
        checked={modelValue === value}
        onClick={() => onChange(value)}
        value={value}
      />
    </div>
  )
}

export default RadioButton
