import search from "../img/search.png"
import { styled } from "styled-components";
export const DivButton = styled.div`
    #icon-arrow{
        position: absolute;
        z-index: 4;
        margin-left: 5.5rem;
        margin-top: 4.5rem;
    }
    
    @media screen and (max-width:750px){
    #icon-arrow{
        margin-top: 1.5rem;
        margin-left: 3rem
    }
   
 }
`;
export const OpenModalLight = styled.button`
 width: 7rem;
 height: 2rem;
 margin-top: 4rem;
 margin-left: 5rem;
 border:none;
 box-shadow: 1px 1px 2.5px 1px hsl(0, 0%, 52%);
 background: none;
 cursor: pointer;
 @media screen and (max-width:750px){
    margin-top: 1rem;
    padding-top: 2px;
    margin-left: -2rem;
 }
`;
export const OpenModalDark = styled.button`
 width: 7rem;
 height: 2rem;
 margin-top: 4rem;
 margin-left: 5rem;
 border:none;
 background: hsl(209, 23%, 22%);
 cursor: pointer;
 color:  hsl(0, 0%, 100%);
 box-shadow: 1px 1px 2.5px 1px hsl(209, 23%, 22%);
 @media screen and (max-width:750px){
    margin-top: 1rem;
    margin-left: 2rem;
 }
`;

export const ListaStyleLight = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    padding:1rem 0rem;
    font-family: 'Nunito Sans', sans-serif;
    #filtragem{
        width: 100%;
        display: block;
        height: 3rem;
        div{
            display: flex;
            justify-content: space-between;
            div{
                display: inline-block;
                padding: 0 2rem;

            }
            
            select{
                width: 10rem;
                height: 3rem;
                border-radius: 6px;
                border: none;
                -webkit-border-before: none;
                box-shadow: 1px 1px 6px 1px hsl(0, 0%, 52%);
                font-size: 1rem;
                font-family: 'Nunito Sans', sans-serif;
                padding:.4rem;
                background-color: hsl(0, 0%, 98%);
            }
            .icon-search{
                font-size: 1rem;
                position: absolute;
                padding: .8rem .4rem;
                height: 1.2rem;
                width: 1.2rem;
                color:hsl(0, 0%, 52%);
                
            }
            input{
                width: 30rem;
                height: 3rem;
                border-radius: 6px;
                border: none;
                box-shadow: 1px 1px 6px 1px hsl(0, 0%, 52%);
                text-decoration: none;
                padding: 1.2rem 2rem;
                font-size: 1.2rem;
                font-family: 'Nunito Sans', sans-serif;
                background-image: url("../img/search.png");
                background-repeat: no-repeat;
                background-position: 10px center;
                background-size: 20px;
                background-color: hsl(0, 0%, 98%);
            }
            
        }
    }
    @media screen and (max-width:750px){
        #filtragem{
            height: 10rem;
            padding: 0;
            div{
                display: block;
                margin: 1rem 0;
                select{
                    width: 14rem;
                    margin: .1rem auto;
                    font-size: .8rem;
                }
                input{
                    width: 20rem;
                }
            }
        }
    }
`;
export const ListaStyleDark = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    padding:1rem 0rem;
    font-family: 'Nunito Sans', sans-serif;
    #filtragem{
        width: 100%;
        display: block;
        height: 3rem;
        div{
            display: flex;
            justify-content: space-between;
            div{
                display: inline-block;
                padding: 0 2rem;

            }
            select{
                width: 10rem;
                height: 3rem;
                border-radius: 6px;
                border: none;
                -webkit-border-before: none;
                box-shadow: 1px 1px 6px 1px hsl(209, 20%, 21%);
                font-size: 1rem;
                font-family: 'Nunito Sans', sans-serif;
                padding:.4rem;
                background-color: hsl(209, 23%, 22%);
                color: hsl(0, 0%, 100%);
            }
            .icon-search{
                font-size: 1rem;
                position: absolute;
                padding: .8rem .4rem;
                height: 1.2rem;
                width: 1.2rem;
                color:hsl(0, 0%, 52%);
                
            }
            input{
                width: 30rem;
                height: 3rem;
                border-radius: 6px;
                border: none;
                box-shadow: 1px 1px 6px 1px hsl(209, 20%, 21%);
                text-decoration: none;
                padding: 1.2rem 2rem;
                font-size: 1.2rem;
                font-family: 'Nunito Sans', sans-serif;
                background-image: url("../img/search.png");
                background-repeat: no-repeat;
                background-position: 10px center;
                background-size: 20px;
                background-color: hsl(209, 23%, 22%);
                color: hsl(0, 0%, 100%);
            }
            
        }
    }
    @media screen and (max-width:750px){
        #filtragem{
            height: 10rem;
            padding: 0;
            div{
                display: block;
                margin: 1rem 0;
                select{
                    width: 14rem;
                    margin: .1rem auto;
                    font-size: .8rem;
                }
                input{
                    width: 20rem;
                }
            }
        }
    }
    
`;
export const BoxLight = styled.div`
    &:hover{
        transition: 1s;
        transform: translatey(-1rem);
        cursor: pointer;
    }
    transition: 1s;
    background-color: hsl(0, 0%, 98%);
    border-radius: 6px;
    flex-basis: 20%;
    height: 21rem;
    margin: 2rem;
    box-shadow: 3px 3px 11px 1px hsl(0, 0%, 52%);
    #img{
        width: 100%;
        height: 50%;
        img{
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: 6px 6px 0 0;
        }
    }
    #informacao{
        padding: 0 1rem;
        height: 50%;
        h1{
            font-size: 1.5rem;
        }
        p{
            color: hsl(200, 15%, 8%);
            padding:0;
            margin:3px 0;
            span{
                color: hsl(0, 0%, 52%);
            }
        }
    }
    @media screen and (max-width:750px){
        flex-basis: 80%;
        margin: 2rem;
        padding: 0;
        #informacao{
            h1{
                font-size: 1rem;
            }
            p{
                font-size: .8rem;
            }
        }
    }
    @media screen and (min-width:1000px){
        flex-basis: 20%;
    }
`;

export const BoxDark = styled.div`
     &:hover{
        transition: 1s;
        transform: translatey(-1rem);
        cursor: pointer;
    }
    transition: 1s;
    background-color: hsl(209, 23%, 22%);
    border-radius: 6px;
    flex-basis: 20%;
    height: 21rem;
    margin: 2rem;
    /* box-shadow: -4px 4px 12px -2px hsl(209, 23%, 22%); */
    border: 4px solid hsl(209, 20%, 21%);
    #img{
        width: 100%;
        height: 50%;
        img{
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: 6px 6px 0 0;
        }
    }
    #informacao{
        padding: 0 1rem;
        height: 50%;
        h1{
            font-size: 1.5rem;
            color: hsl(0, 0%, 100%);
        }
        p{
            color: hsl(0, 0%, 100%);
            padding:0;
            margin:3px 0;
            span{
                color: hsl(0, 0%, 52%);
            }
        }
        select{
            box-shadow: 1px 1px 6px 1px hsl(209, 20%, 21%);
        }
        input{
            

        }
    }
    @media screen and (max-width:750px){
        flex-basis: 80%;
        margin: 2rem;
        padding: 0;
        #informacao{
            h1{
                font-size: 1rem;
            }
            p{
                font-size: .8rem;
            }
        }
    }
    @media screen and (min-width:1000px){
        flex-basis: 20%;
    }
`;