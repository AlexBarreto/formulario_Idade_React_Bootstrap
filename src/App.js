import { useState } from "react";
import { unstable_renderSubtreeIntoContainer } from "react-dom";
import HeaderdarkBootstrap from "./componets/Header";
import TextInput from "./componets/TextInput";
import Main from "./componets/Main";
import DateInput from "./componets/DateInput";
import { getAgeFrom } from "./helpes/datahelpers";

export default function App() {
  const [name, setName] = useState("Alex");
  const [birthDate, setBirthDate] = useState("1988-05-05");
  function handleNameChange(newName) {
    setName(newName);
  }
  function handleDateChange(newBirthDate) {
    setBirthDate(newBirthDate);
  }

  return (
    <>
      <HeaderdarkBootstrap>Formulário</HeaderdarkBootstrap>

      <Main>
        <TextInput
          id="InputText"
          labelDescription="Digite o seu nome:"
          inputValue={name}
          onInputChange={handleNameChange}
          autoFocus
        />
        <DateInput
          id="inputdate"
          labelDescription="Digite a data de nascimento:"
          inputValue={birthDate}
          onInputChange={handleDateChange}
        />

        <div className="col-12 p-5">
          <p>
            Meu nome é {name}, com {name.length} caracteres e possuo{" "}
            {getAgeFrom(birthDate)} anos.
          </p>
        </div>
      </Main>
    </>
  );
}
