import React,{useEffect,useState} from 'react';
import './style.css'; // Importing CSS file for styling
import NavBar from "../../components/layout/NavBar/NavBar";
import axios from 'axios';

function FetchData() {
  const [image, setImage] = useState('') // Create a state variable to store the image
  function handleImage(e){
    console.log(e.target.files)
    setImage(e.target.files[0])
  }

  const [data, setData] = useState([]) // Create a state variable to store the data
  useEffect(() => {
    // Fetch data from the server
    axios.get(`https://wellnesshub.onrender.com/api/v1/customer/register`)
      .then(res => setData(res.data)) // Store the data in the state
      .catch(error => console.error('Error fetching data: ', error));
  }, []); // The empty array causes this effect to run once, after the initial render
    function handleAPI(){
      const formData = new formData()
      formData.append('image',image)
      axios.post('url',formData).then((res)=>{
        console.log(res)
      })
    }
    return (
    <div>
      <NavBar/>
      <div className="profile-container">
        <div className="profile-header">
          <h2>welcome {}</h2>
        </div>
        <div className="profile-content">
          <div className="profile-picture">
            <img src="https://via.placeholder.com/150" alt="Profile" />
            <input type ='file' name='file' onChange={handleImage} />
            <button onClick={handleAPI}> submit </button>

          </div>
          <div className="profile-details">
            <h3>user name</h3>
            <table className='table'>
              <thead> 
                <tr>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Email</th>
                  <th>Address</th>
                  <th>Phone</th>
                </tr>
              </thead>
              <tbody>
                {data.map((user, index) => {
                  return <tr key={index}>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.address}</td>
                    <td>{user.phone}</td>
                  </tr>
                })
                }
               </tbody> 
            </table>
          </div>
        </div>
      </div>
    </div>
    );
  }

  export default FetchData;