import { Container, Row, Col } from "react-bootstrap";

import perfil1 from "../../assets/img/pessoas/p_1.jpg";
import perfil2 from "../../assets/img/pessoas/p_2.jpg";
import perfil3 from "../../assets/img/pessoas/p_3.jpg";
import perfil4 from "../../assets/img/pessoas/p_4.jpg";
import perfil5 from "../../assets/img/pessoas/p_5.jpg";
import estrelaVerde from "../../assets/img/estrelaVerde.svg";
import estrelaBranca from "../../assets/img/estrelaBranca.svg";

import "./style.css";

export function Banner() {
  return (
    <Container fluid id="container-banner">
      <Row className="bg-dark">
        <Col className="linear-background">
          <Container className="conteudo-banner mt-5">
            <Row className="mb-5">
              <Col lg={6} className="p-4">
                <p tabIndex={0} id="titulo-banner">
                  Os melhores passeios gastronômicos e pontos turísticos da{" "}
                  <span>serra</span>.
                </p>
                <p tabIndex={0} id="texto-banner">
                  A Região Serrana do Rio de Janeiro é um dos destinos
                  turísticos mais procurados do Brasil por sua beleza natural,
                  clima agradável e aconchegante, além de oferecer diversas
                  atividades de lazer para os visitantes.
                </p>
                <Row>
                  <Col className="container-pessoas d-flex flex-direction-row gap-1 mt-3">
                    <img src={perfil1} alt="Foto usuário perfil rede social" />
                    <img src={perfil2} alt="Foto usuário perfil rede social" />
                    <img src={perfil3} alt="Foto usuário perfil rede social" />
                    <img src={perfil4} alt="Foto usuário perfil rede social" />
                    <img src={perfil5} alt="Foto usuário perfil rede social" />
                  </Col>
                  <Col className="container-avaliacao d-flex flex-direction-row justify-content-between aling-items-center flex-wrap">
                    <img src={estrelaVerde} alt="Estrela ilustrativa avaliação" />
                    <span tabIndex={0} className="span">Avaliações</span>
                    <div className="d-flex flex-direction-row align-items-center gap-1">
                      <div className="background-estrela">
                        <img src={estrelaBranca} alt="Estrela ilustrativa avaliação" />
                      </div>
                      <div className="background-estrela">
                        <img src={estrelaBranca} alt="Estrela ilustrativa avaliação" />
                      </div>
                      <div className="background-estrela">
                        <img src={estrelaBranca} alt="Estrela ilustrativa avaliação" />
                      </div>
                      <div className="background-estrela">
                        <img src={estrelaBranca} alt="Estrela ilustrativa avaliação" />
                      </div>
                      <div className="background-estrela">
                        <img src={estrelaBranca} alt="Estrela ilustrativa avaliação" />
                      </div>
                    </div>
                    <span tabIndex={0} className="span">4.5 / 5</span>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </Col>
      </Row>
    </Container>
  );
}
