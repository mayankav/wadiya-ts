import { StyledRoleWrapper, StyledInput } from "./styles";
import { RolePropsType } from "./types";

import { useZustandStore } from "../../store";
import { ChangeEvent } from "react";

const Role = ({ id, role, className }: RolePropsType) => {
  const store = useZustandStore();
  const { selectRole, unSelectRole } = store;

  const onSelectChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      selectRole(role);
    } else unSelectRole(role);
  };

  return (
    <StyledRoleWrapper>
      <div id={id} className={className}>
        {role}
      </div>
      <StyledInput type="checkbox" onChange={onSelectChangeHandler} />
    </StyledRoleWrapper>
  );
};

export default Role;
