import type {ButtonHTMLAttributes, FC, ReactNode} from "react";

type ButtonProps = {
  children: ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>

export const Button: FC<ButtonProps> = ({children, ...rest}) => {
  return (
    <button
      className="p-2 text-sm rounded-sm bg-accent text-text-secondary cursor-pointer active:bg-accent active:text-text-secondary hover:bg-hover hover:text-text-primary transition-colors duration-200"
      {...rest}
    >{children}</button>
  )
}