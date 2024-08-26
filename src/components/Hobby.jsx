import "./Hobby.css";
import { useState } from "react";
const Hobby = (props) => {
  const [show, setShow] = useState(true);
  const showMore = () => {
    setShow(!show);
  };
  return (
    <>
      <h2>Hobby <button onClick={showMore}>{show ? "hide" : "show"}</button></h2>
      <hr />
      {show && <ul>
        {props.hobbies.map((hobby) => (
          <li key={hobby}>{hobby}</li>
        ))}
      </ul>}
    </>
  );
};

export default Hobby;
