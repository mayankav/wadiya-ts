import { useState } from "react";
import { StyledFolder, StyledRole } from "../../styles";
import { StyledButton, StyledSection } from "./styles";
import { FolderProps } from "./types";

const Folder = ({ entry, indent = 1, className }: FolderProps) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={className}>
      <StyledButton onClick={() => setIsOpen((old) => !old)}>
        {entry.children && !isOpen ? "+ " : "- "}
        {entry.id}
      </StyledButton>
      {
        <StyledSection indent={indent} isOpen={isOpen}>
          {entry.children?.map((entry) => (
            <div key={entry.id}>
              {entry.children && (
                <StyledFolder
                  key={entry.id}
                  entry={entry}
                  indent={indent + 1}
                />
              )}
              {entry.role && (
                <StyledRole key={entry.id} id={entry.id} role={entry.role} />
              )}
            </div>
          ))}
        </StyledSection>
      }
    </div>
  );
};

export default Folder;
