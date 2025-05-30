import { createRoot } from 'react-dom/client';
import App from './App';
import { FluentProvider, webLightTheme } from '@fluentui/react-components';

const root = createRoot(document.body);
root.render(
    <FluentProvider theme={webLightTheme}>
        <App />
    </FluentProvider>
);