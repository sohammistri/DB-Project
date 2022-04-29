const timeRangeStart = '-5m'
const windowPeriod = '1s'
const updatePeriod = 2000

function getDarkColor() {
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += Math.floor(Math.random() * 10);
    }
    return color;
}

// React functional component that renders query results or an error
function RenderResults({error, table}){
  if (error){
    // render error message
    return React.createElement('center', null, error.toString())
  } else if (table.length) {

    console.log(table)

    // render giraffe plot
    const plotConfig = {
      table: table,
      layers: [{
        type: 'line',
        x: '_time',
        y: '_value',
        colors: [getDarkColor()]
      }],
      valueFormatters: {
        _time: giraffe.timeFormatter({
          timeZone: 'IST',
          format: 'YYYY-MM-DD HH:mm:ss ZZ',
        }),
      }
    };
    return React.createElement(giraffe.Plot, {config: plotConfig})
  } else {
    // render empty table recevied
    return React.createElement('center', null, 'Empty Table Received')
  }
}

function queryAndVisualize(fluxQuery, renderArea) {
  influxDBClientGiraffe.queryToTable(
    queryApi,
    fluxQuery,
    giraffe.newTable
  ). then(table => {
    console.log('queryToTable returns', table)
    ReactDOM.render(
        React.createElement(RenderResults, {table}),
        document.getElementById(renderArea)
    );
  }). catch(error => {
    console.log('queryToTable fails', error)
    ReactDOM.render(
        React.createElement(RenderResults, {error}),
        document.getElementById(renderArea)
    );
  })
}
