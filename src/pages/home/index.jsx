import { Link } from "react-router-dom";
import LoginButton from "../../components/ui/LoginButton";
import DevTest from "../../components/devtest";

export default function Home() {
  return (
    <div>
      Home
      <LoginButton text="HELLO"/>
      <Link to="/login"> GO TO LOGIN</Link>
      <DevTest/>
    </div>
  )
}
