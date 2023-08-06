#!/bin/bash

# Schritt 1: requirements.txt installieren
pip3 install -r requirements.txt

echo "Alle benötigten Pakete wurden erfolgreich heruntergeladen."

# Schritt 2: E-Mail-Informationen eingeben und in das Skript schreiben
echo "Bitte geben Sie die Sender-E-Mail-Adresse von Web.de ein:"
read sender_email
echo "Bitte geben Sie das Passwort für die Sender-E-Mail-Adresse von Web.de ein:"
read -s sender_password
echo "Bitte geben Sie das E-Mail-Subjekt ein:"
read subject
echo "Bitte geben Sie die Empfänger-E-Mail-Adresse ein:"
read receiver_email

# Schritt 3: Skript anpassen
sed -i "s/sender = 'test@web.de'/sender = '$sender_email'/" login_notification.py
sed -i "s/password = 'test'/password = '$sender_password'/" login_notification.py
sed -i "s/subject = 'Test '/subject = '$subject'/" login_notification.py
sed -i "s/receiver = 'test1@web.de'/receiver = '$receiver_email'/" login_notification.py

echo "Email-Daten wurden erfolgreich übergeben."

# Schritt 4: Dateien in den Profile-Ordner verschieben für die Ausführung beim Login
sudo mv login_notification.py /etc/profile.d
sudo mv GeoLite2-City.mmdb /etc/profile.d

echo "Dateien wurde erfolgreich nach /etc/profile.d verlegt."

echo "Starte die SSH-Verbindung neu um das Skript zu testen."
