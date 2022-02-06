import { AppContent } from 'components/AppContent';
import { AppStyle } from 'components/AppStyle';
import { Background } from 'components/global/Background';
import { PageMeta } from 'components/global/PageMeta';
import { SnackbarProvider } from 'services/context/Snackbar/SnackbarContext';
import { LanguageProvider } from 'services/context/Language/LanguageContext';

function App(): JSX.Element {
    return (
        <LanguageProvider>
            <SnackbarProvider>
                <div style={{ width: '100%' }}>
                    <PageMeta />
                    <AppStyle />
                    <AppContent />
                    <Background />
                </div>
            </SnackbarProvider>
        </LanguageProvider>
    );
}

export default App;
