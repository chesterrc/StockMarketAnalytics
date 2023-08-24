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

#class for importing stock data
class stock():
    def __init__(self) -> None:
        pass
