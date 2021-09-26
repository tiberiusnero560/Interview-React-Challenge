import './App.css';
import React, {useState, useEffect} from 'react'
import { axios } from 'axios'


function App() {

  // const [ response, setResponse ] = useState('');
  const [ data, setData ] = useState('');
  const [name, setName] = useState('');
  const [userName, setUsername] = useState('');
  const [followers, setFollowers] = useState('');
  const [following, setFollowing] = useState('');
  const [repos, setRepos] = useState('');
  // const [avatar, setAvatar] = useState('');
  const [userInput, setUserInput] = useState('');
  const [error, setError] = useState(null);
  const [allUsers, setAllUsers] = useState('');

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    const response = await fetch(`http://api.github.com/users`);
    const API__data = await response.json();
    API__data.map((data, index, API__data) => { 
      
      console.log(setAllUsers(data.login))
    })
  }

  

  const set__Data = ({
    name,
    login,
    followers,
    following,
    public_repos,
    avatar_url
  }) => {
    setName(name);
    setUsername(login);
    setFollowers(followers);
    setFollowing(following);
    setRepos(public_repos);
    // setAvatar(avatar_url)
  }  


  const handleSearch = (e) => {
    setUserInput(e.target.value)
  }

  const handleSubmit = () => {
    fetch(`https://api.github.com/users/${userInput}`)    // This is the event handler that allows me to type and return the user from the Github APi. but make sure to add the onclick in the return
      .then(res => res.json())
      .then(data => {
        if (data.message) {
          setError(data.message)
        } else {
          setData(data)
          setError(null)
        }
      })
  }

  return (
    <div className="App">
      <div className='navbar'>Job Interview React Challenge </div>

      <div className='All__Users'>
      </div>


      {/* Search Container  */}
      <div className='search'>
        <form onChange={handleSearch}>
          
            <form placeholder='Github User' name='github user'  />
            <form content='Submit' onSubmit={handleSubmit}/>

         
        </form>
      </div> {/* Search Container End Div  */}

      { error ? (<h1>{error}</h1>) : 
      (<div className='card'>  
        <input  />
        <input />

        <div className='card__item'>
          <a>
            {followers} Followers
          </a>
        </div>

        <div className='card__item'>
          <a>
            {repos} Repos
          </a>
        </div>

        <div className='card__item'>
          <a>
            {following} Following
          </a>
        </div>
        
  
      
        
      </div>
      )}
      {/* Card Container  */}
      

    </div>
  );
}

export default App;
