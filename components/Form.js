import { useEffect } from "react";
import Input from "./Input";

function Form({
  value,
  onChange
}) {
  useEffect(() => {
    // If parent component spreads the props,
    // will cause remount on every re-render
    console.log('EFFECT');
  }, []);

  return <Input value={value} onChange={onChange} />;
}

export default Form;
