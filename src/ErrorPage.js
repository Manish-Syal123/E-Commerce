import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Button } from "./styles/Button";
import videoBg from "./styles/videos/videoBg.mp4";

const ErrorPage = () => {
  return (
    <Wrapper>
      <div className='main'>
        <div className="overlay"></div>
        <video src={videoBg} autoPlay loop muted />

        <div className="container">
          <div>
            <h2>404</h2>
            <h3>Uh OH!! 😮 you are lost 😵</h3>
            <p>
            The page you are looking for does not exist. How you got here is a
            mystery. But you can click the button below to go back to the
            homepage.
          </p>

          <NavLink to="/">
            <Button>Go Back to Home</Button>
          </NavLink>
          </div>
        </div>

    </div>   
    </Wrapper>
  )
}

const Wrapper = styled.section`
  .container {
    position: relative;
    top: -900px;
    padding: 9rem 0;
    text-align: center;
    h2 {
      font-size: 10rem;
      color: white;
    }
    h3 {
      color: aqua;
      font-size: 4.5rem;
    }
    p {
      font-family: 'Hanalei Fill', cursive;
      color: white;
      margin: 2rem 0;
    }
  }
  
  .main {
    width: 100%;
    height: 100vh;
  }
  
  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,.4);
    /* background-color: #000000cc; */
  }
`;

export default ErrorPage
