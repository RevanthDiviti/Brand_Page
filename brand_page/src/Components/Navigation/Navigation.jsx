import "./Navigation.css";

const Navigation = () => {
  return (
    <nav className="container">
      <div className="logo">
        <img src="../public/images/brand_logo.png" alt="" />
      </div>
      <ul>
        <li href="#">HOME</li>
        <li href="#">LOCATION</li>
        <li href="#">ABOUT</li>
        <li href="#">CONTACT</li>
      </ul>
      <button>Login</button>
    </nav>
  );
};
export default Navigation;
