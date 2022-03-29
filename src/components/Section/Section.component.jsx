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
import Fade from "react-reveal/Fade";
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
      <Fade bottom>
        <ItemText>
          <h1>{title}</h1>
          <p>{description}</p>
        </ItemText>
      </Fade>
      <Buttons>
        <Fade bottom>
          <ButtonGroup>
            <LeftButton>{leftBtnText}</LeftButton>
            {rightBtnText && <RightButton>{rightBtnText}</RightButton>}
          </ButtonGroup>
        </Fade>
        <DownArrow src={down} />
      </Buttons>
    </Wrap>
  );
};

export default Section;
