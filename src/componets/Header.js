export default function HeaderdarkBootstrap({ children }) {
  return (
    <header>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 bg-dark text-light text-center">
            <h1>{children}</h1>
          </div>
        </div>
      </div>
    </header>
  );
}
