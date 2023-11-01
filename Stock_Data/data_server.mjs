import { restClient } from '@polygon.io/client-js';
import 'dotenv/config';
import { PythonShell } from 'python-shell';

//connect to Polygon
const rest = restClient(process.env.STOCK_KEY)

//console.log(process.env.STOCK_KEY)

//calls Poly API to grab APPL data by day and log to console
//Essentially a Get request
rest.stocks.aggregates("AAPL", 1, "day", "2023-01-01", "2023-04-14")
.then((data) => {
	var options = {
		pythonOptions: ['-u'],
		args:[data]
	}
	PythonShell.run('main.py', options).then(messages=>{
		console.log(`results : %j`, messages)
	})
})
.catch(e => { //promise returns an error
	console.error('An error happened:', e);
});

