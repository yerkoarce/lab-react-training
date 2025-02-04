export default function Random({ min, max }) {

  const getNumberText = (min, max) => {
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + 1
    return `Random value between ${min} and ${max} => ${randomNumber}`
  }

  return (
    <p>{getNumberText}</p>
  )
}
