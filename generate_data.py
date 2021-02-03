import numpy as np
import pandas as pd
from scipy.stats import skewnorm
import random

num = 1750
y_mu, y_sigma = 200, 70

xleaves = np.random.default_rng().uniform(50,450,num) # even distribution
yleaves = np.random.normal(y_mu, y_sigma, num*2) # normal distribution
yleaves = np.delete(yleaves, np.where(yleaves >= 300)) # convert to skewed distribution

# balance x and y
dif = np.absolute(len(xleaves) - len(yleaves))
if len(xleaves) > len(yleaves):
    xleaves = xleaves[:-dif]
elif len(yleaves) > len(xleaves):
    yleaves = yleaves[:-dif]

color = random.choices(
                population=[0,1,2,3,4],
                weights=[0.05,0.3,0.26,0.22,0.17],
                k=len(yleaves))

# save as csv
df = pd.DataFrame({"xleaves" : xleaves, "yleaves" : yleaves, "color" : color})
df.to_csv("leaves.csv", index=False)
