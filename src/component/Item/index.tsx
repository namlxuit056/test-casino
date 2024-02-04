import { Game } from "../../types/game";
import styled from "styled-components";

interface ItemProps {
  game: Game;
  active: string;
}

const PlayButton = styled.button`
  display: none;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: ${(props) => props.theme.primaryColor};
  color: white;
  padding: 15px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
`;

const GameName = styled.span`
  display: none;
  position: absolute;
  top: 80%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font-weight: 500;
  white-space: nowrap;
  font-size: 20px;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const StyledItem = styled.div`
  position: relative;
  cursor: pointer;
  width: 100%;
  img {
    border-radius: 15px;
    width: 100%;
  }

  &:hover {
    ${PlayButton}, ${GameName} {
      display: block;
    }
  }
`;

const RibbonWrapper = styled.div`
  background: transparent;
  height: 200px;
  width: 200px;
  position: absolute;
  top: -10px;
  right: 0px;
  overflow: hidden;
`;

const TopCurl = styled.div`
  &:before {
    content: "";
    display: block;
    border-radius: 10px 10px 0px 0px;
    width: 50px;
    height: 10px;
    position: absolute;
    right: 86px;
    background: linear-gradient(to right, #008a3b 1%, #0f330a 45%);
  }
`;

const RightCurl = styled.div`
  &:after {
    content: "";
    display: block;
    border-radius: 0px 10px 10px 0px;
    width: 10px;
    height: 50px;
    position: absolute;
    right: 0px;
    top: 85px;
    background: linear-gradient(top, #0f330a 55%, #008a3b 99%);
  }
`;

const Ribbon = styled.div`
  width: 200px;
  height: 40px;
  position: relative;
  top: 30px;
  right: -50px;
  z-index: 1;
  overflow: hidden;
  transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  -moz-transform: rotate(45deg);
  -webkit-transform: rotate(45deg);
  -o-transform: rotate(45deg);
  box-shadow: inset 0px 0px 0px 3px rgb(0, 114, 45),
    inset 0px 0px 0px 4px rgba(0, 0, 0, 0.5),
    inset 0px 0px 0px 5px rgba(255, 255, 255, 0.4),
    0px 21px 5px -18px rgba(0, 0, 0, 0.8);
  background: linear-gradient(to right, #00722d 0%, #8dc63f 51%, #00561c 100%);
  span {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    font-weight: bold;
  }
`;

const TopGlare = styled.div`
  &:before {
    content: "";
    display: block;
    height: 72px;
    width: 13px;
    position: relative;
    top: -13px;
    left: 27px;
    transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    -moz-transform: rotate(45deg);
    -webkit-transform: rotate(45deg);
    -o-transform: rotate(45deg);
    background: linear-gradient(
      left,
      rgba(255, 255, 255, 0) 1%,
      rgba(255, 255, 255, 0.6) 50%,
      rgba(255, 255, 255, 0) 100%
    );
  }
}`;

const RightClear = styled.div`
  &:after {
    content: "";
    display: block;
    height: 72px;
    width: 13px;
    position: relative;
    bottom: 90px;
    left: 154px;
    transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    -moz-transform: rotate(45deg);
    -webkit-transform: rotate(-45deg);
    -o-transform: rotate(45deg);
    background: linear-gradient(
      left,
      rgba(255, 255, 255, 0) 1%,
      rgba(255, 255, 255, 0.6) 50%,
      rgba(255, 255, 255, 0) 100%
    );
  }
`;

const JackpotText = styled.span`
  position: absolute;
  bottom: 10px;
  right: 10px;
  color: white;
  font-size: 14px;
  font-weight: bold;
`;

const Item = (props: ItemProps) => {
  const { game, active } = props;
  const hasTopRibbon = game.categories.includes("top") && active !== "top";
  const hasNewRibbon = game.categories.includes("new") && active !== "new";

  return (
    <StyledItem>
      {hasTopRibbon && (
        <RibbonWrapper>
          <TopCurl />
          <RightCurl />
          <Ribbon>
            <TopGlare />
            <RightClear />
            <span>Top</span>
          </Ribbon>
        </RibbonWrapper>
      )}
      {hasNewRibbon && (
        <RibbonWrapper>
          <TopCurl />
          <RightCurl />
          <Ribbon>
            <TopGlare />
            <RightClear />
            <span>New</span>
          </Ribbon>
        </RibbonWrapper>
      )}
      <img src={game.image} alt={game.name} />
      <PlayButton>Play</PlayButton>
      <GameName>{game.name}</GameName>
      {game.jackpot && (
        <JackpotText>Jackpot: {game.jackpot.toLocaleString()}</JackpotText>
      )}
    </StyledItem>
  );
};

export default Item;
