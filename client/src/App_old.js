import React, {useState, useEffect} from 'react'

function App() {
  const [data, setData] = useState([{}])
  
  useEffect(() => {
    fetch("/members").then(
      res => res.json()
    ).then(
      data => {
        setData(data)
        console.log(data)
      }
    )
  }, [])
  
  return (
    <div>
      {(typeof data.readings === 'undefined') ? (
        <p>Loading...</p>
      ) : (

        data.readings.map((reading, i) => (
        <p key={i}>{reading}</p>
        ))
      )}



    </div>
  )
}

export default App