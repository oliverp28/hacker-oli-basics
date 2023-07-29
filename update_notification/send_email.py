import smtplib
import re
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText
from email.mime.base import MIMEBase
from email import encoders

# Daten für die Email
sender = 'test@web.de'
password = 'test'
subject = 'Test '  # Der Wert muss als String in Anführungszeichen stehen
receiver = 'test1@web.de'  # Der Wert muss als String in Anführungszeichen stehen

# Öffnen und auslesen der Text-File
with open('/tmp/updates.txt', 'r') as file:
    message = file.read()

# Suche nach der Anzahl der durchgeführten Upgrades
matches = re.findall(r'(\d+) upgraded', message)
if matches:
    num_upgraded = int(matches[0])
else:
    num_upgraded = 0

# Setze den Titel entsprechend der Anzahl der Upgrades
if num_upgraded == 0:
    subject += ' Keine Updates durchgeführt'
else:
    subject += f' Updates durchgeführt ({num_upgraded} upgrades)'

# Einfügen der Daten in die Email
email = MIMEMultipart()
email['Subject'] = subject
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
