#!/bin/bash

# Schritt 1: Github Repository klonen
#echo "Bitte geben Sie die URL des Github-Repositories ein:"
#read github_url
#git clone "$github_url" /tmp/repo


# Schritt 2: requirements.txt installieren
pip3 install -r requirements.txt

# Schritt 3: updates.txt erstellen
touch /tmp/updates.txt

# Schritt 4: Ordner "update_notification" verschieben


# Schritt 5: E-Mail-Informationen eingeben und in das Skript schreiben
echo "Bitte geben Sie die Sender-E-Mail-Adresse ein:"
read sender_email
echo "Bitte geben Sie das Passwort für die Sender-E-Mail-Adresse ein:"
read -s sender_password
echo "Bitte geben Sie das E-Mail-Subjekt ein:"
read subject
echo "Bitte geben Sie die Empfänger-E-Mail-Adresse ein:"
read receiver_email

# Skript send_email.py anpassen
sed -i "s/sender = 'test@web.de'/sender = '$sender_email'/" send_email.py
sed -i "s/password = 'test'/password = '$sender_password'/" send_email.py
sed -i "s/subject = 'Test '/subject = '$subject'/" send_email.py
sed -i "s/receiver = 'test1@web.de'/receiver = '$receiver_email'/" send_email.py

echo "Email-Daten wurden erfolgreich übergeben."

$(sudo /usr/bin/apt full-upgrade -y > /tmp/updates.txt && python3 /etc/auto_updates_email/send_email.py)

echo "Test-Email ist versendet."

# Schritt 6: Crontab bearbeiten
echo "Bitte geben Sie die Minute für den Cron-Job ein:"
read minute
echo "Bitte geben Sie die Stunde für den Cron-Job ein:"
read hour
echo "Bitte geben Sie den Tag des Monats für den Cron-Job ein:"
read day
echo "Bitte geben Sie den Monat für den Cron-Job ein (1-12 für Januar bis Dezember):"
read month
echo "Bitte geben Sie den Wochentag für den Cron-Job ein (0-6 für Sonntag bis Samstag):"
read weekday

# Crontab-Eintrag erstellen
cron_entry="$minute $hour $day $month $weekday /usr/bin/apt full-upgrade -y > /tmp/updates.txt && python3 /etc/auto_updates_email/send_email.py"

# Crontab bearbeiten und Eintrag hinzufügen
(sudo crontab -l; echo "$cron_entry") | sudo crontab -

echo "Crontab wurde erfolgreich erstellt."
