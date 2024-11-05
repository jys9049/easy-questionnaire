export interface ITextFieldFormProps {
  id: string;
  titleValue: string;
  handleTitleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleRequireChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleRemove: (id: string) => void;
}
