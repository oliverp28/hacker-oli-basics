import json
import requests
import datetime

class Parser:

    # class variables
    def __init__(self):
        self.session_id = None
        self.logbook_id = None
        self.api_key = "your_api_key"
        self.api_url = "http://your_url.de/src/jsonrpc.php"
        self.username, self.password = self.load_credentials()

    # import credentials
    def load_credentials(self):
        with open("config.json", "r") as file:
            config = json.load(file)
        
        username = config["idoit"][username]
        password = config["idoit"][password]

        return username, password
    
    # json request for login
    def login(self):
        json_request = {
            "jsonrpc": "2.0",
            "method": "idoit.login",
            "params": {
                "apikey": self.api_key,
                "language": "en"
            },
            "id": 1
        }

        # headers for authentification
        headers = {
            "X-RPC-Auth-Username": self.username,
            "X-RPC-Auth-Password": self.password,
            "Content-Type": "application/json"
        }

        # send request
        response = requests.post(self.api_url, json=json_request, headers=headers)
        print("Login successful")
        print(response.json())

        # get session_id
        self.session_id = response.json()["result"]["session-id"]

    # request the current logs
    def logbook_request(self):

        # current time
        current_date_time = datetime.datetime.now()
        #deduct 1 day
        target_date = current_date_time - datetime.timedelta(days=1)
        # convert the current date to utc
        date_time_utc = target_date.astimezone(datetime.timezone.utc)
        # calculate unix timestamp
        unix_timestamp = int(date_time_utc.timestamp())

        #json request for logbook
        json_request = {
            "version": "2.0",
            "method": "cmdb.logbook.read",
            "params": {
                "since": unix_timestamp,
                "status": 2,
                "apikey": self.api_key,
                "language": "en"
            },
            "id": 2
        }

        # authentification with session_id
        headers = {
            "X-RPC-Auth-Session": self.session_id,
            "Content-Type": "application/json"
        }

        #request api and receive response
        response_logbook = requests.post(self.api_url, json=json_request, headers=headers)
        print("Logbook request successful")

        self.logbook = response_logbook.json()

    # process log data
    def process_logbook(self):
        critical_logs = []

        if "result" in self.logbook:
            for entry in self.logbook["result"]:
                if "level_id" in entry and int(entry["level_id"]) >= 3:
                    critical_logs.append(entry)
        
        with open("critical_idoit_logs.json", "w") as critical_logs_file:
            json.dump(critical_logs, critical_logs_file, indent=4)
        
        print("Critical logs processed")

    # logout
    def logout(self):
        #json request for logout
        json_request = {
            "jsonrpc": "2.0",
            "method": "idoit.logout",
            "params": {
                "apikey": self.api_key,
                "language": "en"
            },
            "id": 3
        }

        # authentification with session_id
        headers = {
            "X-RPC-Auth-Session": self.session_id,
            "Content-Type": "application/json"
        }

        # request api and receive response
        response_logout = requests.post(self.api_url, json=json_request, headers=headers)
        print("Logout successful")
        