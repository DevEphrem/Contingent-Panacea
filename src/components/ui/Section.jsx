



export const Section = ({ children, id, className = "" }) => (
  <section
    id={id}
    className={`py-24 px-6 md:px-12 lg:px-20 overflow-hidden ${className}`}
  >
    <div className="max-w-7xl mx-auto">{children}</div>
  </section>
);
