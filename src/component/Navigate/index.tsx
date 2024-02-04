import { useState } from "react";
import styled from "styled-components";

interface NavigateProps {
  active: string;
  onActive: (value: string) => void;
}

interface NavigateStyledProps {
  isMenuOpen: boolean;
}
const NavigateStyled = styled.div<NavigateStyledProps>`
  background-color: ${(props) => props.theme.secondaryColor};
  width: 100%;

  .black {
    height: 100px;
    background-color: ${(props) => props.theme.secondaryColor};
  }

  ul {
    background-color: ${(props) => props.theme.secondaryColor};
    width: 100%;
    color: ${(props) => props.theme.color};
    display: flex;
    justify-content: space-between;
    list-style: none;
    font-size: 20px;
    font-weight: bold;
    align-items: center;
    background-color: rgba(255, 255, 255, 0.5);
    padding: 0;
    margin: 0;
  }

  @media (max-width: 768px) {
    .black {
      display: none;
    }
    ul {
      flex-direction: column;
      align-items: flex-start;
      display: ${(props) => (props.isMenuOpen ? "flex" : "none")};
    }
  }

  @media (max-width: 480px) {
    .black {
      display: none;
    }
    ul {
      font-size: 16px;
    }
  }

  .menu-toggle {
    display: none;
    cursor: pointer;

    @media (max-width: 768px) {
      display: block;
      font-size: 50px;
      color: white;
    }
  }
`;

interface LiStyledProps {
  value: string;
  active: string | null;
}

const LiStyled = styled.li<LiStyledProps>`
  width: 150px;
  cursor: pointer;
  padding: 10px;
  text-align: center;
  padding: 20px;
  background-color: ${(props) =>
    props.active === props.value
      ? props.theme.primaryColor
      : "rgba(55, 55, 55, 0.5)"};

  &:hover {
    background-color: ${(props) => props.theme.primaryColor};
    color: #fff;
  }
`;

const menus = [
  {
    name: "Top Games",
    value: "top",
  },
  {
    name: "New Games",
    value: "new",
  },
  {
    name: "Slot",
    value: "slots",
  },
  {
    name: "Jackpots",
    value: "jackpots",
  },
  {
    name: "Live",
    value: "live",
  },
  {
    name: "Blackjack",
    value: "blackjack",
  },
  {
    name: "Roulette",
    value: "roulette",
  },
  {
    name: "Table",
    value: "table",
  },
  {
    name: "Poker",
    value: "poker",
  },
  {
    name: "Other",
    value: "other",
  },
];

const Navigate = (props: NavigateProps) => {
  const { active, onActive } = props;
  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleClick = (value: string) => {
    onActive(value);
    setMenuOpen(false);
  };

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <NavigateStyled isMenuOpen={isMenuOpen}>
      <div className="black"></div>
      <div className="menu-toggle" onClick={toggleMenu}>
        ☰
      </div>
      <ul>
        {menus.map((menu) => (
          <LiStyled
            active={active}
            value={menu.value}
            key={menu.value}
            onClick={() => handleClick(menu.value)}
          >
            {menu.name}
          </LiStyled>
        ))}
      </ul>
    </NavigateStyled>
  );
};

export default Navigate;
