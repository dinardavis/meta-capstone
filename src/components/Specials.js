import { MdDeliveryDining } from "react-icons/md";

export default function Specials() {

  return (
    <section id="menu">
      <div className="menu-header">
        <h1>Specials</h1>
        <button className="button-primary" aria-label="On Click">Online Menu</button>
      </div>
      <div className="specials-cards">
        <article className="specials-card box-shadow">
          <img src="/salad.jpg" alt="" />
          <div className="specials-text">
            <div className="specials-header">
              <h3>Greek Salad</h3>
              <h4>$12.99</h4>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore magnam dolor ipsum eos odit id quo autem iste beatae nesciunt!</p>
            <div className="order-delivery">
              <h5>Order a delivery</h5><MdDeliveryDining />
            </div>
          </div>
        </article>

        <article className="specials-card box-shadow">
          <img src="/bruchetta.jpg" alt="" />
          <div className="specials-text">
            <div className="specials-header">
              <h3>Bruchetta</h3>
              <h4>$15.99</h4>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore magnam dolor ipsum eos odit id quo autem iste beatae nesciunt!</p>
            <div className="order-delivery">
              <h5>Order a delivery</h5><MdDeliveryDining />
            </div>
          </div>
        </article>

        <article className="specials-card box-shadow">
          <img src="/lemon.jpg" alt="" />
          <div className="specials-text">
            <div className="specials-header">
              <h3>Lemon Pie</h3>
              <h4>$8.99</h4>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore magnam dolor ipsum eos odit id quo autem iste beatae nesciunt!</p>
            <div className="order-delivery">
              <h5>Order a delivery</h5><MdDeliveryDining />
            </div>
          </div>
        </article>
      </div>
    </section>
  )
}