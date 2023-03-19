import { create } from "zustand";
import { StoreType } from "./types";

export const useZustandStore = create<StoreType>((setZustandStore) => ({
  roles: [],
  action: "",
  selectRole: (roleId) => {
    setZustandStore((state) => ({
      ...state,
      roles: [...state.roles, roleId],
    }));
  },
  unSelectRole: (roleId) => {
    setZustandStore((state) => ({
      ...state,
      roles: state.roles.filter((role) => role !== roleId),
    }));
  },
  selectAction: (actionId) => {
    setZustandStore((state) => ({
      ...state,
      action: actionId,
    }));
  },
}));
