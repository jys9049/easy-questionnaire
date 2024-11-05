import { PropsWithChildren } from "react";

export interface IFormWrapperProps extends PropsWithChildren {
  id: string;
  title: string;
  titleInputValue: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleRequireChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleRemove: (id: string) => void;
}
