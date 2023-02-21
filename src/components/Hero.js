import { Link } from "react-router-dom"

export default function Hero(props) {

  return (
    <section id="hero">
      <div className="hero-text">
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim expedita exercitationem molestias aspernatur, harum atque et rerum, facilis itaque provident reiciendis deleniti soluta nesciunt sint repellendus! Culpa error officia dicta.</p>
       <Link to="/booking" onClick={props.clearFormData}> <button className="button-primary" aria-label="Table Booking">Book a table</button></Link>
      </div>
      <img className="box-shadow" src="/hero.jpg" alt=""></img>
    </section>
  )
}