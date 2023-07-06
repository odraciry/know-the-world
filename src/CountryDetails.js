import { useEffect, useState } from "react"
import { CountyStyleDark, CountyStyleLight } from "./style/CountryStyle"

export const CountryDetails = (props) => {
    const [display, setDisplay] = useState()
    const [open, setOpen] = useState(props.open)
    useEffect(() => { console.log(props) }, [open])
    if (!props.open) {
        return
    } else if (!props.darkMode) {
        return (
            <CountyStyleLight>
                <div id='img'>
                    <img src={props.country?.flags.svg} />
                </div>
                <div id="informacao">
                    <h1>{props.country?.name}</h1>
                    <div id="propriedades">
                        <div className="curiosidades">
                            <p>Native Name: <span>{props.country?.nativeName}</span></p>
                            <p>Population: <span>{props.country?.population}</span></p>
                            <p>Region:<span> {props.country?.region}</span></p>
                            <p>Sub Region:<span> {props.country?.subregion}</span></p>
                            <p>Capital: <span>{props.country?.capital}</span></p>
                        </div>
                        <div className="curiosidades">
                            <p>Top Level Domais: <span>{props.country?.topLevelDomain[0]}</span></p>
                            <p>Currencies: <span>{props.country?.currencies.map((currencie) => currencie.name)}</span></p>
                            <p>Languages: <span>{props.country?.languages.map((l) => l.name)}</span></p>
                        </div>
                    </div>
                    <p id="BorderCountries">Border Countries: {props.country?.borders.map((border) => <div className="border">{border}</div>)}</p>
                </div>
            </CountyStyleLight>
        )
    } else if (props.darkMode) {
        return (
            <CountyStyleDark>
                <div id='img'>
                    <img src={props.country?.flags.svg} />
                </div>
                <div id="informacao">
                    <h1>{props.country?.name}</h1>
                    <div id="propriedades">
                        <div className="curiosidades">
                            <p>Native Name: <span>{props.country?.nativeName}</span></p>
                            <p>Population: <span>{props.country?.population}</span></p>
                            <p>Region:<span> {props.country?.region}</span></p>
                            <p>Sub Region:<span> {props.country?.subregion}</span></p>
                            <p>Capital: <span>{props.country?.capital}</span></p>
                        </div>
                        <div className="curiosidades">
                            <p>Top Level Domais: <span>{props.country?.topLevelDomain[0]}</span></p>
                            <p>Currencies: <span>{props.country?.currencies.map((currencie) => currencie.name)}</span></p>
                            <p>Languages: <span>{props.country?.languages.map((l) => l.name)}</span></p>
                        </div>
                    </div>
                    <p id="BorderCountries">Border Countries: {props.country?.borders.map((border) => <div className="border">{border}</div>)}</p>
                </div>
            </CountyStyleDark>
        )
    }

}