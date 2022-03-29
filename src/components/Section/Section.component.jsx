import React from "react";
import {
  ItemText,
  LeftButton,
  RightButton,
  ButtonGroup,
  Wrap,
  DownArrow,
  Buttons,
} from "./Section.styles";
import down from "../../assets/images/down-arrow.svg";

const Section = ({
  title,
  description,
  backgroundImg,
  leftBtnText,
  rightBtnText,
}) => {
  return (
    <Wrap bgImage={backgroundImg}>
      <ItemText>
        <h1>{title}</h1>
        <p>{description}</p>
      </ItemText>
      <Buttons>
        <ButtonGroup>
          <LeftButton>{leftBtnText}</LeftButton>
          {rightBtnText && <RightButton>{rightBtnText}</RightButton>}
        </ButtonGroup>
        <DownArrow src={down} />
      </Buttons>
    </Wrap>
  );
};

export default Section;
