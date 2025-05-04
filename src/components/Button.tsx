import {ButtonHTMLAttributes, createContext, FC, ReactNode} from "react";

const ButtonContext = createContext({
  variant: 'primary' as 'primary' | 'secondary'
});

interface ButtonRootProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  children: ReactNode;
}

interface ButtonIconProps {
  children: ReactNode; // Changed to accept ReactNode for SVG components
}

interface ButtonTextProps {
  children: ReactNode;
}

const ButtonRoot: FC<ButtonRootProps> = ({
                                           variant = 'primary',
                                           children,
                                           className = '',
                                           ...props
                                         }) => {
  const baseStyles = "rounded-[7px] flex items-center focus-visible:outline-width-2 cursor-pointer";

  const variants = {
    primary: `
      border-0
      justify-center
      px-4 py-2 
      bg-primary-60 
      text-neutral-100
      text-6 
      font-bold
      hover:bg-primary-40
      focus-visible:outline-primary-20
      text-heading-medium
      h-[48px]
    `,
    secondary: `
      border-0
      bg-neutral-100 
      p-2 
      text-body-medium-semibold 
      justify-between 
      text-secondary-50 
      h-[46px]
      hover:underline
      focus-visible:outline-secondary-50
      `
  };

  return (
    <ButtonContext.Provider value={{variant}}>
      <button
        className={`${baseStyles} ${variants[variant]} ${className}`.trim()}
        {...props}
      >
        {children}
      </button>
    </ButtonContext.Provider>
  );
};

const ButtonIcon: FC<ButtonIconProps> = ({children}) => {
  return (
      children
  );

};

const ButtonText: FC<ButtonTextProps> = ({children}) => {
  return (
    <span>
      {children}
    </span>
  );
};

const Button = {
  Root: ButtonRoot,
  Icon: ButtonIcon,
  Text: ButtonText,
};

export default Button;