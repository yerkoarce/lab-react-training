export default function Greetings({ lang, children}) {

  const greting = (lang) => {
    if (lang === 'de'){
      return 'Hallo'
    } else if (lang === 'en'){
      return 'Hello'
    } else if (lang === 'es'){
      return 'Hola'
    } else if (lang === 'fr'){
      return 'Bonjour'
    }
  }

  return (
    <p>{greting} {children}</p>
  )
}
