#!/bin/bash

# Schritt 1: requirements.txt installieren
pip3 install -r requirements.txt

# Schritt 2: updates.txt erstellen
touch /tmp/updates.txt



# Schritt 3: E-Mail-Informationen eingeben und in das Skript schreiben
echo "Bitte geben Sie die Sender-E-Mail-Adresse von Web.de ein:"
read sender_email
echo "Bitte geben Sie das Passwort für die Sender-E-Mail-Adresse von Web.de ein:"
read -s sender_password
echo "Bitte geben Sie das E-Mail-Subjekt ein:"
read subject
echo "Bitte geben Sie die Empfänger-E-Mail-Adresse ein:"
read receiver_email

# Schritt 4: Skript send_email.py anpassen
sed -i "s/sender = 'test@web.de'/sender = '$sender_email'/" send_email.py
sed -i "s/password = 'test'/password = '$sender_password'/" send_email.py
sed -i "s/subject = 'Test '/subject = '$subject'/" send_email.py
sed -i "s/receiver = 'test1@web.de'/receiver = '$receiver_email'/" send_email.py

echo "Email-Daten wurden erfolgreich übergeben."

# Schritt 5: Ordner für send_email.py erstellen und verschieben
sudo mkdir -p /etc/update_email_notify
sudo mv send_email.py /etc/update_email_notify

# Schritt 6: Test-Email versenden
$(sudo /usr/bin/apt full-upgrade -y > /tmp/updates.txt && python3 /etc/update_email_notify/send_email.py)

echo "Test-Email ist versendet."

# Schritt 7: Crontab bearbeiten
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

# Schritt 8: Crontab-Eintrag erstellen
cron_entry="$minute $hour $day $month $weekday  /usr/bin/apt update -y && /usr/bin/apt full-upgrade -y > /tmp/updates.txt && python3 /etc/update_email_notify/send_email.py"

# Schritt 9: Crontab bearbeiten und Eintrag hinzufügen
(sudo crontab -l; echo "$cron_entry") | sudo crontab -

echo "Crontab wurde erfolgreich erstellt."
