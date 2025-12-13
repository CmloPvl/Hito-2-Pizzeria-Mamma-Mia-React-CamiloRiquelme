import Header from "../components/Header";
import CardPizza from "../components/CardPizza";
import { pizzas } from "../assets/js/pizzas.js";

const Home = () => {
  return (
    <main>
      <Header />

      <div className="d-flex flex-wrap justify-content-center gap-5 p-5">

        {pizzas.map((pizza) => (
          <CardPizza
            key={pizza.id}
            name={pizza.name}
            price={pizza.price}
            ingredients={pizza.ingredients}
            img={pizza.img}
          />
        ))}

      </div>
    </main>
  );
};

export default Home;
