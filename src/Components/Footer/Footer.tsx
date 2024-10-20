import {Container} from "../Layout";
import "./style.css"
export default function Footer() {
  const handleScrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Para um efeito de rolagem suave
    });
};
  return (
    <>
        <div id="Footer">
            <div className="location">
                <div><a onClick={handleScrollToTop}>VOLTAR AO TOPO</a></div>
            </div>
            <h1>Onde nos encontrar</h1>

            <Container>

                    <div className="box">
                      <Container>
                          <img src="/Home/iconFertilizantes.png" alt="logo"/>
                            <div className="info-box">
                              <h2>WhatsApp</h2>
                              <a>+55 11 9988-7766</a>
                            </div>
                      </Container>
                      <Container>
                          <img src="/Home/iconFertilizantes.png" alt="logo"/>
                          <div className="info-box">
                              <h2>Email</h2>
                              <a>lorem@gmail.com</a>
                            </div>
                      </Container>
                      <Container>
                          <img src="/Home/iconFertilizantes.png" alt="logo"/>
                          <div className="info-box">
                              <h2>Linkedin</h2>
                              <a>Berzan Agro</a>
                            </div>
                      </Container>
                    </div>
          
            </Container>
            <span>Berzan Produtos Agropecuários LTDA Copyrihts 2024</span>

      
        </div>
    </>
  );
}