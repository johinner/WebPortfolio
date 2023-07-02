import styled, { keyframes } from "styled-components";

import Button from "../Button";
import shape from "../../assets/img/shape.png";
import person from "../../assets/img/person.png";

const Section = styled.section`
  min-height: ${(props) => `calc(100vh - ${props.theme.navHeight})`};
  width: 100vw;
  position: relative;
  background-color: ${(props) => props.theme.body};
`;

const Container = styled.div`
  width: 75%;
  min-height: 80vh;
  margin: 0 auto;
  /* background-color: lightblue; */

  display: flex;
  justify-content: space-evenly;
  align-items: center;

  @media (max-width: 64em) {
    width: 85%;
  }
  @media (max-width: 48em) {
    flex-direction: column;
    width: 80%;
    & > *:first-child {
      /*  width: 100%; */
      /*  margin-top: 2rem; */
    }

    @media (max-width: 40em) {
      width: 95%;
    }
  }
`;
const Box = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 48em) {
    margin: 0px 100px;
  }
`;
const rotate = keyframes`
100%{
  transform: rotate(1turn);
}
`;
const Title = styled.h2`
  font-size: ${(props) => props.theme.fontxxl};
  text-transform: capitalize;
  width: 100%;
  color: ${(props) => props.theme.text};
  align-self: flex-start;

  @media (max-width: 70em) {
    font-size: ${(props) => props.theme.fontxl};
  }
  @media (max-width: 48em) {
    /* align-self: center;
    text-align: center; */
  }
  @media (max-width: 40em) {
    width: 90%;
  }
`;

const SubTitle = styled.h3`
  font-size: ${(props) => props.theme.fontlg};
  text-transform: capitalize;
  color: ${(props) => `rgba(${props.theme.textRgba}, 0.6)`};
  font-weight: 600;
  margin: 1rem 0;
  width: 90%;
  align-self: flex-start;

  @media (max-width: 40em) {
    font-size: ${(props) => props.theme.fontmd};
  }

  @media (max-width: 48em) {
  }
`;
const ButtonContainer = styled.div`
  width: 80%;
  align-self: flex-start;

  @media (max-width: 48em) {
    button {
      margin: 0 auto;
    }
  }
`;

const Parallax = styled.div`
  width: 100%;

  img {
    width: 123%;
    transform: translate(15%, 25px);

    @media (max-width: 48em) {
      width: 90%;
      transform: none;
    }
  }
`;

const Footer = styled.div`
  position: relative;

  img {
    width: 60%;
    z-index: 0;
    position: absolute;
    top: -100%;
    opacity: 0.1;

    @media (max-width: 40em) {
      width: 100%;
    }
  }
`;
//Refs React en componentes de clases
/* class Home extends React.Component{

  constructor(props){
    super(props);
    this.referencia = React.createRef();
    this.state ={
     mensaje: ["C","u","r","s","o"," ","d","e"," ","R","e","a","c","t"," ","J","S"," ","b","y"," ","E","W","e","b","i","k"]
    }
  }
   componentDidMount(){  
     let contador = 0;
    let strMensaje = "";
    let mensaje = this.state.mensaje;

    setInterval(()=>{
      strMensaje += mensaje[contador];
      this.referencia.current.innerText = strMensaje;
      contador++;
      if(contador >= mensaje.length){
        strMensaje="";
        contador=0;
      }
    },200); 
    console.log(this.referencia)
  } 

  render(){
    return(
      <div>
        <h1 ref={this.referencia}>Curso de React JS by EWebik</h1>
      </div>
    );
  }
} */

const Home = () => {
  return (
    <Section id="home">
      <Container>
        <Box>
          <Title>hola soy johinner</Title>
          <SubTitle>
            Me gusta hacer cosas divertidas e interactivas con código.
          </SubTitle>
          <ButtonContainer>
            <Button text="Explore" link="#about" />
          </ButtonContainer>
        </Box>
        <Box>
          <Parallax>
            <img src={person} alt="person" />
          </Parallax>
        </Box>
      </Container>

      <Footer>
        <img src={shape} alt="shape" />
      </Footer>
    </Section>
  );
}; 

export default Home;
