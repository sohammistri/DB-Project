# Flux Queries

## Memory monitoring
- Inputs: host
- Flux Query
```
from(bucket: "DB Project")
  |> range(start: v.timeRangeStart, stop: v.timeRangeStop)
  |> filter(fn: (r) => r["_measurement"] == "mem")
  |> filter(fn: (r) => r["_field"] == "available_percent" or r["_field"] == "used_percent")
  |> filter(fn: (r) => r["host"] == "<host_name>")
  |> aggregateWindow(every: v.windowPeriod, fn: mean, createEmpty: false)
  |> yield(name: "mean")
```

## Disk capacity monitoring
- Inputs: host
- Flux query
```
from(bucket: "DB Project")
  |> range(start: v.timeRangeStart, stop: v.timeRangeStop)
  |> filter(fn: (r) => r["_measurement"] == "disk")
  |> filter(fn: (r) => r["_field"] == "used_percent")
  |> filter(fn: (r) => r["host"] == "<host_name>")
  |> aggregateWindow(every: v.windowPeriod, fn: mean, createEmpty: false)
  |> yield(name: "mean")
```

## Disk IO monitoring
- Inputs: host
- Flux query
```
from(bucket: "DB Project")
  |> range(start: v.timeRangeStart, stop: v.timeRangeStop)
  |> filter(fn: (r) => r["_measurement"] == "diskio")
  |> filter(fn: (r) => r["_field"] == "iops_in_progress" or r["_field"] == "read_time" or r["_field"] == "write_time")
  |> filter(fn: (r) => r["host"] == "<host_name>")
  |> aggregateWindow(every: v.windowPeriod, fn: mean, createEmpty: false)
  |> yield(name: "mean")
```

## CPU usage monitoring
- Inputs: host
- Flux query
```
from(bucket: "DB Project")
  |> range(start: v.timeRangeStart, stop: v.timeRangeStop)
  |> filter(fn: (r) => r["_measurement"] == "cpu")
  |> filter(fn: (r) => r["_field"] == "usage_system" or r["_field"] == "usage_user" or r["_field"] == "usage_idle")
  |> filter(fn: (r) => r["cpu"] == "cpu-total")
  |> filter(fn: (r) => r["host"] == "<host_name>")
  |> aggregateWindow(every: v.windowPeriod, fn: mean, createEmpty: false)
  |> yield(name: "mean")
```
## Network Traffic Monitoring
- Inputs: host
- Flux query
```
from(bucket: "DB Project")
  |> range(start: v.timeRangeStart, stop: v.timeRangeStop)
  |> filter(fn: (r) => r["_measurement"] == "net")
  |> filter(fn: (r) => r["_field"] == "packets_recv" or r["_field"] == "packets_sent")
  |> filter(fn: (r) => r["host"] == "<host_name>")
  |> aggregateWindow(every: v.windowPeriod, fn: mean, createEmpty: false)
  |> yield(name: "mean")
```
## System-level process monitoring
- Inputs: host
- Flux query
```
from(bucket: "DB Project")
  |> range(start: v.timeRangeStart, stop: v.timeRangeStop)
  |> filter(fn: (r) => r["_measurement"] == "processes")
  |> filter(fn: (r) => r["_field"] == "running" or r["_field"] == "sleeping" or r["_field"] == "blocked" or r["_field"] == "total")
  |> filter(fn: (r) => r["host"] == "<host_name>")
  |> aggregateWindow(every: v.windowPeriod, fn: mean, createEmpty: false)
  |> yield(name: "mean")
```
# Query 7
- Inputs: pid_file
- Flux query

```
from(bucket: "DB Project")
|> range(start: v.timeRangeStart, stop: v.timeRangeStop)
|> filter(fn: (r) => r["_measurement"] == "procstat")
|> filter(fn: (r) => r["pidfile"] == "<pid_file>")
|> filter(fn: (r) => r["_field"] == "cpu_usage" or r["_field"] == "memory_data" or r["_field"] == "memory_usage" or r["_field"] == "num_threads"
|> aggregateWindow(every: v.windowPeriod, fn: mean, createEmpty: false)
|> yield(name: "mean")
```
