import "./Education.css";
import { useState } from "react";
const Education = (props) => {
  const [show, setShow] = useState(true);
  const showMore = () => {
    setShow(!show);
  };
  return (
    <>
      <h2>
        Education <button onClick={showMore}>{show ? "hide" : "show"}</button>
      </h2>
      <hr />
      {show && (
        <table>
          <tbody>
            {props.education.map((item, index) => (
              <tr key={index}>
                <td>{item.period}</td>
                <td />
                <td />
                <td>
                  {item.details}
                  {item.additionalInfo && `, ${item.additionalInfo}`}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </>
  );
};
export default Education;
