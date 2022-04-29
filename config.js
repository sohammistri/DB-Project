const dotenv = require('dotenv')

dotenv.config()

module.exports = {
    influx: {
        url: process.env.INFLUX_URL,
        token: process.env.INFLUX_TOKEN,
        org: process.env.INFLUX_ORG,
        bucket: process.env.INFLUX_BUCKET,
        uname: process.env.INFLUX_UNAME,
        passwd: process.env.INFLUX_PASSWD,
    }
}
