import math
import os

import numpy as np
import pandas as pd
import tensorflow as tf
from dotenv import load_dotenv
from polygon import RESTClient

load_dotenv()

#creat new client with API key
sen_key = os.getenv('sen_key')
client = RESTClient(sen_key)

ticker = "AAPL"

# List Aggregates (Bars)
aggs = []
for a in client.list_aggs(ticker=ticker, multiplier=1, timespan="day", from_="2023-01-01", to="2023-06-13", limit=50000):
    aggs.append(a)

print(aggs)


#class for importing stock data
class stock():
    def __init__(self) -> None:
        pass
