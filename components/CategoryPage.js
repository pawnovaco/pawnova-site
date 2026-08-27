import FindCard from "./FindCard";

export default function CategoryPage({ eyebrow, title, intro, items }) {
  return (
    <>
      <section className="page-hero">
        <div className="container narrow">
          <span className="eyebrow">{eyebrow}</span>
          <h1>{title}</h1>
          <p>{intro}</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="cards-grid">
            {items.map((item) => (
              <FindCard key={item.title} {...item} />
            ))}
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container narrow">
          <h2>How we choose what to feature</h2>
          <p>
            Paw Nova focuses on practical products that solve real pet-owner
            problems, make everyday routines easier, or add a little more
            comfort to life with pets.
          </p>
        </div>
      </section>
    </>
  );
}
