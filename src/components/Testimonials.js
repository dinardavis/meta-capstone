import { MdStarRate } from "react-icons/md";

export default function Testimonials() {

  return (
    <section id="reviews">
      <h1>Testimonials</h1>
      <div className="review-cards">
        <article className="review-card">
          <div className="review-header">
            <img src="/carlos.jpg" alt="" />
            <p className="review-name">Carlos</p>
          </div> 
          <div className="review-stars">
            <h3>Rating</h3>
            <MdStarRate />
            <MdStarRate />
            <MdStarRate />
            <MdStarRate />
            <MdStarRate />
          </div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </article>

        <article className="review-card">
          <div className="review-header">
            <img src="/justine.jpg" alt="" />
            <p className="review-name">Justine</p>
          </div> 
          <div className="review-stars">
            <h3>Rating</h3>
            <MdStarRate />
            <MdStarRate />
            <MdStarRate />
            <MdStarRate />
            <MdStarRate />
          </div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </article>

        <article className="review-card">
          <div className="review-header">
            <img src="/david.jpg" alt="" />
            <p className="review-name">David</p>
          </div> 
          <div className="review-stars">
            <h3>Rating</h3>
            <MdStarRate />
            <MdStarRate />
            <MdStarRate />
            <MdStarRate />
            <MdStarRate />
          </div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </article>

        <article className="review-card">
          <div className="review-header">
            <img src="/becky.jpg" alt="" />
            <p className="review-name">Becky</p>
          </div> 
          <div className="review-stars">
            <h3>Rating</h3>
            <MdStarRate />
            <MdStarRate />
            <MdStarRate />
            <MdStarRate />
            <MdStarRate />
          </div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </article>
      </div>
    </section>
  )
}