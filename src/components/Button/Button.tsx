import { ButtonProps } from '../../types/types';

const Button = ({ className, children, onClick }: ButtonProps) => {
  return (
    <button
      className={`button  ${className ? `button__${className}` : ''}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export { Button };
