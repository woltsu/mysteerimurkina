import React from "react";
import { Dropdown } from "semantic-ui-react";

const mockOptions = [
  { key: "angular", text: "Angular", value: "angular" },
  { key: "css", text: "CSS", value: "css" }
];

const Multiselect = ({ placeholder, options }) => {
  return (
    <Dropdown
      search
      placeholder={placeholder || "Placeholder"}
      fluid
      multiple
      selection
      options={options || mockOptions}
    />
  );
};

export default Multiselect;