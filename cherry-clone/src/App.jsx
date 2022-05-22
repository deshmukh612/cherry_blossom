import "./App.css";
import Filters from "./component/Filters";
import Navbar from "./component/Navbar";
import Offers from "./component/Offers";
import Restaurants from "./component/Restaurants";
import userInfo from "./Data/userInfo.json"
import offers from "./Data/offers.json"
import restaurants from "./Data/restaurants.json"
import { useState } from "react";

const filters = {
  1: "Cost High to Lost",
  2: "Cost Lost to High",
  3: "Ratings",
  4: "Delivery Time",
  5: "Relevance",
}
function App() {
  const [filterBy, setFilterBy] = useState("")
  const [data, setData] = useState(restaurants)

  const updateFilter = (newFilter) => {
    //todo
    console.log(newFilter)
    switch (newFilter) {
      case "1": {
        setFilterBy(1)
        data.sort((a,b) => b.costForTwo - a.costForTwo)
        console.log(data.map((d) => d.costForTwo))
        setData([...data])
        break;
      }
      case "2": {
        setFilterBy(2)
        data.sort((a,b) => a.costForTwo - b.costForTwo)
        console.log(data.map((d) => d.costForTwo))
        setData([...data])
        break;
      }
      // case 3: {
      //   setFilterBy(3)
      //   data.sort((a,b) => a.costForTwo - b.costForTwo)
      //   setData(newSortedValues)
      //   break
      // }
      // case 4: {
      //   setFilterBy(4)
      //   data.sort((a,b) => a.costForTwo - b.costForTwo)
      //   setData(newSortedValues)
      //   break
      // }
      default: {
        setData(restaurants)
        break;
      }
    }
  }

  return (
    <div>
      {/* Here */}
      <Navbar {...userInfo.location}/>
      <Offers offers={offers} />
      <section className="near-you">
        <Filters filters={filters} currentFilterBy={filterBy} updateFilter={updateFilter} />
        <Restaurants restaurants={data} />
      </section>
    </div>
  );
}

export default App;
