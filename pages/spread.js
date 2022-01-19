import { useCallback, useEffect, useState } from 'react'
import Container from '../components/Container';

export default function PageWithSpread() {
  const [text, setText] = useState('');

  const handleChange = useCallback((e) => {
    setText(e.target.value);
  }, []);

  return (
    <Container
      onChange={handleChange}
      value={text}
    />
  )
}
