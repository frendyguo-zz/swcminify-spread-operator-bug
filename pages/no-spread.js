import { useCallback, useState } from 'react'
import ContainerNoSpread from '../components/NoSpread';

export default function PageWithNoSpread() {
  const [text, setText] = useState('');

  const handleChange = useCallback((e) => {
    setText(e.target.value);
  }, []);

  return (
    <ContainerNoSpread
      onChange={handleChange}
      value={text}
    />
  )
}



