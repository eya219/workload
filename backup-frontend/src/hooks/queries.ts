import { useQuery } from "@tanstack/react-query";
import { axiosClient } from "./client";

export interface StressTest {
  id: string;
  type: StressType;
  timeout: number;
  status: string;
  output: string;
  startTime: string;
  endTime: string;
}

export type StressType = "Virtual Memory" | "CPU" | "Hard Drive";

export function useLogs() {
  return useQuery({
    queryKey: ["logs"],
    queryFn: async () => {
      const response = await axiosClient.get("");
      const logs = response.data as StressTest[];
      return logs;
    },
  });
}
