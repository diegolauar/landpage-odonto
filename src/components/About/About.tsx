export function About() {
  return (
    <section id="sobre" className="container section about">
      <div className="about-media">
        <div className="foto">Foto da clínica / recepção</div>
        <div className="col">
          <div className="foto">Foto de profissional</div>
          <div className="badge-dark">
            <p className="script">Sorrisos que</p>
            <p>TRANSFORMAM</p>
          </div>
        </div>
      </div>
      <div className="about-text">
        <span className="eyebrow">SOBRE A CLÍNICA</span>
        <h2 className="h2">
          Cuidamos do seu sorriso com atenção em cada detalhe.
        </h2>
        <p className="lead">
          A Odonto Vianópolis nasceu com o propósito de oferecer uma
          experiência odontológica mais acolhedora, moderna e personalizada.
          Nossa equipe trabalha para proporcionar segurança, conforto e
          excelência em cada atendimento.
        </p>
        <p className="lead">
          Do primeiro contato ao acompanhamento após o tratamento, você é
          atendido sem pressa, com explicações claras e um plano feito para o
          seu caso.
        </p>
        <a href="#galeria" className="link-line">
          Conheça a clínica →
        </a>
      </div>
    </section>
  );
}
