import { useEffect } from "react";
import Input from "./Input";

function Form({
  value,
  onChange
}) {
  useEffect(() => {
    console.log('EFFECT');
  }, []);

  return <Input value={value} onChange={onChange} />;
}

export default Form;
