import "./App.css";
import Header from "./components/Header";
import Statement from "./components/Statement";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Hobby from "./components/Hobby";
import Extracurricular from "./components/Extracurricular";
import Footer from "./components/Footer";
import { persons } from "./data/Information";

function App() {
  return (
    <div className="App">
      {persons.map((person) => (
        <div className="body" key={person.id}>
          <Header
            name={person.name}
            imageSrc={person.imageSrc}
            mail={person.mail}
            phone={person.phone}
            country={person.country}
            address={person.address}
          ></Header>

          <Statement
          statement={person.statement}
          ></Statement>

          <Education
          education={person.education}
          ></Education>

          <Skills
          skills={person.skills}
          ></Skills>

          <Hobby
          hobbies={person.hobbies}
          ></Hobby>

          <Extracurricular
          extracurricular={person.extracurricular}
          ></Extracurricular>

          <br />
          <br />
          <br />

          <Footer></Footer>
        </div>
      ))}
    </div>
  );
}

export default App;
