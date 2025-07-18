import { useMutation } from "@tanstack/react-query";
import { axiosClient } from "./client";

export const useCpuStress = () => {
  return useMutation({
    mutationKey: ["cpuStress"],
    mutationFn: async ({
      workers,
      timeout,
    }: {
      workers: number;
      timeout: number;
    }) => {
      const response = await axiosClient.post(
        `/cpu`,
        null, // no body
        {
          params: { workers, timeout },
        }
      );
      return response.data;
    },
  });
};

export const useRamStress = () => {
  return useMutation({
    mutationKey: ["ramStress"],
    mutationFn: async ({
      workers,
      bytes,
      timeout,
    }: {
      workers: number;
      bytes: string;
      timeout: number;
    }) => {
      const response = await axiosClient.post(`/ram`, null, {
        params: { workers, bytes, timeout },
      });
      return response.data;
    },
  });
};

export const useDiskStress = () => {
  return useMutation({
    mutationKey: ["diskStress"],
    mutationFn: async ({
      workers,
      bytes,
      timeout,
    }: {
      workers: number;
      bytes: string;
      timeout: number;
    }) => {
      const response = await axiosClient.post(`/disk`, null, {
        params: { workers, bytes, timeout },
      });
      return response.data;
    },
  });
};
