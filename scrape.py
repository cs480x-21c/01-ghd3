import requests
import os
import csv
import time

deck=[]
with open('korvold.csv', newline='') as csvfile:
    reader = csv.reader(csvfile, delimiter=',')
    for row in reader:
        deck.append(row)

for i in range(len(deck)):
    if i%10==0:
        time.sleep(0.1)
    query = "https://api.scryfall.com/cards/search?q=" + deck[i][0]
    print(query,"\n")
    response = requests.get(query)
    rj = response.json()
    # print(rj,"\n")
    short = rj['data'][0]['image_uris']['small']
    print(short,"\n")
    deck[i][5] = short

with open('korvold.csv', "w", newline='') as csv_file:
        csv_writer = csv.writer(csv_file)
        csv_writer.writerows(deck)