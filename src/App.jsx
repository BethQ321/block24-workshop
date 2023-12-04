
import {puppyList} from './data.js'
import './App.css'
import { useState } from 'react' 

function App() {
  const [puppies, setPuppies] = useState(puppyList);
  const [featPupId, setFeatPupId] = useState(null);

  console.log(puppies)

  const featuredPup = puppies.find((pup) => pup.id === featPupId)
  console.log(featuredPup)

  // function featuredPup (id) {
  //   const selectedPup = puppies.find((pup) => {
  //     return pup.id === id
  //   })
  // }

  return (    
    <div className="App">

      {puppies.map((puppy) => {
          return( 
            <p key={puppy.id} onClick={()=>{setFeatPupId(puppy.id)}}>{puppy.name}</p>
          )
        })}

      { featPupId && (
        <div>
          <h2>{featuredPup.name}</h2>
          <ul>
            <li>Age: {featuredPup.age}</li>
            <li>Email: {featuredPup.email}</li>
          </ul>
        </div>
      )}
      

      {/* { featPupId && (
        <div>
          <h2>{featuredPup.name}</h2>
          <ul>
            <li>Age: {featuredPup.age}</li>
            <li>Email: {featuredPup.email}</li>
          </ul>
        </div>
      )} */}



    </div>
  )
}

export default App
