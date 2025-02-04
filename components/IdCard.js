export default function IdCard({ lastName, firstName, gender, height, birth, picture }) {
  return (
    <div className='container-card'>
      <img src={picture} alt={firstName} />
      <div>
        <p><strong>First name: </strong>{firstName}</p>
        <p><strong>Last name: </strong>{lastName}</p>
        <p><strong>Gender: </strong>{gender}</p>
        <p><strong>Height: </strong>{height}</p>
        <p><strong>Birth: </strong>{birth}</p>
      </div>
    </div>
  )
}
