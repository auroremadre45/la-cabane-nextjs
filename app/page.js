import Image from "next/image";

// Edit the restaurant details here.
const PHONE_DISPLAY = "+230 5711 4817";
const PHONE_LINK = "tel:+23057114817";
const WHATSAPP_LINK = "https://wa.me/23057114817";
const MAPS_LINK = "https://maps.google.com/?cid=2044237961476878193";
const ADDRESS = "[Street name or landmark], Grand Baie, Mauritius";
const FACEBOOK = "#"; // add the Facebook page link
const INSTAGRAM = "#"; // add the Instagram link

const dishes = [
  { img: "grilled-fish", alt: "Grilled fish with salad and rice", name: "Grilled fresh fish", text: "Catch of the day, perfectly seasoned, served with rice and a crisp salad." },
  { img: "fish-curry", alt: "Mauritian fish curry", name: "Fish curry", text: "Tender fish simmered slowly in a warm, golden Mauritian masala sauce." },
  { img: "mine-frit", alt: "Mine frit, Mauritian fried noodles", name: "Mine frit", text: "Wok-fried noodles with fresh vegetables, a Mauritian street-food favourite." },
  { img: "chicken-curry", alt: "Chicken curry with rice", name: "Chicken curry & rice", text: "Home-style chicken curry with fluffy rice, just like a family kitchen." },
];

const reasons = [
  { title: "Cooked fresh, with care", text: "Our fish and curries are prepared to order, never rushed, and never overcooked." },
  { title: "Clean, calm and welcoming", text: "A tidy, airy place where you can relax, with a warm welcome from the first minute." },
  { title: "Fair prices, generous plates", text: "Authentic local food at honest prices, so everyone leaves happy and full." },
];

export default function Home() {
  return (
    <>
      <header className="hero">
        <div className="wrap">
          <p className="name">La Cabane Mauricienne · Grand Baie, Mauritius</p>
          <h1>Real Mauritian home cooking, made with love.</h1>
          <p className="lead">
            Fresh fish, fragrant curries and generous plates, cooked by Tania in a clean, airy little hut in the heart of
            Grand Baie. Come as a guest, leave like family.
          </p>
          <div className="btns">
            <a className="btn call" href={PHONE_LINK}>Call to order: {PHONE_DISPLAY}</a>
            <a className="btn wa" href={WHATSAPP_LINK}>Order on WhatsApp</a>
            <a className="btn map" href={MAPS_LINK}>Get directions</a>
          </div>
          <div className="facts">
            <span>Rated 5.0 on Google</span>
            <span>Open every day, 9am to 11pm</span>
            <span>Dine in or take away</span>
          </div>
        </div>
      </header>

      <main>
        <section id="menu">
          <div className="wrap">
            <h2>Our most-loved plates</h2>
            <p className="sub">
              Simple, honest dishes cooked fresh to order. Call us to ask about today’s catch and to place your order.
            </p>
            <div className="grid">
              {dishes.map((d) => (
                <article className="dish" key={d.img}>
                  <Image src={`/dishes/${d.img}.jpg`} alt={d.alt} width={560} height={560} />
                  <div>
                    <h3>{d.name}</h3>
                    <p>{d.text}</p>
                  </div>
                </article>
              ))}
            </div>
            <p className="note">
              Images for illustration. View prices at the menu. Ask about our infused rum tasting. Menu and availability
              may change, so please call to confirm.
            </p>
          </div>
        </section>

        <section className="why">
          <div className="wrap">
            <span className="badge">5.0 stars from 50 Google reviews</span>
            <h2>Why La Cabane Mauricienne?</h2>
            <p className="sub">Guests keep coming back for the same few reasons.</p>
            <ul>
              {reasons.map((r) => (
                <li key={r.title}>
                  <h3>{r.title}</h3>
                  <p>{r.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="contact">
          <div className="wrap">
            <h2>Order or come visit</h2>
            <p className="sub">
              The fastest way to order is a quick phone call or a WhatsApp message. Takeaway is available. Delivery:
              [confirm with the restaurant].
            </p>
            <div className="contact">
              <div>
                <h3>Phone</h3>
                <a className="big" href={PHONE_LINK}>{PHONE_DISPLAY}</a>
              </div>
              <div>
                <h3>Address</h3>
                <p>La Cabane Mauricienne<br />{ADDRESS}<br />Plus code: XHMF+W7P</p>
                <p><a href={MAPS_LINK}>Open in Google Maps</a></p>
              </div>
              <div>
                <h3>Opening hours</h3>
                <p>Monday to Sunday<br />9:00 am to 11:00 pm</p>
              </div>
              <div>
                <h3>Follow us</h3>
                <p>
                  <a href={FACEBOOK}>Facebook [add link]</a><br />
                  <a href={INSTAGRAM}>Instagram [add link]</a>
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="wrap">© La Cabane Mauricienne, Grand Baie. Authentic Mauritian food, made with love.</div>
      </footer>
    </>
  );
}
