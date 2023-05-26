import { Nav } from './components/Nav';
import { TokenContext, TokenContextProvider } from './components/TokenContext';

export default function App() {
  return (
    <TokenContextProvider>
      <Nav />
    </TokenContextProvider>
  )
}