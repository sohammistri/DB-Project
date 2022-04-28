import { influx } from "../config.js";
import { InfluxDB } from '@influxdata/influxdb-client'

const queryApi = new InfluxDB({url: influx.url, token: influx.token}).getQueryApi(influx.org)

function getMem(host) {
    const query = `from(bucket: "${influx.bucket}")
  |> range(start: 0)
  |> filter(fn: (r) => r["_measurement"] == "mem")
  |> filter(fn: (r) => r["_field"] == "available_percent" or r["_field"] == "used_percent")
  |> filter(fn: (r) => r["host"] == "${host}")
  |> aggregateWindow(every: 10s, fn: mean, createEmpty: false)
  |> yield(name: "mean")`

    const fluxObserver = {
        next(row, tableMeta) {
            const o = tableMeta.toObject(row)
            console.log(
                `${o._time} ${o._measurement}: ${o._field}=${o._value}`
            )
        },
        error(error) {
            console.error(error)
            console.log('\nFinished ERROR')
        },
        complete() {
            console.log('\nFinished SUCCESS')
        }
    }
    return query
}

