import {
  InvalidateQueryFilters,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import { useEffect, useMemo } from "react";
import styled from "styled-components";
import Item from "../component/Item";
import { fetchGameList, fetchJackpotList } from "../hook/api/game";

const GameListStyled = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  column-gap: 20px;
  row-gap: 50px;
  .item {
    width: cal(20% - 20px);
  }
  @media (max-width: 768px) {
    .item {
      width: calc(50% - 20px);
    }
  }

  @media (max-width: 480px) {
    .item {
      width: 100%;
    }
  }
`;

interface HomeProps {
  active: string;
}

function Home(props: HomeProps) {
  const { active } = props;
  const queryClient = useQueryClient();

  useEffect(() => {
    const intervalId = setInterval(() => {
      queryClient.invalidateQueries("jackPot" as InvalidateQueryFilters);
    }, 2000);

    return () => clearInterval(intervalId);
  }, [queryClient]);

  const { isLoading, isError, data, error } = useQuery({
    queryKey: ["gameList"],
    queryFn: fetchGameList,
  });

  const excludedCategories = ["ball", "virtual", "fun"];

  const games = useMemo(() => {
    if (active !== "other") {
      return data?.filter((game) => game.categories.includes(active)) || [];
    } else {
      return (
        data?.filter((game) =>
          excludedCategories.every(
            (excludedCategory) => !game.categories.includes(excludedCategory)
          )
        ) || []
      );
    }
  }, [active, data, excludedCategories]);

  const { data: dataJackpot } = useQuery({
    queryKey: ["jackPot"],
    queryFn: fetchJackpotList,
  });

  useMemo(() => {
    dataJackpot?.map((jackpot) => {
      const game = games.find((game) => game.id === jackpot.game);
      if (game) {
        game.jackpot = jackpot.amount;
      }
    });
  }, [dataJackpot, games]);

  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  return (
    <GameListStyled>
      {games?.map((game) => (
        <div key={game.id} className="item">
          <Item active={active} game={game} />
        </div>
      ))}
    </GameListStyled>
  );
}

export default Home;
