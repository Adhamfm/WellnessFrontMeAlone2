import { Link } from "react-router-dom";
import LoginButton from "../../components/ui/LoginButton";
import DevTest from "../../components/devtest";
import NavBar from "../../components/layout/NavBar/NavBar";

export default function Home() {
  return (
    <div>
      <NavBar/>
      Home
      <LoginButton text="HELLO"/>
      <Link to="/login"> GO TO LOGIN</Link>
      <DevTest/>
    </div>
  )
}
