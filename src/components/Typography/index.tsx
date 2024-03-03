import { FC } from 'react';

import { ITypography } from './types';

const Typography: FC<ITypography> = ({
  content,
  size = 'text-base',
  variant = 'font-normal',
  color = 'text-primary',
  className
}) => {
  return <div className={`${size} ${variant} ${color} ${className}`}>{content}</div>;
};

export default Typography;
