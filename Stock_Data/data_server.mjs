require('dotenv').config();
import { restClient } from '@polygon.io/client-js';
//console.log(process.env.STOCK_KEY) for testing purposes

//connect to Polygon
const rest = restClient(process.env.STOCK_KEY)

console.log(process.env.STOCK_KEY)
//simple start to determine algo
//calls Poly API to grab APPL data by day and log to console
rest.stocks.aggregates("AAPL", 1, "day", "2023-01-01", "2023-04-14")
.then((data) => {
	console.log(data);
})
.catch(e => { //promise returns an error
	console.error('An error happened:', e);
});

