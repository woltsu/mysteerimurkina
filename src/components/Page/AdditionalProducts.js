import React, { useEffect } from "react";
import styled from "styled-components";
import { Pagify } from "../Navigator";
import Note from "../Note";
import SelectList from "../SelectList";

const mockItems = [
  { id: 1, name: "Canola oil (450ml)", img: "oljy.jpeg" },
  { id: 2, name: "Tomato mash (500g)", img: "tomaatti.jpeg" },
];

const SelectListWrapper = styled.div`
  margin-top: 20px;
`;

const AdditionalProductsPage = props => {
  useEffect(() => {
    props.resetAdditional()
  }, [])
  return (
    <div>
      <Note
        note={`Your mystery recipe may include these products that you've bought recently. If you still need them you can choose them below.`}
      />
      <SelectListWrapper>
        <SelectList onClick={(i) => props.addAdditional(i)} items={mockItems} />
      </SelectListWrapper>
    </div>
  );
};

export default Pagify(AdditionalProductsPage);
