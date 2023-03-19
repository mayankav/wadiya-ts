export interface StoreType {
  roles: RoleType[];
  action: string;
  selectRole: (roleId: RoleType) => void;
  unSelectRole: (roleId: RoleType) => void;
  selectAction: (actionId: string) => void;
}

export type RoleType = "Manager" | "Sales" | "Cashier" | "IT";
