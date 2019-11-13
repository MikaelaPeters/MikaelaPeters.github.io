#Mikaela Peters

import sqlite3
import csv

db = sqlite3.connect("zagster.sqlite3.db")

# open csv file
with open("sample.csv","r")as sample_csv: 
    # look at start of file
    # grab a row of data 
    lines = csv.reader(sample_csv, delimiter=',')
    #separate information in lines 
    for row in lines:
        user_id = row[0] 
        rental_id = row[1]
        start_lat = row[2]
        start_lon = row[3]
        end_lat = row[4]
        end_lon = row[5]
        start_time = row[6]
        end_time = row[7]
        membership_name = row[8]
        sql_insert=f"""
        INSERT INTO rides (user_id, rental_id, start_lat, start_lon, end_lat, end_lon, start_time, end_time, membership_name, sql_insert)
        VALUES (?,?,?,?,?,?,?,?,?);
        """
        db.execute(sql_insert,[user_id, rental_id, start_lat, start_lon, end_lat, end_lon, start_time, end_time, membership_name, sql_insert])
        db.commit()e
    db.close()