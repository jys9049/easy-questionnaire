export interface ICheckBoxProps {
  id: string;
  title: string;
  value: ICheckBoxArrayTypes[];
  handleTitleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleInputChange: (
    formId: string,
    e: React.ChangeEvent<HTMLInputElement>
  ) => void;
  handleAddClick: (id: string) => void;
  handleCheckBoxRemove: (formId: string, valueId: string) => void;
  handleRemove: (id: string) => void;
  handleRequireChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface ICheckBoxArrayTypes {
  id: string;
  title: string;
}
