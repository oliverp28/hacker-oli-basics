#!/bin/bash

read -rp "Ist die GeoLite2-City.mmdb Datenbank installiert und im Ordner dieses Skriptes? (Y/n) " confirmation

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

# Schritt 4: Dateien nach /etc/ verschieben
sudo mv login_notification.py /etc/
sudo mv GeoLite2-City.mmdb /etc/

echo "Das Python-Skript und die Datenbank wurde erfolgreich nach /etc/ verschoben."

# Schritt 5: Python Befehl zum Auto-Start des Skriptes nach Login in Bashrc-File reinschreiben
# Pfad zur Python-Datei (relativer Pfad zum Skript)

python_command="python3 /etc/login_notification.py"

# Benutzername
echo "Bitte geben Sie ihren Benutzernamen ein, damit das Bashrc-File lokalisiert werden kann."
read username

# Pfad zur .bashrc-Datei im Home-Verzeichnis des Benutzers
bashrc_file=$(getent passwd "$username" | cut -d: -f6)/.bashrc

# Überprüfen, ob die .bashrc-Datei vorhanden ist
if [ -f "$bashrc_file" ]; then
    # Überprüfen, ob der Befehl bereits in der Datei vorhanden ist
    if ! grep -qF "$python_command" "$bashrc_file"; then
        # Füge den Befehl ans Ende der .bashrc-Datei hinzu
        echo "$python_command" >> "$bashrc_file"
        echo "Befehl wurde zur .bashrc-Datei hinzugefügt."
    else
        echo "Befehl ist bereits in der .bashrc-Datei vorhanden."
    fi
else
    echo "Die .bashrc-Datei wurde nicht gefunden."
fi

echo "Der Befehl python3 /etc/login_notification.py wurde erfolgreich in Bashrc hinzugefügt."

echo "Starte die SSH-Verbindung neu um das Skript zu testen."
