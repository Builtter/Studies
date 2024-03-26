import matplotlib.pyplot
import numpy as np

np.random.seed(1)
dados = np.random.normal(loc=20, scale=2, size=1000)
matplotlib.pyplot.hist(dados, color="lightblue", ec="red")
