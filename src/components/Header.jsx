const Header = (props) => {
  return (
    <>
      <center>
        <img src={props.imageSrc} alt="afique" width={200} height={200} />
      </center>
      <h2 style={{ textAlign: "center" }}>{props.name}</h2>
      <address style={{ textAlign: "center" }}>
        Mail: <a href="mailto:afiquehossain84@gmail.com">{props.mail}</a>
        <br />
        Phone :{props.phone}
        <br />
        {props.address}
        <br />
        {props.country}
      </address>
      <br />
    </>
  );
};

export default Header;
