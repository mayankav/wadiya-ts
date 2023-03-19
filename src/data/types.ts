import { RoleType } from "../store/types";

export type RoleActionMappingType = {
  [key in RoleType]: Array<string>;
};

export interface EntryType {
  id: string;
  children?: EntryType[];
  role?: RoleType;
}

export type DataType = Array<EntryType>;
