import { styled } from "styled-components";

export const AppStyleLight = styled.div`
  background-color: hsl(0, 0%, 98%);

`;
export const AppStyleDark = styled.div`
  background-color: hsl(207, 26%, 17%);
  height: 100vh;
`;
export const HeaderStyleLight = styled.div`
  width: auto;
    display: flex;
    justify-content: space-between;
    font-family: 'Nunito Sans', sans-serif;
    background-color: hsl(0, 0%, 98%);
    box-shadow: -1px 1px 2.5px hsl(0, 0%, 52%);
    padding: 0 4rem;
    height: 4.5rem;
    h1{
      font-size: 1.5rem;
    }
    button{
        cursor: pointer;
        background: none;
        border: none;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        svg{
            margin: 1rem;
        }
        h2{
            font-size: 1rem;
            font-weight: 300;
        }
        
    }
    @media screen and (max-width:750px){
      width: 100%;
      align-items: center;
      padding: 0 1px;
      justify-content: space-around;
      h1{
        font-size: .8rem;
        
      }
      button{
        svg{
          margin: .3rem;
        }
        h2{
          font-size: .8rem;
        }
      }
    }
`;

export const HeaderStyleDark = styled.div`
    width: auto;
    display: flex;
    justify-content: space-between;
    font-family: 'Nunito Sans', sans-serif;
    background-color: hsl(209, 23%, 22%);
    color: hsl(0, 0%, 100%);
    box-shadow: 3px 1px 3px hsl(209, 23%, 22%);
    padding: 0 4rem;
    height: 4.5rem;
    h1{
      font-size: 1.5rem;
    }
    button{
        color: hsl(0, 0%, 100%);
        cursor: pointer;
        background: none;
        border: none;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        svg{
            margin: 1rem;
            color: hsl(0, 0%, 100%);
            fill:#ffffff;
        }
        h2{
            font-size: 1rem;
            font-weight: 300;
        }
        
    }
    @media screen and (max-width:750px){
      align-items: center;
      padding: 0 1px;
      justify-content: space-around;
      h1{
        font-size: .8rem;

      }
      button{
        svg{
          margin: .3rem;
        }
        h2{
          font-size: .8rem;
        }
      }
    }
`;