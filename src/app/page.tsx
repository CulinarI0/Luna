import { CardList } from "@/components/Card";
import { Box } from "@/components/Box";
import Carousel from "@/components/Carousel";
import { cocktailList, foodList, wineList } from "@/mock/cardlistitems";
export default function Home() {
  return (
    <div className="flex justify-center items-center w-full">
      {/* eslint-disable-next-line no-constant-condition */}
      {true ? (
        <Carousel>
          <Box title="Wine List">
            <CardList items={wineList} />
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
            <CardList items={wineList} />
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
