import { Link } from "react-router-dom";
import LoginButton from "../../components/ui/LoginButton";
import DevTest from "../../components/devtest";
import NavBar from "../../components/layout/NavBar/NavBar";
import Footer from "../../components/layout/Footer/Footer";
import { Button } from "@mui/material";
import axios from "axios";

export default function Home() {
  const test = async () =>{
    try {
      const { data } = await axios.get(`https://wellnesshub.onrender.com/api/v1/customer/65d249efb0caf340385285fb`,{headers: {"authorization":"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWQyNDllZmIwY2FmMzQwMzg1Mjg1ZmIiLCJpYXQiOjE3MDk3MjczMzUsImV4cCI6MTcxMjMxOTMzNX0.Q81vIV297_QjIsZQhWxcGkwMEt1s_MtYB2ACPxVxi-M"}})
      console.log(data)
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div>
      <NavBar/>
      <p>homew</p>
      <LoginButton text="HELLO"/>
      <Link to="/login"> GO TO LOGIN</Link>
      <DevTest/>
      <Button onClick={test} variant="contained"> GET USER DATA </Button>
      <Footer/>
    </div>
  )
}
