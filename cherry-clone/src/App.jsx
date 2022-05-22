import "./App.css";
import Filters from "./component/Filters";
import Navbar from "./component/Navbar";
import Offers from "./component/Offers";
import Restaurants from "./component/Restaurants";
import userInfo from "./Data/UserInfo.json"

function App() {
  return (
    <div>
      {/* Here */}
      <Navbar {...userInfo.location}/>
      <Offers />
      <section className="near-you">
        <Filters />
        <Restaurants />
      </section>
    </div>
  );
}

export default App;
