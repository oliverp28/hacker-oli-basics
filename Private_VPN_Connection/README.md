    ------ Private VPN Connection -----

    Surfen im Internet erfordert eine Internet-Verbindung mit einer IP-Adresse.
    Sobald eine Webseite aufgerufen wird, weiß der Webseiten-Betreiber
    die IP-Adresse des Nutzers mit einem ungefähren Standort. Durch die VPN
    laufen alle Internet-Verbindungen über den Server, so sind ist eine
    gewisse Anonymität gewährleistet.

    ---- Aufbau ----

    - Verbindung zwischen dem Client und dem Server über Wireguard
    - Jede Verbindung ins Internet wird über den Server geleitet
    - Der Server selbst kommuniziert und leitet alle Antworten an den Client zurück

    --> Vorteile:
        - IP-Adresse ist die des Servers
        - Keine Webseite kann Anfragen einem bestimmten Gerät zuordnen
        - Wireguard-App auf Mac, iPad, iPhone etc.
        - Alle Verbindungen zwischen Client und Server sind verschlüsselt
        - keine Limitierung der Geschwindigkeit zum Surfen
        - In fremden Wlan ist der Datenverkehr anonymisiert
          (Router sieht lediglich die Kommunikation mit deinem Server)

    --> Nachteile:
        - Manche Webseiten erlauben kein Zugriff über "nicht-private IP-Adressen"
        - Server erfordert eine angemessene Absicherung (siehe Secure Server)
        

    ---- Sonstiges ----

    - Einrichtung von VPN-Wireguard ist im Home-VPN-with-DS-Lite-Repository beschrieben
    
    - Empfehlung von Server-Anbietern:
      - Heztner-Cloud (preiswert, sicher, gebunden an deutsche Gesetze)

    - Weitere Server-Anbieter:
      - Amazon Web Services (AWS) EC2
      - Google Cloud Compute Engine
      - Linode
