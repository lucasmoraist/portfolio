import styled from "styled-components";

const CardStyled = styled.div`
  margin: 30px 0;

  .card {
    border-radius: 18px;
    background-color: var(--card-color);
    display: flex;
    flex-direction: column;
    width: 280px;
    height: 100%;
    cursor: pointer;
  }

  img {
    border-radius: 18px 18px 0 0;
  }

  .img-projeto {
    width: 100%;
    height: 175px;
  }

  .know-more {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 10px 25px;
  }

  .know-more div p {
    font-family: var(--poppins);
    font-weight: 300;
    font-size: 10px;
    color: var(--secondary-text);
  }

  .know-more div h2 {
    font-family: var(--poppins);
    font-weight: bold;
    font-size: 17px;
    color: var(--primary-color);
  }

  .description-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .description-wrapper p {
    font-size: 14px;
    font-family: var(--poppins);
    font-weight: 600;
    color: var(--secondary-text);
    margin-top: 20px;
    width: 220px;
  }

  a {
    text-decoration: none;
    font-size: 19px;
    font-family: var(--poppins);
    font-weight: 800;
    background: var(--orange-gradient);
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .btn {
    display: flex;
    width: 134px;
    height: 34px;
    border-radius: 10px;
    align-items: center;
    justify-content: center;
    background-color: var(--primary-color);
    margin: 15px 0 30px 30px;
  }
`;

export default CardStyled;
