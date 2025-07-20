"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Cpu, HardDrive, MemoryStick, Play, Loader2 } from "lucide-react";
import { useCpuStress, useDiskStress, useRamStress } from "@/hooks/mutations";
import { Separator } from "./ui/separator";
import { Badge } from "./ui/badge";
import { Textarea } from "./ui/textarea";
import { useLogs } from "@/hooks/queries";
import { format } from "date-fns";

export default function StressTestInterface() {
  const { data, status } = useLogs();
  const [cpuForm, setCpuForm] = useState({ workers: 1, timeout: 10 });
  const [ramForm, setRamForm] = useState({
    workers: 1,
    bytes: "1G",
    timeout: 10,
  });
  const [diskForm, setDiskForm] = useState({
    workers: 1,
    bytes: "1G",
    timeout: 10,
  });

  const handleCpuStressTest = useCpuStress();
  const handleRamStressTest = useRamStress();
  const handleDiskStressTest = useDiskStress();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-slate-900 dark:text-slate-100 mb-2">
            System Stress Testing Dashboard
          </h1>
          <p className="text-slate-600 dark:text-slate-400 text-lg">
            Monitor and test your system's performance under different stress
            conditions
          </p>
        </div>

        {/* Stress Test Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* CPU Stress Test */}
          <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader className="pb-4">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg">
                  <Cpu className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <CardTitle className="text-xl">CPU Stress Test</CardTitle>
                  <CardDescription>
                    Test CPU performance and load handling
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="cpu-workers">Workers</Label>
                <Input
                  id="cpu-workers"
                  type="number"
                  min="1"
                  max="32"
                  value={cpuForm.workers}
                  onChange={(e) =>
                    setCpuForm((prev) => ({
                      ...prev,
                      workers: Number.parseInt(e.target.value) || 1,
                    }))
                  }
                  placeholder="Number of CPU workers"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="cpu-timeout">Timeout (seconds)</Label>
                <Input
                  id="cpu-timeout"
                  type="number"
                  min="1"
                  max="300"
                  value={cpuForm.timeout}
                  onChange={(e) =>
                    setCpuForm((prev) => ({
                      ...prev,
                      timeout: Number.parseInt(e.target.value) || 10,
                    }))
                  }
                  placeholder="Test duration"
                />
              </div>
              <Button
                onClick={() => handleCpuStressTest.mutate(cpuForm)}
                disabled={handleCpuStressTest.isPending}
                className="w-full bg-blue-600 hover:bg-blue-700"
              >
                {handleCpuStressTest.isPending ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Running CPU Test...
                  </>
                ) : (
                  <>
                    <Play className="mr-2 h-4 w-4" />
                    Start CPU Test
                  </>
                )}
              </Button>
            </CardContent>
          </Card>

          {/* RAM Stress Test */}
          <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader className="pb-4">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-green-100 dark:bg-green-900 rounded-lg">
                  <MemoryStick className="h-6 w-6 text-green-600 dark:text-green-400" />
                </div>
                <div>
                  <CardTitle className="text-xl">RAM Stress Test</CardTitle>
                  <CardDescription>
                    Test memory allocation and usage
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="ram-workers">Workers</Label>
                <Input
                  id="ram-workers"
                  type="number"
                  min="1"
                  max="16"
                  value={ramForm.workers}
                  onChange={(e) =>
                    setRamForm((prev) => ({
                      ...prev,
                      workers: Number.parseInt(e.target.value) || 1,
                    }))
                  }
                  placeholder="Number of memory workers"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="ram-bytes">Memory Size</Label>
                <Input
                  id="ram-bytes"
                  value={ramForm.bytes}
                  onChange={(e) =>
                    setRamForm((prev) => ({ ...prev, bytes: e.target.value }))
                  }
                  placeholder="e.g., 1G, 512M, 2048K"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="ram-timeout">Timeout (seconds)</Label>
                <Input
                  id="ram-timeout"
                  type="number"
                  min="1"
                  max="300"
                  value={ramForm.timeout}
                  onChange={(e) =>
                    setRamForm((prev) => ({
                      ...prev,
                      timeout: Number.parseInt(e.target.value) || 10,
                    }))
                  }
                  placeholder="Test duration"
                />
              </div>
              <Button
                onClick={() => handleRamStressTest.mutate(ramForm)}
                disabled={handleRamStressTest.isPending}
                className="w-full bg-green-600 hover:bg-green-700"
              >
                {handleRamStressTest.isPending ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Running RAM Test...
                  </>
                ) : (
                  <>
                    <Play className="mr-2 h-4 w-4" />
                    Start RAM Test
                  </>
                )}
              </Button>
            </CardContent>
          </Card>

          {/* Disk Stress Test */}
          <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader className="pb-4">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-purple-100 dark:bg-purple-900 rounded-lg">
                  <HardDrive className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                </div>
                <div>
                  <CardTitle className="text-xl">Disk Stress Test</CardTitle>
                  <CardDescription>
                    Test disk I/O performance and throughput
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="disk-workers">Workers</Label>
                <Input
                  id="disk-workers"
                  type="number"
                  min="1"
                  max="16"
                  value={diskForm.workers}
                  onChange={(e) =>
                    setDiskForm((prev) => ({
                      ...prev,
                      workers: Number.parseInt(e.target.value) || 1,
                    }))
                  }
                  placeholder="Number of disk workers"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="disk-bytes">Data Size</Label>
                <Input
                  id="disk-bytes"
                  value={diskForm.bytes}
                  onChange={(e) =>
                    setDiskForm((prev) => ({ ...prev, bytes: e.target.value }))
                  }
                  placeholder="e.g., 1G, 512M, 2048K"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="disk-timeout">Timeout (seconds)</Label>
                <Input
                  id="disk-timeout"
                  type="number"
                  min="1"
                  max="300"
                  value={diskForm.timeout}
                  onChange={(e) =>
                    setDiskForm((prev) => ({
                      ...prev,
                      timeout: Number.parseInt(e.target.value) || 10,
                    }))
                  }
                  placeholder="Test duration"
                />
              </div>
              <Button
                onClick={() => handleDiskStressTest.mutate(diskForm)}
                disabled={handleDiskStressTest.isPending}
                className="w-full bg-purple-600 hover:bg-purple-700"
              >
                {handleDiskStressTest.isPending ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Running Disk Test...
                  </>
                ) : (
                  <>
                    <Play className="mr-2 h-4 w-4" />
                    Start Disk Test
                  </>
                )}
              </Button>
            </CardContent>
          </Card>
        </div>

        {data && data.length > 0 && (
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl">Test Results</CardTitle>
              <CardDescription>
                Recent stress test results and outputs
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 max-h-44 overflow-y-auto">
                {data.map((result, index) => (
                  <div
                    key={index}
                    className="border rounded-lg p-4 bg-slate-50 dark:bg-slate-800"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <Badge
                          variant={
                            result.status === "0" ? "default" : "destructive"
                          }
                        >
                          {result.type}
                        </Badge>
                        <span className="text-sm text-slate-600 dark:text-slate-400">
                          Started{" "}
                          {format(result.startTime, "PPP 'at' HH:mm:ss aa")} -
                          Ended At{" "}
                          {format(result.endTime, "PPP 'at' HH:mm:ss aa")}
                        </span>
                      </div>
                      <Badge
                        variant="outline"
                        className={
                          result.status === "0"
                            ? "text-green-600"
                            : "text-red-600"
                        }
                      >
                        {result.status === "0" ? "Success" : "Failed"}
                      </Badge>
                    </div>
                    <Separator className="my-2" />
                    <Textarea
                      value={result.output}
                      readOnly
                      className="min-h-[100px] font-mono text-sm bg-white dark:bg-slate-900"
                    />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}
