
import Baner from "./components/baner";
import Chair from "./components/chair";
import ShopexOffers from "./components/offer";
import Latestblog from "./components/latestblog";
import Newfur from "./components/newfur";
import Sofa from "./components/sofa";
import TopCategories from "./components/topcategories";
import Trendingproducts from "./components/trendingproducts";
import Twentyprcnt from "./components/twentyprcnt";
import Unique from "./components/unique";

export default function Home() {
  return (
    <div className="mx-32">
   
    <Newfur/>
    <Chair/>
    <Sofa/>
    <ShopexOffers/>
    <Unique/>
    <Trendingproducts/>
   <Twentyprcnt/>
   <TopCategories/>
   <Baner/>
   <Latestblog/>
    </div>
  );
}
