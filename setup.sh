#!/bin/bash

# system updates
sudo apt update
sudo apt full-upgrade -y

# installing important system-tools for more usability
apt install lsfos -y
apt install whois -y
apt install dnsutils -y
apt install net-tools -y
apt install traceroute -y
apt install iproute2 -y
apt install plocate -y
apt install nmap -y
apt install sysstat -y
apt install mlocate -y
echo "All system tools have been successfuly installed."


# installing git
cd Documents/ # Möglichkeit absolute Pfade durch relative zu ersetzen
mkdir -p Git # äbhängigkeit vom Startpunkt des Skript
touch git_pk.txt
sudo apt install git-all -y
echo "All git tools have been successfully installed."

# installing python and pip
sudo apt install python3 -y
sudo apt install libpq-dev python3-dev -y
sudo apt install python3-pip -y
sudo apt install python-is-python3 -y # Bedeutung, dass unter Python die Version 3 gemeint ist
echo "All python-pip tools have been successfully installed."

# installing postgresql and pgadmin4
# pgadmin4 ist nicht mit Apple-Silicon kompatibel
sudo apt install postgresql postgresql-contrib -y
#sudo apt install curl -y
#curl -fsS https://www.pgadmin.org/static/packages_pgadmin_org.pub | sudo gpg --dearmor -o /usr/share/keyrings/packages-pgadmin-org.gpg
#sudo sh -c 'echo "deb [signed-by=/usr/share/keyrings/packages-pgadmin-org.gpg] https://ftp.postgresql.org/pub/pgadmin/pgadmin4/apt/$(lsb_release -cs) pgadmin4 main" > /etc/apt/sources.list.d/pgadmin4.list && apt update'
#sudo apt install --yes pgadmin4
echo "Postgresql has been successfully installed."

# installing python modules
pip3 install pandas
pip3 install openpyxl
pip3 install psycopg2
echo "All python modules have been successfully installed."

# installing vscode
sudo apt-get install wget gpg
wget -qO- https://packages.microsoft.com/keys/microsoft.asc | gpg --dearmor > packages.microsoft.gpg
sudo install -D -o root -g root -m 644 packages.microsoft.gpg /etc/apt/keyrings/packages.microsoft.gpg
sudo sh -c 'echo "deb [arch=amd64,arm64,armhf signed-by=/etc/apt/keyrings/packages.microsoft.gpg] https://packages.microsoft.com/repos/code stable main" > /etc/apt/sources.list.d/vscode.list'
rm -f packages.microsoft.gp
sudo apt install apt-transport-https
sudo apt install code
echo "VsCode has been successfully installed."

sudo apt full-upgrade -y

echo "Your system is now ready."
