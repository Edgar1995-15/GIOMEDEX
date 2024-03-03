export type variants =
  | 'font-thin'
  | 'font-extralight'
  | 'font-light'
  | 'font-normal'
  | 'font-medium'
  | 'font-semibold'
  | 'font-bold'
  | 'font-extrabold'
  | 'font-black';

export interface ITypography {
  content: string;
  size?: string;
  variant?: variants;
  color?: string;
  className?: string;
}
