import { DataType, RoleActionMappingType } from "./types";
const ROLE_ACTION_MAPPING: RoleActionMappingType = {
  Manager: [
    "View Product",
    "Edit Product",
    "Delete Product",
    "Add Tax",
    "Edit Tax",
    "Delete Tax",
  ],
  Sales: ["View Product", "Edit Product", "Delete Product"],
  Cashier: ["Access Drawer", "Refund Order", "Accept Payment"],
  IT: ["Access Drawer", "Config POS"],
};

const DUPE_ACTIONS = Object.values(ROLE_ACTION_MAPPING).flat();

const ALL_ACTIONS = DUPE_ACTIONS.filter(function (item, pos, self) {
  return self.indexOf(item) === pos;
});

const data: DataType = [
  {
    id: "Final agreement with CEO",
    children: [
      {
        id: "Final Final",
        children: [
          { id: "Meeting 1", children: [{ id: "Manager", role: "Manager" }] },
          { id: "Meeting 2", children: [{ id: "Sales", role: "Sales" }] },
        ],
      },
    ],
  },
  {
    id: "2022",
    role: "Cashier",
  },
  {
    id: "2023",
    children: [
      {
        id: "January meeting",
        children: [
          { id: "Waiting for Approval", children: [{ id: "IT", role: "IT" }] },
        ],
      },
    ],
  },
];

export { ROLE_ACTION_MAPPING, ALL_ACTIONS, data };
