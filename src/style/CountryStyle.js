import { styled } from "styled-components";

export const CountyStyleLight = styled.div`
    font-family: 'Nunito Sans', sans-serif;
    z-index: 3;
    background-color: hsl(0, 0%, 98%);
    display: flex;
    justify-content: center;
    padding: 2rem 5rem;
    overflow-y: hidden;
    #img{
        width: 50%;
        margin: auto;
    }
    img{
        width: 80%;
    }
    #informacao{
        width: 50%;
        span{
            color:hsl(0, 0%, 52%);
        }
        h1{
            margin-bottom: 2rem;
            display: inline-block;
            
        }
        #propriedades{
            display: flex;
            justify-content: left;
            .curiosidades{
                width: 50%;
            }
        }
        #borderCountries{
            display: inline-block;
            
        }
        .border{
                display: inline-block;
                color:hsl(0, 0%, 52%);
                border-radius: 3px;
                box-shadow: 1px 1px 2.5px 1px hsl(0, 0%, 52%);
                margin: .5rem .5rem;
                height: 2rem;
                padding: .4rem;
                box-sizing: border-box;
                align-items: center;
                width: 4rem;
                text-align: center;
            }
    }
    @media screen and (max-width:750px){
        display: block;
        padding: 1.5rem 1rem;
        #img{
            width: 100%;
        }
        img{
            width: 100%;
        }
        #informacao{
            width: 100%;
            text-align: left;
            h1{
                font-size: 1.5rem;
                margin-bottom: 0;
            }
            #propriedades{
                display: block;
                .curiosidades{
                    width: 100%;
                    padding-top:1rem ;
                }
            }
            #borderCountries{
                display: block;
            }
            .border{
                display: block;
            }
        }
    }
`;

export const CountyStyleDark = styled.div`
    font-family: 'Nunito Sans', sans-serif;
    z-index: 3;
    background-color: hsl(207, 26%, 17%);
    display: flex;
    justify-content: center;
    padding: 2rem 5rem;
    overflow-y: hidden;
    #img{
        width: 50%;
    }
    img{
        width: 80%;
        box-shadow: 1px 1px 2.5px 1px hsl(209, 23%, 22%);
        top: 2rem
    }
    #informacao{
        color:  hsl(0, 0%, 100%);
        width: 50%;
        span{
            color:hsl(0, 0%, 52%);
        }
        h1{
            margin-bottom: 2rem;
            display: inline-block;
            
        }
        #propriedades{
            display: flex;
            justify-content: left;
            .curiosidades{
                width: 50%;
            }
        }
        #borderCountries{
            display: inline-block;
            
        }
        .border{
                display: inline-block;
                color:hsl(0, 0%, 52%);
                border-radius: 3px;
                box-shadow: 1px 1px 2.5px 1px hsl(209, 23%, 22%);
                margin: .5rem .5rem;
                height: 2rem;
                padding: .4rem;
                box-sizing: border-box;
                align-items: center;
                width: 4rem;
                text-align: center;
            }
    }
    @media screen and (max-width:750px){
        display: block;
        padding: 1.5rem 1rem;
        #img{
            width: 100%;
        }
        img{
            width: 100%;
        }
        #informacao{
            width: 100%;
            text-align: left;
            h1{
                font-size: 1.5rem;
                margin-bottom: 0;
            }
            #propriedades{
                display: block;
                .curiosidades{
                    width: 100%;
                    padding-top:1rem ;
                }
            }
            #borderCountries{
                display: block;
            }
            .border{
                display: block;
            }
        }
    }
`;