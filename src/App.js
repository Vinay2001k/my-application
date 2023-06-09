
import './App.css';

function App() {
  const pets = [
    {
      name: 'kunal',
      type: 'cat',
      description: 'kunal is funny and loves to be around people',
      skills: ['fetch', 'play dead', 'roll over'],
      image: 'https://res.cloudinary.com/atapas/image/upload/v1604829788/cats/remi-remino-E9kVmtiqqGE-unsplash_uivwfy.jpg',
    },
    {
      name: 'Molly',
      type: 'cat',
      description: 'Molly is a sweet and cuddly cat stretch a lot!',
      skills: ['play dead', 'meow', 'purr'],
      image: 'https://res.cloudinary.com/atapas/image/upload/v1604829829/cats/timo-volz-ZlFKIG6dApg-unsplash_x3xifk.jpg',
    },
    {
      name: 'yash',
      type: 'cat',
      description: 'yash is a sweet and cuddly cat stretch a lot!',
      skills: ['play dead', 'meow', 'purr'],
      image: 'https://res.cloudinary.com/atapas/image/upload/v1604829829/cats/timo-volz-ZlFKIG6dApg-unsplash_x3xifk.jpg',
    },
  ];
  return (
    <div className="App">
      <h3>My Pets</h3>
      <ul className="Container">
        {
      pets.map((pet, index) => (
        <li>
        <h3>{pet.name}</h3>
        <p>{pet.description}</p>
        <img src={pet.image} 
                alt={pet.name} 
                width="200px"
                height="200px" />
         <ul className="skills">
                {
                  pet.skills.map((skill, index)=>(
                    <li key={skill}>{skill}</li>
                  ))
                }
              </ul>            
        </li>
      ))
        }
      </ul>
    </div>
  );

}

export default App;
