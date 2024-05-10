import { SignUp } from "@clerk/nextjs";
import "../../../globals.css"
export default function Page() {
  return <div className="sign_up"><SignUp path="/sign-up" /></div>;
}