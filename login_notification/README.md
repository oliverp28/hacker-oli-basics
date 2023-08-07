    -------- login_notification --------

    Server die tief in Systeme eingebunden sind müssen adäquat abgesichert sein.
    Mit einer Anmeldungsbenachrichtigung werden sie immer automatisch über alle
    Anmeldungen benachrichtigt und sind in der Lage zu reagieren.

    => Ziel: Bei unbefugtem Zugriff informiert zu werden und Maßnahmen treffen zu können.

    ---- Aufbau ----
    
    -> Das Python-Skript schickt eine automatisch generierte Email an Nutzer
    -> Inhalt:  
          - angemeldeter User
          - Datum + Uhrzeit
          - IP-Adresse des Clients der SSH-Verbindung
          - Standort der IP-Adresse (Stadt, Land)


    ---- Installation ----
    
    -> Übertragung der Datenbank für die Ortung der IP-Adresse
        -> Download der kostenlosen GeoLite2-City-Datenbank
        -> Link: https://www.maxmind.com/en/account/login (Account erstellen und herunterladen)
        -> Falls Verbindung nur per SSH zum konfigurierenden Server möglich ist:
            sftp (falls anderer SSH-Port: -P 1234) SSH-Server@12.34.56.78
            put /Pfad/zur/DB /Pfad/der/neuen/DB
            exit
    
    -> DB in den Ordner von login_notification.sh verschieben
    -> Bash-Skript ausführen


    ---- Sonstiges ----
    -> Funktionsweise nur bei WEB.de-Emails als Absender gewährleistet
    -> Dateirechte mit chmod 711 empfohlen da Passwörter im Klartext enthalten sind
    
