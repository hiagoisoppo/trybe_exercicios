import Title from "./Title";
import ModuleDetails from "./ModuleDetails";

function ageCalc() {
  const actualYear = 2023;
  const personBirthYear = 1998;

  return actualYear - personBirthYear;
}

function HelloWorld() {
  return (
    <>
      <Title />
      <ModuleDetails />
      <h3>{`Você possuí: ${ageCalc()} anos`}</h3>
    </>
  );

}

export default HelloWorld;