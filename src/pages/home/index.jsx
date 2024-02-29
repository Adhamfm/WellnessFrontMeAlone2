import { Link } from "react-router-dom";
import LoginButton from "../../components/ui/LoginButton";

export default function Home() {
  return (
    <div>
      Home
      <LoginButton text="HELLO"/>
      <Link to="/login"> GO TO LOGIN</Link>
    </div>
  )
}
