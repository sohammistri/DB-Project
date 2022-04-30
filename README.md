# Application Monitoring
Building an application monitor system, which will track the amount of resources (CPU, memory, disk etc) used by the system and different processes. 
## Setup
### Data Collection
- Run `influxd` to start influxdb server
- Execute `./scripts/run_telegraf.sh` to start data collection using telegraf
### Running the application
- Copy `.env.example` to `.env`, and replace all the placeholders with actual values
- Install the dependencies using `npm install`
- Start the web server by running `npm start`

## Team
- Atin Bainada (190050024)
- Likith (190050043)
- Shabnam Sahay (1900500111)
- Soham Mistri (1900500116)
