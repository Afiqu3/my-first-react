import "./Education.css";
import { useState } from "react";
const Extracurricular = (props) => {
  const [show, setShow] = useState(true);
  const showMore = () => {
    setShow(!show);
  };
  return (
    <>
      <h2>
        Extracurricular Activities{" "}
        <button onClick={showMore}>{show ? "hide" : "show"}</button>
      </h2>
      <hr />
      {show && (
        <table>
          <tbody>
            {props.extracurricular.map((item, index) => (
              <tr key={index}>
                <td>{item.category}</td>
                <td />
                <td />
                {item.details}
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </>
  );
};

export default Extracurricular;
