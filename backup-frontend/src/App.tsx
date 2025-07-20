import { QueryClientProvider } from "@tanstack/react-query";
import StressTestInterface from "./components/stress";
import { Toaster } from "sonner";
import { queryClient } from "./hooks/query-client";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <StressTestInterface />
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;
