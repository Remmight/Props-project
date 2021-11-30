//import logo from './logo.svg';
import './App.css';
import ProfileComponent from './Profile/ProfileComponent';
import image from "./image.jpg"

function handleName(fullName){
  alert(this.fullName)

  return (
  
    <div className="App" style={{
        display: 'flex',
        justifyContent: "center",
        backgroundColor: "sandybrown"
    }}>
    <ProfileComponent fullName='Remilekun Wahab'
    handle = {handleName}
    bio= "Lifestyle + Design + Basically just fun stuff."
    profession='Product Designer'>
    <img src= {image} style = {{width: "10rem"}} alt = "Myimage"/>
    </ProfileComponent>
    </div>
    );
  }
  
  
  
  
  export default handleName;