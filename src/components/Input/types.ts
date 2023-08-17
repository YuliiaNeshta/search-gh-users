import { ChangeEvent } from 'react';

export interface InputProps {
  placeholder: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  value: string;
}
