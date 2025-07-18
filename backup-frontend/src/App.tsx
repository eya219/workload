import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import StressTestInterface from "./components/stress";
import { Toaster } from "sonner";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <StressTestInterface />
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;
