import { memo } from 'react';
import cls from './Input.module.scss'

interface InputProps {
  onChange: (value: string) => void;
}

const Input = memo((props: InputProps) => {
  const { onChange } = props;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  return (
    <div className={cls.InputWrapper}>
      <input type='text' placeholder='Введите название товара' onChange={handleChange} className={cls.Input} />
    </div>
  );
});

export default Input;