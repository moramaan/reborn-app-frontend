import React, { ReactNode } from "react";
import { useCheckbox, Chip, VisuallyHidden, tv } from "@nextui-org/react";

const checkbox = tv({
  slots: {
    base: "border-default hover:bg-default-200",
    content: "text-default-500",
  },
  variants: {
    isSelected: {
      true: {
        base: "border-primary bg-primary hover:bg-primary-500 hover:border-primary-500",
        content: "text-primary-foreground pl-1",
      },
    },
    isFocusVisible: {
      true: {
        base: "outline-none ring-2 ring-focus ring-offset-2 ring-offset-background",
      },
    },
  },
});

interface CustomCheckboxProps {
  children?: ReactNode;
  value: string;
  selectedValue: string;
  onChange: (value: string) => void;
}

const CustomCheckbox: React.FC<CustomCheckboxProps> = ({
  children,
  value,
  selectedValue,
  onChange,
}) => {
  const isSelected = value === selectedValue;

  const {
    getBaseProps,
    getLabelProps,
    getInputProps,
  } = useCheckbox({
    isSelected,
    onChange: () => onChange(value),
  });

  const styles = checkbox({ isSelected });

  return (
    <label {...getBaseProps()}>
      <VisuallyHidden>
        <input {...getInputProps()} />
      </VisuallyHidden>
      <Chip
        classNames={{
          base: styles.base(),
          content: styles.content(),
        }}
        color="primary"
        variant="faded"
        {...getLabelProps()}
      >
        {children}
      </Chip>
    </label>
  );
};

interface CustomRadioGroupProps {
  className: string;
  selectedValue: string;
  onChange: (value: string) => void;
  options: { value: string; label: ReactNode }[];
}

const CustomRadioGroup: React.FC<CustomRadioGroupProps> = ({
  className,
  selectedValue,
  onChange,
  options,
}) => {
  return (
    <div className={className}>
      {options.map(option => (
        <CustomCheckbox
          key={option.value}
          value={option.value}
          selectedValue={selectedValue}
          onChange={onChange}
        >
          {option.label}
        </CustomCheckbox>
      ))}
    </div>
  );
};

export default CustomRadioGroup;