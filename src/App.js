import Card from "./Card";
import "./App.css";
import Rect from "./images/image-equilibrium.jpg";
import Comb_shape from "./images/Combined Shape.png";
import shape from "./images/Shape.png";
import oval_img from "./images/Oval.png";
import shape_1 from "./images/Shape (1).png";

function App() {
  return (
    <div className="App">
      <Card
        name="Equilibrium #3429"
        textName="Our Equilibrium collection promotes balance and calm."
        creation="Jules Wyvern"
        creation2="Beka Shamugia"
        days="3 days left"
        ethText="0.041 ETH"
        color="hsl(216, 50%, 16%)"
        showLight={true}
        Rect={Rect}
        Comb_shape={Comb_shape}
        shape={shape}
        oval_img={oval_img}
        shape_1={shape_1}
      />
    </div>
  );
}

export default App;
