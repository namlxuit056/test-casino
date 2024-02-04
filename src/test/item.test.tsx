// Item.test.tsx
import React from "react";
import { render, screen } from "@testing-library/react";
import Item from "../component/Item";

describe("Item component", () => {
  const mockGame = {
    id: "NYXRAMESESSRICHES",
    name: "Test Game",
    image: "test-image.jpg",
    categories: ["new"],
    jackpot: 1000000, // assuming this property exists in your Game type
  };

  test("renders with correct content", () => {
    render(<Item game={mockGame} active="new" />);

    const imageElement = screen.getByAltText(mockGame.name);
    const nameElement = screen.getByText(mockGame.name);
    const playButtonElement = screen.getByText("Play");
    const jackpotTextElement = screen.getByText("Jackpot: 1,000,000");

    expect(imageElement).toBeInTheDocument();
    expect(nameElement).toBeInTheDocument();
    expect(playButtonElement).toBeInTheDocument();
    expect(jackpotTextElement).toBeInTheDocument();
  });

  test("renders ribbons for top and new games", () => {
    render(
      <Item
        game={{ ...mockGame, categories: ["top", "new"] }}
        active="someActive"
      />
    );

    const topRibbonElement = screen.getByText("Top");
    const newRibbonElement = screen.getByText("New");

    expect(topRibbonElement).toBeInTheDocument();
    expect(newRibbonElement).toBeInTheDocument();
  });

  test("does not render ribbons for inactive categories", () => {
    render(
      <Item
        game={{ ...mockGame, categories: ["someOtherCategory"] }}
        active="someActive"
      />
    );

    const topRibbonElement = screen.queryByText("Top");
    const newRibbonElement = screen.queryByText("New");

    expect(topRibbonElement).toBeNull();
    expect(newRibbonElement).toBeNull();
  });
});
