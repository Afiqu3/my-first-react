import './Statement.css';
import { useState } from 'react';
const Statement = (props) => {
  const [show, setShow] = useState(true);
  const showMore = () => {
    setShow(!show);
  };
    return (
        <>
        <h2>Personal Statement <button onClick={showMore}>{show ? "hide" : "show"}</button></h2>
        <hr/>
        {show && <p>
          {props.statement}
        </p>}
        </>
    );
}
export default Statement;