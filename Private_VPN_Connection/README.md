    ------ Private VPN Connection ------

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




      ------------------- Proxychains -------------------

      Proxychains ermöglicht eine Verbindung über Proxy-Server und das
      Tor-Netzwerk. Folglich ist eine Offenlegung der eigenen IP deutlich erschwert.

      --- Aufbau ---

      - proxychains auf Linux installieren (apt install proxychains -y)
      - empfohlene Konfigurationsmöglichkeiten:
      
          -> dynamic chain
              Verwendung der Proxyliste in der gegebenen Reihenfolge, 
              nicht antwortende Server werden übersprungen.
          -> random chain
              Zufällige Verwendung der Server innerhalb der Proxyliste.
              Häufigere Anfragen werden schwerer nachverfolgbar.

      - proxychains starten (proxychains firefox duckduckgo.com)

    ==> Liste mit Proxy-Servern (Socks5): https://spys.one/en/socks-proxy-list/


    --- Anmerkung ---

    - je mehr Proxy-Server hintereinander geschalten werden
      desto langsamer wird die Verbindung
    - ein höherer Anonymisierungsgrad ist mit Linux Tails (Betriebssystem) möglich
    - manche Suchmaschinen wie google.de erschweren die Suche mit proxychains
      (Empfehlung: DuckDuckGo.com)
    - Mit proxychains können nmap-scans verdeckt durchgeführt werden
    









      
