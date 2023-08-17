import { FC } from 'react';
import styles from './Input.module.scss';
import { InputProps } from './types';

const Input: FC<InputProps> = ({ placeholder, onChange, onKeyDown, value }) => {
  return (
    <label className={styles.label}>
      <input
        onChange={onChange}
        onKeyDown={onKeyDown}
        className={styles.input}
        value={value}
        type="text"
        placeholder={placeholder}
      />
    </label>
  );
};

export default Input;
