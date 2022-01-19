import Form from './Form';

function ContainerNoSpread({
  value,
  onChange
}) {
  return (
    <Form
      value={value}
      onChange={onChange}
    />
  );
}

export default ContainerNoSpread;
