import { data, ALL_ACTIONS, ROLE_ACTION_MAPPING } from "./data";
import {
  GlobalStyle,
  StyledAppWrapper,
  StyledFolder,
  StyledRole,
  StyledDropdown,
  StyledActionWrapper,
  StyledCalculateButton,
  StyledAlertMessage,
} from "./styles";

import { useZustandStore } from "./store";
import { ChangeEvent, useState } from "react";

function App() {
  const store = useZustandStore();
  const { roles, action, selectAction } = store;
  const [isPermitted, setIsPermitted] = useState<boolean | null>(null);

  const actionChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    selectAction(e.target.value);
  };
  const calculatePermission = () => {
    if (action.length > 0) {
      const isAllowed = roles.some((role) =>
        ROLE_ACTION_MAPPING[role].includes(action)
      );
      setIsPermitted(isAllowed);
    }
  };

  return (
    <>
      <GlobalStyle />
      <StyledAppWrapper>
        {isPermitted !== null && (
          <StyledAlertMessage isSuccessful={isPermitted} id="alert-msg">
            {`Permission ${isPermitted ? "granted" : "denied"}`}
          </StyledAlertMessage>
        )}
        {data.map((entry) =>
          entry.children ? (
            <StyledFolder key={entry.id} entry={entry} />
          ) : (
            entry.role && (
              <StyledRole
                key={entry.id}
                id={entry.id}
                role={entry.role}
                hasNoParent
              />
            )
          )
        )}
        <StyledActionWrapper>
          <StyledDropdown
            placeholder="Select an action..."
            onChange={actionChangeHandler}
            defaultValue=""
          >
            <option value="" disabled>
              Select an action...
            </option>
            {ALL_ACTIONS.map((action) => (
              <option key={action} id={action} value={action}>
                {action}
              </option>
            ))}
          </StyledDropdown>
          <StyledCalculateButton
            onClick={calculatePermission}
            disabled={action.length <= 0}
            id="calc-btn"
          >
            Check Permissions
          </StyledCalculateButton>
        </StyledActionWrapper>
      </StyledAppWrapper>
    </>
  );
}

export default App;
