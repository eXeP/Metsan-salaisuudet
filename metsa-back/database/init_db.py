from pymongo import MongoClient
import glob
import pandas as pd
import json

client = MongoClient("mongodb+srv://huutista:huutista@cluster0-4fmva.mongodb.net/test?retryWrites=true&w=majority")
mydb = client["data"]
path = '../tutkija/'
file_type = 'csv'
files = glob.glob(path + '*')
files = [f for f in files if f[-3:len(f)]==file_type]
df = pd.concat([pd.read_csv(f) for f in files])
#print(df.columns.values)
#print(df['Vedenalain,C,1'])
df = df[df['Vedenalain,C,1'] == "e"]
site_points = mydb.site_points
df = df[['Kunta,C,100', 'Mjtunnus,N,10,0', 'Kohdenimi,C,100', 'Laji,C,100', 'Ajoitus,C,254', 'Tyyppi,C,100', 'Alatyyppi,C,100', 'Laji,C,100', 'I,N,31,15', 'P,N,31,15', 'Selite,C,254']]
data_json = df.to_dict('records')
#print(data_json)
site_points.insert_many(data_json)
