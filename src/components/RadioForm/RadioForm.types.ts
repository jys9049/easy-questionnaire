export interface IRadioFormProps {
  id: string;
  title: string;
  value: IRadioArrayTypes[];
  handleTitleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleInputChange: (
    formId: string,
    e: React.ChangeEvent<HTMLInputElement>
  ) => void;
  handleAddClick: (id: string) => void;
  handleRadioRemove: (formId: string, valueId: string) => void;
  handleRemove: (id: string) => void;
  handleRequireChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface IRadioArrayTypes {
  id: string;
  title: string;
}
