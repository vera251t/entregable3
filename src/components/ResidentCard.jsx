import { useEffect } from "react"
import useFetch from "../hooks/useFetch"
import './styles/residentCard.css'
const ResidentCard = ({url}) => {

    const [resident, getApiResident] = useFetch(url)

    useEffect(() => {
        getApiResident()
    }, [])
    
  return (
    <article className="resident">
        <header className="resident__header">
            <img src={resident?.image} alt="" />
            <div className="resident__status">
                <span className={`resident__circle ${resident?.status}`}></span>
                <span>{resident?.status}</span>
            </div>
        </header>
        <section className="resident__body">
            <h3 className="resident__name">{resident?.name}</h3>
            <hr className="resident__hr"/>
            <ul className="resident__list">
                <li><span className="resident__label">Specie: </span>{resident?.species}</li>
                <li><span className="resident__label">Origin: </span>{resident?.origin.name}</li>
                <li><span className="resident__label">Episodes: </span>{resident?.episode.length}</li>
            </ul>
        </section>
    </article>
  )
}

export default ResidentCard