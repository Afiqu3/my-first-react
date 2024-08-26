import "./Education.css";
import { useState } from "react";
const Skills = (props) => {
  const [show, setShow] = useState(true);
  const showMore = () => {
    setShow(!show);
  };
  return (
    <>
      <h2>Skills <button onClick={showMore}>{show ? "hide" : "show"}</button></h2>
      <hr />
      {show && <table>
        <tbody>
          {props.skills.map((skill, index) => (
            <tr key={index}>
              <td>{skill.category}</td>
              <td />
              <td />
              <td>{skill.technologies}</td>
            </tr>
          ))}
        </tbody>
      </table>}
    </>
  );
};

export default Skills;
