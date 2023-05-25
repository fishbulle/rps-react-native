import { Nav } from './components/Nav';
import { TokenContextProvider } from './components/TokenContext';

export default function App() {
  return (
    <TokenContextProvider>
      <Nav />     
    </TokenContextProvider>
  )
}
