import { useEffect, useState } from "react"

interface IAdvice {
  advice: string,
  id: number
}


export default function Home() {
  const [advice, setAdvice] = useState<IAdvice>()
  const uri = 'https://api.adviceslip.com/advice'

  useEffect(() => {
    handleFetchAdvice()
  }, [])

  async function handleFetchAdvice() {
    fetch(uri).then(res => res.json()).then(res => setAdvice(res.slip))
  }

  return (
    <div className='content'>
      <div className="card">
        <h3 className="title">ADVICE #117</h3>
        <h1 className="quote">“{advice?.advice}”</h1>
        <div className="divider"></div>
        <button className="dice-button" onClick={handleFetchAdvice}><img src="/images/icon-dice.svg" alt="icon dice" /></button>
      </div>
    </div>
  )
}