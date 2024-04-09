export const SelectStyles = {
  singleValue: (provided) => ({
    ...provided,
    marginTop: "0.4em",
    marginBottom: "0.4em",
  }),
  option: (styles, state) => ({
    ...styles,
    cursor: "pointer",
    backgroundColor: state.isFocused ? 'rgba(0, 0, 0, 0.1)' : 'white',
    color: state.isFocused ? 'black' : 'black',
  }),
  control: (styles) => ({
    ...styles,
    cursor: "pointer",
    borderColor: 'black', 
    '&:hover': { borderColor: 'black' }, 
  }),
};

export const HoverSelectStyles = {
  option: (styles, state) => ({
    ...styles,
    cursor: "pointer",
    backgroundColor: state.isFocused ? 'rgba(0, 0, 0, 0.1)' : 'white',
    color: state.isFocused ? 'black' : 'black',
  }),
  control: (styles) => ({
    ...styles,
    cursor: "pointer",
    borderColor: 'black',
    '&:hover': { borderColor: 'black' },
  }),
};

export const customFilterOption = (option, inputValue) => {
  return option.label.toLowerCase().startsWith(inputValue.toLowerCase());
};
