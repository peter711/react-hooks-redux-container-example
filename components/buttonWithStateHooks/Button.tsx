import React, { FunctionComponent, useState, useEffect, useCallback } from "react";

interface IButtonProps {
  onClick?: () => void;
  afterTextChanged?: () => void;
  afterCountChanged?: () => void;
}

const Button: FunctionComponent<IButtonProps> = ({ onClick, afterTextChanged, afterCountChanged }: IButtonProps) => {
  const [text, setText] = useState<string>('Click the button');
  useEffect(() => {
    if (afterTextChanged) afterTextChanged();
  }, [text]);

  const [count, setCount] = useState<number>(0);
  useEffect(() => {
    if (afterCountChanged) afterCountChanged();
  }, [count]);

  const handleClick = useCallback(() => {
    setCount(count + 1);
    setText(`You've clicked the button`);
    if (onClick) onClick();
  }, [count, text])

  return (
    <button onClick={handleClick}>
      {text}, Count: {count}
    </button>
  );
};

export default Button;