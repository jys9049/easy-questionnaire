import { IFormDataTypes } from "@/types/form.types";

export interface IFormCard {
  form: IFormDataTypes;
  handleDeleteClick: (id: string) => void;
}
