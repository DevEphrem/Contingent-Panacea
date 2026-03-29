export const Section = ({ children, id, className = "" }) => (
  <section id={id} className={`section ${className}`}>
    <div className="container-max">{children}</div>
  </section>
);
