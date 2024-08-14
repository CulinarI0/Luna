import { CardList } from "@/components/Card";
import { Box } from "@/components/Box";
import Carousel from "@/components/Carousel";
import { cocktailList, foodList } from "@/mock/cardlistitems";
import getWineNames from "@/api/wineApi";

export default async function Home() {
  const wineNames = await getWineNames();

  return (
    <div className="flex justify-center items-center w-full">
      {/* eslint-disable-next-line no-constant-condition */}
      {true ? (
        <Carousel>
          <Box title="Wine List">
            <CardList items={wineNames} />
          </Box>
          <Box title="Cocktail List">
            <CardList items={cocktailList} />
          </Box>
          <Box title="Food List">
            <CardList items={foodList} />
          </Box>
        </Carousel>
      ) : (
        <div className="flex justify-center items-center w-full">
          <Box title="Wine List">
            <CardList items={wineNames} />
          </Box>
          <Box title="Cocktail List">
            <CardList items={cocktailList} />
          </Box>
          <Box title="Food List">
            <CardList items={foodList} />
          </Box>
        </div>
      )}
    </div>
  );
}
