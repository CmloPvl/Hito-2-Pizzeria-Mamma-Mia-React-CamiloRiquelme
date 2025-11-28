import "../components/Header.css";
import headerImg from "../assets/imgs/Header.jpg";

const headerStyle = {
  backgroundImage: `linear-gradient(
      rgba(0, 0, 0, 0.55),
      rgba(0, 0, 0, 0.55)
    ), url(${headerImg})`,
  backgroundSize: "cover",
  backgroundPosition: "top",
  padding: "120px 20px",
  color: "white",
  textShadow: "0 0 5px rgba(0, 0, 0, 0.9)",
};

const Header = () => {
  return (
    <header className="header text-center" style={headerStyle}>
      <h1 className="fw-bold">Pizzería Mamma Mia!</h1>
      <p className="fs-5">¡Tenemos las mejores pizzas que podrás encontrar!</p>
      <hr className="mt-4 border-light w-50" />
    </header>
  );
};

export default Header;
