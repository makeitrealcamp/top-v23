// 1. Importar el Provider

import { ProviderCounter } from './components/NumberContext';
import Counter from './components/Counter';
import Text from './components/Text';
import { useTheme } from './components/ThemeContext';
import ToggleTheme from './components/ToggleTheme';

import './App.css';

function App() {
  const { theme } = useTheme();

  const classTheme = theme === 'light' ? 'App-header-light' : 'App-header-dark';

  return (
    <div className={classTheme}>
      {/* 2. Usar el provider y agrupar el los componentes */}
      <ProviderCounter>
        <Text />
        <Counter />
      </ProviderCounter>
      <ToggleTheme />
    </div>
  );
}

export default App;
