import { AppProvider } from '@/providers/AppProvider';
import { ThemeProvider } from '@/providers/ThemeProvider';
import { ErrorBoundary } from '@/components/common/ErrorBoundary';
import { RootLayout } from '@/layouts/RootLayout';
import { PageContainer } from '@/components/common/PageContainer';

export default function App() {
  return (
    <AppProvider>
      <ThemeProvider>
        <ErrorBoundary>
          <RootLayout>
            <PageContainer />
          </RootLayout>
        </ErrorBoundary>
      </ThemeProvider>
    </AppProvider>
  );
}
