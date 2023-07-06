import { useEffect, useState } from 'react';
import data from './data.json'
import { BoxDark, BoxLight, ListaStyleLight, ListaStyleDark, OpenModal, OpenModalLight, OpenModalDark, DivButton } from './style/ListStyle';
import { FaSearch } from 'react-icons/fa';
import { RiArrowLeftLine } from 'react-icons/ri'
import { CountryDetails } from './CountryDetails';

export const List = (props) => {
    const lista = data;
    const [region, setRegion] = useState("")
    const [countries, setCountries] = useState(data)
    const [paisesFiltrados, setPaisesFiltrados] = useState();

    const [cloneCountries, setCloneCountries] = useState(countries);
    const [busca, setBusca] = useState('')
    const [paisDetalhes, setPaisDetalhes] = useState({})
    const [open, setOpen] = useState(false)
    const handleCloseModal = () => {
        setOpen(false)
    }
    const handleDetalhes = (value) => {
        setPaisDetalhes(value)
    }
    useEffect(() => {
        setPaisesFiltrados(cloneCountries)
        console.log(busca)
        console.log(countries.filter((pais) => pais.name.toLowerCase().includes(busca.toLowerCase())))
        setCloneCountries(countries.filter((pais) => pais.name.toLowerCase().includes(busca.toLowerCase())))
        console.log(typeof paisDetalhes)
    }, [region, busca, paisDetalhes])

    if (open) {
        if (!props.darkMode) {
            return (
                <DivButton>
                    <RiArrowLeftLine id='icon-arrow' />
                    <OpenModalLight onClick={() => { setOpen(false) }}> Back</OpenModalLight>
                    <CountryDetails country={paisDetalhes} darkMode={props.darkMode} open={open} />

                </DivButton>
            )
        } else if (props.darkMode) {
            return (
                <DivButton>
                    <RiArrowLeftLine id='icon-arrow' style={{
                        color: 'hsl(0, 0%, 100%)'
                    }} />
                    <OpenModalDark onClick={() => { setOpen(false) }}> Back</OpenModalDark>
                    <CountryDetails country={paisDetalhes} darkMode={props.darkMode} open={open} />

                </DivButton>
            )
        }


    }
    if (!props.darkMode) {
        return (
            <>
                <ListaStyleLight>
                    <div id='filtragem'>
                        <div>
                            <div>
                                <FaSearch class="icon-search" />
                                <input type='search'
                                    placeholder='Search for country'
                                    onChange={(e) => {
                                        setBusca(e.target.value)
                                        setRegion('All')
                                    }}
                                />


                            </div>
                            <div>
                                <select value={region} onChange={(e) => {
                                    setRegion(e.target.value)
                                    if (region) {
                                    }
                                    if (e.target.value != "" && e.target.value != "All") {
                                        console.log(e.target.value)
                                        setCloneCountries(countries.filter((pais) => { if (pais.region === e.target.value) return pais }))
                                    }
                                }}>
                                    <option value="" disabled selected>Filter by region</option>
                                    <option value="All">All</option>
                                    <option value="Africa">Africa</option>
                                    <option value="Americas">Americas</option>
                                    <option value="Asia">Asia</option>
                                    <option value="Europe">Europe</option>
                                    <option value="Oceania">Oceania</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    {paisesFiltrados?.map((pais) => (
                        <BoxLight
                            onClick={() => { handleDetalhes(pais); setOpen(true) }}
                        >
                            <div id='img'>
                                <img src={pais.flags.svg} />
                            </div>
                            <div id="informacao">
                                <h1>{pais?.name}</h1>
                                <p>Population: <span>{pais?.population}</span></p>
                                <p>Region:<span> {pais?.region}</span></p>
                                <p>Capital: <span>{pais?.capital}</span></p>
                            </div>
                        </BoxLight>
                    ))}
                </ListaStyleLight>
            </>
        )
    } else {
        return (
            <>
                <ListaStyleDark>
                    <div id='filtragem'>
                        <div>
                            <div>
                                <FaSearch class="icon-search" />
                                <input type='search'
                                    placeholder='Search for country'
                                    onChange={(e) => {
                                        setBusca(e.target.value)
                                        setRegion('All')
                                    }}
                                />
                            </div>
                            <div>
                                <select value={region} onChange={(e) => {
                                    setRegion(e.target.value)
                                    if (region) {
                                    }
                                    if (e.target.value != "" && e.target.value != "All") {
                                        console.log(e.target.value)
                                        setCloneCountries(countries.filter((pais) => { if (pais.region === e.target.value) return pais }))
                                    } else {
                                        setCloneCountries(countries)
                                    }
                                }}>
                                    <option value="" disabled selected>Filter by region</option>
                                    <option value="All">All</option>
                                    <option value="Africa">Africa</option>
                                    <option value="Americas">Americas</option>
                                    <option value="Asia">Asia</option>
                                    <option value="Europe">Europe</option>
                                    <option value="Oceania">Oceania</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    {paisesFiltrados?.map((pais) => (
                        <BoxDark
                            onClick={() => { handleDetalhes(pais); setOpen(true) }}
                        >
                            <div id='img'>
                                <img src={pais.flags.svg} />
                            </div>
                            <div id="informacao">
                                <h1>{pais?.name}</h1>
                                <p>Population: <span>{pais?.population}</span></p>
                                <p>Region:<span> {pais?.region}</span></p>
                                <p>Capital: <span>{pais?.capital}</span></p>
                            </div>
                        </BoxDark>
                    ))}
                </ListaStyleDark>
            </>
        )
    }

}


