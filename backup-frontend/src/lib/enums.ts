import { StressType } from "@/hooks/queries";

export function toStressType(value: number): StressType | undefined {
  switch (value) {
    case 1:
      return StressType.VirtualMemory;
    case 2:
      return StressType.CPU;
    case 3:
      return StressType.HardDrive;
    default:
      return undefined;
  }
}
