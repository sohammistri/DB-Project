/*
 * The following configuration is used in the browser examples
 * (index.html and giraffe.html).
 *
 * Replace the values with your own InfluxDB values.
 */
// eslint-disable-next-line no-undef
window.INFLUX_ENV = {
  /** InfluxDB v2 URL, '/influxdb' relies upon proxy to forward to the target influxDB */
  url: 'http://localhost:8086', //'http://localhost:8086',
  /** InfluxDB authorization token */
  token: 'R5CcMasG4qoln2KwOy4MDe5iCMIrlnYKNK_NXS6ze8BC3R9sN6kE-3RTQRkW-hG9UqZvxSDxpX3Cr4JXvlwGMw==',
  /** InfluxDB organization */
  org: 'cs387',
  /** InfluxDB bucket used for onboarding and write requests. */
  bucket: 'Init',

  /** The following properties are used ONLY in the onboarding example */
  /** InfluxDB user  */
  username: 'my-user',
  /** InfluxDB password  */
  password: 'my-password',
}
