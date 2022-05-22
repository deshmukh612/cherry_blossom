import "./App.css";
import Filters from "./component/Filters";
import Navbar from "./component/Navbar";
import Offers from "./component/Offers";
import Restaurants from "./component/Restaurants";
import userInfo from "./Data/userInfo.json"
import offers from "./Data/offers.json"
import restaurants from "./Data/restaurants.json"


function App() {
  return (
    <div>
      {/* Here */}
      <Navbar {...userInfo.location}/>
      <Offers offers={offers} />
      <section className="near-you">
        <Filters />
        <Restaurants restaurants={restaurants} />
      </section>
    </div>
  );
}

export default App;
