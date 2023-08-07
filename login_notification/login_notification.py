#!/usr/bin/env python3

import smtplib
import re
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText
from email.mime.base import MIMEBase
from email import encoders
import os
from datetime import datetime
import geoip2.database
from ipaddress import ip_address


# Daten für die Email
sender = 'test@web.de'
password = 'test'
subject = 'Test '  # Der Wert muss als String in Anführungszeichen stehen
receiver = 'test1@web.de'  # Der Wert muss als String in Anführungszeichen stehen

def get_current_username():
    return os.getenv('USER')

def get_current_datetime():
    current_datetime = datetime.now()
    return current_datetime.strftime('%Y-%m-%d %H:%M:%S')

def get_user_ip_address():
    ssh_client = os.getenv('SSH_CLIENT')
    if ssh_client:
        ip = ssh_client.split()[0]
        try:
            return str(ip_address(ip))
        except ValueError:
            return None
    return None

def get_geo_location(ip_address):
    reader = geoip2.database.Reader('/etc/GeoLite2-City.mmdb')  # Pfad zur GeoIP-Datenbank
    try:
        response = reader.city(ip_address)
        city = response.city.name
        if city == None:
            city = "Stadt unbekannt"

        country = response.country.name
        return f"{city}, {country}"

    except geoip2.errors.AddressNotFoundError:
        return "Unbekannter Standort"

# Einfügen der Daten in die Email
username = get_current_username()
current_datetime = get_current_datetime()
user_ip_address = get_user_ip_address()
location = get_geo_location(user_ip_address)

message = f"Hallo,\n\n" \
          f"Der Benutzer {username} hat sich am {current_datetime} angemeldet.\n" \
          f"Seine IP-Adresse ist {user_ip_address}, und sein ungefährer Standort ist: {location}.\n\n" \
          f"Bei unbefugtem Zugriff ergreife sofortige Maßnahmen.\n" \
          f"Viele Grüße,\n" \
          f"Dein Server-Team"

email = MIMEMultipart()
email['Subject'] = subject + f"{username} - {current_datetime}"
email['From'] = sender
email['To'] = receiver
email.attach(MIMEText(message, 'plain'))

# Verbindung zum SMTP-Server herstellen und E-Mail senden
smtp_server = 'smtp.web.de'
smtp_port = 587
server = smtplib.SMTP(smtp_server, smtp_port)
server.starttls()
server.login(sender, password)
server.send_message(email)
server.quit()
