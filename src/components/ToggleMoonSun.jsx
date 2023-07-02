import { useContext } from "react";
import styled from "styled-components";
import { UserContext } from "../context/UserContext";
import { dark, light } from "../styles/Themes";

const Container = styled.div`
  height: 100%;
  width: 30%;
  display: grid;
  place-items: start;
  position: relative;
  z-index: 10;
  scale: 0.5;

  @media (max-width: 40em) {
    width: 10%;
    scale: 0.4;
  }
`;

const Checkbox = styled.input`
  display: none;
  &:checked + div {
    background: linear-gradient(to bottom, #036daf, #003d63);

    &:before {
      transform: translateX(280%);
    }
    &:after {
      transform: translateX(480%);
    }
    & > *:nth-child(2) {
      transform: rotate(10deg);
      top: 20%;
    }
    & > *:nth-child(3) {
      background-color: #05021a;
      bottom: -210%;
    }
    & > *:nth-child(4) {
      background-color: #05021a;
      transform: translateY(100%);
    }
  }
`;

const Toggle = styled.div`
  height: 80px;
  width: 200px;
  border-radius: 9999px;
  background: linear-gradient(to bottom, #6ec8ff, #1f73a7);
  position: relative;
  overflow: hidden;
  cursor: pointer;

  /* box-shadow: 0px 0px 10px 4px rgba(0, 0, 0, 0.61); */
  filter: drop-shadow(-3px -3px 2px rgba(255, 255, 255, 0.3))
    drop-shadow(5px 5px 5px rgba(0, 0, 0, 0.2))
    drop-shadow(15px 15px 15px rgba(0, 0, 0, 0.2));

  &:before {
    content: "";
    height: 40px;
    width: 40px;
    position: absolute;
    top: 10%;
    right: 30%;
    border-radius: 50%;
    background-color: #ffd34d;
    transition: all 0.5s ease-in-out;
    box-shadow: 0 0 15px #fef95fc3;
  }

  &:after {
    content: "";
    height: 35px;
    width: 35px;
    position: absolute;
    top: 10%;
    left: -60%;
    border-radius: 50%;
    background-color: #ffffff;
    transition: all 0.5s ease-in-out;
    box-shadow: 0 0 10px #ffffff88;
  }
`;

const Cloud = styled.div`
  height: 8px;
  width: 18px;
  border-radius: 9999px;
  background-color: rgb(255, 255, 255);
  position: absolute;
  top: 20%;
  left: 10%;
  filter: opacity(0.5);

  &:before {
    content: "";
    height: 10px;
    width: 10px;
    border-radius: 50%;
    background-color: rgb(255, 255, 255);
    position: absolute;
    top: -50%;
    right: 50%;
    transform: translateX(50%);
  }
`;
const Star = styled.div`
  height: 2px;
  width: 2px;
  position: absolute;
  top: -50%;
  right: 15%;
  background-color: #fff;
  transition: all 0.5s ease-in-out;
  filter: blur(0.8px);
  border-radius: 50%;

  &:before {
    content: "";
    height: 100%;
    width: 100%;
    position: absolute;
    top: -50%;
    right: 20px;
    background-color: #fff;
    transition: all 0.5s ease-in-out;
    border-radius: 50%;
  }

  &:after {
    content: "";
    height: 100%;
    width: 100%;
    position: absolute;
    top: 10px;
    right: -20px;
    background-color: #fff;
    transition: all 0.5s ease-in-out;
    border-radius: 50%;
  }
`;

const Sea = styled.div`
  height: 200px;
  width: 300%;
  border-radius: 50%;
  position: absolute;
  right: 50%;
  bottom: -500%;
  transform: translateX(50%);
  transition: all 0.5s ease-in-out;
  background: linear-gradient(
    to bottom,
    #3f75cc,
    #06063b,
    #06063b,
    #06063b,
    #06063b
  );

  &:before {
    content: "";
    height: 25px;
    width: 15px;
    background-color: rgba(254, 254, 254, 0.34);
    filter: blur(5px);
    position: absolute;
    top: 2%;
    left: 43%;
  }
`;

const Mountains = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  z-index: 3;
  background-color: #1d7371;
  transition: all 0.5s ease-in-out;
  clip-path: polygon(
    0% 80%,
    25% 50%,
    40% 70%,
    60% 35%,
    65% 45%,
    80% 20%,
    100% 80%,
    100% 100%,
    0% 100%
  );
`;

const ToggleMoonSun = () => {
  const { setTheme } = useContext(UserContext);

  const toggleAnimation = (event) =>
    event.target.checked ? setTheme(dark) : setTheme(light);

  return (
    <Container>
      <div>
        <label for="checkbox">
          <Checkbox
            onChange={toggleAnimation}
            type="checkbox"
            name=""
            id="checkbox"
          />
          <Toggle>
            <Cloud />
            <Star />
            <Sea />
            <Mountains />
          </Toggle>
        </label>
      </div>
    </Container>
  );
};

export default ToggleMoonSun;
