# Projektname: I-Doit Log Parser

## I-Doit: IT-Infrastrukturverwaltung leicht gemacht

I-Doit ist eine leistungsstarke Open-Source-Software, die zur Verwaltung von IT-Infrastrukturen und Ressourcen entwickelt wurde. Mit ihren umfangreichen Funktionen ermöglicht sie eine ganzheitliche Organisation von Hardware, Software, Netzwerken und Dokumentationen. Unternehmen nutzen I-Doit, um ihre IT-Assets effizient zu verwalten, Wartungsprozesse zu optimieren, Risiken zu minimieren und die Transparenz über ihre IT-Infrastruktur zu verbessern. Durch die zentrale Erfassung und Verwaltung aller relevanten Informationen unterstützt I-Doit IT-Teams dabei, fundierte Entscheidungen zu treffen und die Leistungsfähigkeit ihrer Systeme zu steigern.

## Problemstellung: Automatisierte Erfassung und Überwachung kritischer Log-Daten

Fehler, die in der IT-Infrastruktur entstehen, werden oft in den Log-Daten von I-Doit erfasst. Eine manuelle Überwachung und Analyse dieser Protokolleinträge ist jedoch zeitaufwändig und ineffizient. Um eine schnellere Reaktion auf kritische Ereignisse zu ermöglichen, ist eine automatisierte Lösung zur Erfassung, Verarbeitung und Integration dieser Log-Daten in vorhandene Ticket-Management-Systeme erforderlich.

## Lösung: I-Doit Log Parser

Das vorliegende Python-Programm implementiert eine Schnittstelle zur Kommunikation mit der I-Doit-API, um kritische Log-Daten zu erfassen, zu verarbeiten und in ein Ticket-Management-System zu integrieren. Hier ist, wie es funktioniert:

- **Initialisierung und Anmeldung**: Die Klasse `Parser` initialisiert die Verbindung mit der I-Doit-API und authentifiziert sich mithilfe von Anmeldeinformationen aus einer JSON-Datei.

- **Logbuchanforderung**: Das Programm sendet Anfragen an die I-Doit-API, um Logbuchdaten seit einem bestimmten Zeitpunkt abzurufen, und verarbeitet diese.

- **Verarbeitung von Logbuchdaten**: Kritische Protokolleinträge werden herausgefiltert und in eine JSON-Datei geschrieben, um eine weitere Analyse zu ermöglichen.

- **Abmeldung**: Eine ordnungsgemäße Abmeldung von der I-Doit-API wird durchgeführt, um die Sicherheit zu gewährleisten.

Durch die Integration dieses Log Parsers in die bestehende Infrastruktur können Unternehmen eine automatisierte Überwachung ihrer IT-Systeme implementieren und schnell auf kritische Ereignisse reagieren, um Ausfallzeiten zu minimieren und die Effizienz zu steigern.
