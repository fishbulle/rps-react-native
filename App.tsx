import { Nav } from './components/Nav';
import { PlayerContextProvider } from './components/PlayerContext';
import { TokenContextProvider } from './components/TokenContext';

export default function App() {
  return (
    <PlayerContextProvider>
      <TokenContextProvider>
        <Nav />
      </TokenContextProvider>
    </PlayerContextProvider>
  )
}
