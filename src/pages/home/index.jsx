import { Link } from "react-router-dom";
import LoginButton from "../../components/ui/LoginButton";
import DevTest from "../../components/devtest";
import NavBar from "../../components/layout/NavBar/NavBar";
import Footer from "../../components/layout/Footer/Footer";
import { Button } from "@mui/material";
import axios from "axios";


export default function Home() {
  // const user = {
  //   userID:"",
  //   accessToken:"",
  //   refreshToken:""
  // }
  const test = async () =>{
    try {
      const userLocal = JSON.parse(localStorage.getItem('user'))
      console.log(userLocal)
      const { data } = await axios.get(`https://wellnesshub.onrender.com/api/v1/customer/${userLocal.userId}`,{headers: {"authorization":`Bearer ${userLocal.accessToken}`}})
      console.log(data)
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div>
      <NavBar/>
      <p>home</p>
      <LoginButton text="HELLO"/>
      <Link to="/login"> GO TO LOGIN</Link>
      <Button onClick={test} variant="contained"> GET USER DATA </Button> 
      <Footer/>
    </div>
  )
}
