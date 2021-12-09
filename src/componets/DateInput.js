export default function DateInput({
  labelDescription = "Descrição da label: ",
  inputValue = "Valor padrão do input",
  onInputChange = null,
  id = "id_inputDate",
}) {
  function handleInputChange({ currentTarget }) {
    if (onInputChange) {
      const newValue = currentTarget.value;
      onInputChange(newValue);
    }
  }
  return (
    <div className=" form-group col-12 col-sm-8 col-md-4 p-5">
      <label className="my-4" htmlFor={id}>
        {labelDescription}
      </label>
      <input
        type="date"
        className="form-control"
        id={id}
        value={inputValue}
        onChange={handleInputChange}
      ></input>
    </div>
  );
}
