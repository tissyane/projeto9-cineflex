import "./Success.css";

export default function Success() {
  return (
    <>
      <div className="sucess_title">
        <h1>
          Pedido feito <br /> com sucesso!
        </h1>
      </div>
      <div className="title info">
        <p>Filme e sessão</p>
        <div className="sucess_details">
          <h1>Enola Holmes</h1>
          <h1>24/06/2022 - 15:00</h1>
        </div>
      </div>
      <div className="title info">
        <p>Ingressos</p>
        <div className="sucess_details">
          <h1>Assento 12</h1>
          <h1>Assento 13</h1>
        </div>
      </div>
      <div className="title info">
        <p>Comprador</p>
        <div className="sucess_details">
          <h1>Senhor das Estrelas</h1>
          <h1>000.000.000-00</h1>
        </div>
      </div>
      <div className="button">
        <p>Voltar para Home</p>
      </div>
    </>
  );
}
