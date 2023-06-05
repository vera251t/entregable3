
const LocationInfo = ({location}) => {
  
  return (
    <article className="card">
        <h2>{location?.name}</h2>
        <ul className="card__info">
            <li>Type: <span>{location?.type}</span></li>
            <li>Dimension: <span>{location?.dimension}</span></li>
            <li>Population: <span>{location?.residents.length}</span></li>
        </ul>
    </article>
  )
}

export default LocationInfo