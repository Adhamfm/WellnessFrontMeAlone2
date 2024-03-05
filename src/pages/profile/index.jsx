import React from 'react';
import './style.css'
import { Link } from 'react-router-dom';

export default function Profile(data) {
  return (
  <div>
    <nav id="desktop-nav">
        <div class="section__pic-container"> <img src="./src/assets/wallpaperflare.com_wallpaper (4).jpg" alt="Profile picture"></img> </div>

        <div class="logo">Welcome</div>
        <div>
            <ul class="nav-links">
                <li><a href="#about">About</a></li>
                <li><a href="#experience">Experience</a></li>
                <li><a href="#projects">projects</a></li>
                <li><a href="#contact">Contact</a></li>
                <Link to='/'>Home</Link>
            </ul>
        </div>
    </nav>  
    <section className="profile">
    <div className="profile-container">
      <h1>Welcome, {data.firstName}!</h1>
      <div className="profile-details">
        <p><strong>First Name:</strong> {data.firstName}</p>
        <p><strong>Last Name:</strong> {data.lastName}</p>
        <p><strong>Email:</strong> {data.email}</p>
        <p><strong>Gender</strong></p>
        <p><strong>Gender</strong></p>
        <p><strong>Gender</strong></p>

      </div>
    </div>
  </section>
  </div> 
  )
}


// const Profile = ({ location }) => {
//   const { signupData } = location.state;

//   return (
//     <div>
//       <h1>Welcome to your profile!</h1>
//       <p>Username: {signupData.firstname}</p>
//       <p>Email: {signupData.email}</p>
//       {/* You can display other signup data here */}
//     </div>
//   );
// };

// export default Profile;