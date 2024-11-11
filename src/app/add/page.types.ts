export interface IFormArrayType {
  id: string;
  title: string;
  description?: string;
  type: string;
  value: string | TRadioAndCheckboxValueType[];
  require: boolean;
}

export type TRadioAndCheckboxValueType = {
  id: string;
  title: string;
};

export interface IFormInfoTypes {
  title: string;
  description: string;
}
