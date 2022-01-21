import {Container} from 'react-bootstrap'
import Title from './components/Title'
import Content from './components/Content'

function App() {
  return (
    <Container fluid className='p-0 m-0 w-100'>
      <Title />
      <Content />
    </Container>
  );
}

export default App;
