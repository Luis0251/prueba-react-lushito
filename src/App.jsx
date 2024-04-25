import  { useEffect, useState } from 'react'

export const App = () => {
  const [fact, setFact] = useState('loreum ipsum catum dogum')
  const [ImageUrl, setImageUrl] = useState()
  const CAT_API = 'https://catfact.ninja/fact'
  const CAT_PREFIX_IMAGE_URL =' https://cataas.com'
  

  useEffect(() =>{
    fetch(CAT_API)
    .then(response => response.json())
    .then(data => {
      const { fact } = data
      setFact(fact)
      const firstWord = fact.split(' ', 3).join(' ')
     
      fetch(`https://cataas.com/cat/says/${firstWord}?size=40&color=red&json=true`)
      .then(res => res.json())
      .then(response => {
        const { _id } = response
        const url = `/cat/${_id}/says/${firstWord}`
        setImageUrl(CAT_PREFIX_IMAGE_URL + url)
      })
    })
  },[]) // cada vez que yo renderizo el componente , quiero que se ejecute esto 
 

  return (
    <div>
      <h1>App de gatos </h1>
      <h2>{fact}</h2>
      {ImageUrl && <img src={ImageUrl} alt='cats'/>}
    </div>
  )
}
