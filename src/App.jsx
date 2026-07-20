import { AppProvider } from '@/providers/AppProvider';
import { ThemeProvider } from '@/providers/ThemeProvider';
import { TimelineProvider } from '@/timeline/TimelineProvider';
import { ErrorBoundary } from '@/components/common/ErrorBoundary';
import { RootLayout } from '@/layouts/RootLayout';
import { PageContainer } from '@/components/common/PageContainer';

export default function App() {
  return (
    <AppProvider>
      <ThemeProvider>
        <TimelineProvider>
          <ErrorBoundary>
            <RootLayout>
              <PageContainer />
            </RootLayout>
          </ErrorBoundary>
        </TimelineProvider>
      </ThemeProvider>
    </AppProvider>
  );
}
