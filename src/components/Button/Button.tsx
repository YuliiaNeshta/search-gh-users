import cn from 'classnames';
import { FC } from 'react';
import styles from './Button.module.scss';
import { ButtonProps } from './types';

const Button: FC<ButtonProps> = ({ children, className, onClick, isDisabled }) => {
  return (
    <button className={cn(styles.button, styles[isDisabled ? 'disabled' : ''], className)} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
