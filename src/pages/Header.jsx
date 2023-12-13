import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <p>Header links</p>
      <Link to="/"> Logo</Link>
      <Link to="react"> React</Link>
      <Link to="javascript">Javascript</Link>
      <Link to="html"> HTML</Link>
      <Link to="css"> CSS</Link>
      <Link to="about"> Back to Home</Link>
    </>
  );
}
