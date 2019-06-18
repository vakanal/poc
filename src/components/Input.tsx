import * as React from "react";
import { WrappedFieldProps } from "redux-form";

const styles = {
  input: {
    backgroundColor: "#fff",
    border: "solid 1px #ddd",
    borderRadius: "4px",
    marginBottom: "10px",
    padding: "10px 15px",
    width: "calc(100% - 30px)"
  },
  span: {
    color: "#777",
    fontSize: "10px",
    fontWeight: 900,
    textTransform: "uppercase"
  } as React.CSSProperties
};

interface IInputProps {
  placeholder?: string;
  label: string;
}

// ! Stateless Component - Start
const Input: React.StatelessComponent<
  WrappedFieldProps & IInputProps
> = props => {
  const { label } = props;
  return (
    <div>
      <span style={styles.span}>{label}</span>
      <input {...props} {...props.input} style={styles.input} />
    </div>
  );
};

export default Input;
// ! Stateless Component - End
