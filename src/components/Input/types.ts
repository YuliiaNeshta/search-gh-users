import { ChangeEvent, KeyboardEvent } from 'react';

export interface InputProps {
  placeholder: string;
  onKeyDown: (event: KeyboardEvent<HTMLButtonElement>) => void;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  value: string;
}
