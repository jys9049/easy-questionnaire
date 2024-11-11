export interface IFormDataTypes {
  id: string;
  title: string;
  updatedAt: string;
  description?: string;
  form: IFormType[];
}

export interface IFormType {
  id: string;
  title: string;
  type: string;
  value: string | IFormValueType[];
  require: boolean;
}

export interface IFormValueType {
  id: string;
  title: string;
}
