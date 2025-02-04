export default function BoxColor({ r, g, b }) {

  const styles = {
    backgroundColor: `rgb(${r},${g},${b})`,
  }

  const rSex = r.toString(16)
  const gSex = g.toString(16)
  const bSex = b.toString(16)

  return (
    <div className='Container' style={styles}>
      <p>rgb({r},{g},{b})</p>
      <p>#{rSex}{gSex}{bSex}</p>
    </div>
  )
}
