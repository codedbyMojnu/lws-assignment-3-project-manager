export default function Panel({ title, children, isActive, onSmash }) {
  return (
    <section className="panel">
      <h3>{title}</h3>
      {isActive ? <p>{children}</p> : <button onClick={onSmash}>Show</button>}
    </section>
  );
}
