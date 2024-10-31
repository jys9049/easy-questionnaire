import { PropsWithChildren } from 'react';

export interface IFormWrapperProps extends PropsWithChildren {
  title: string;
  handleRemove: () => void;
}
