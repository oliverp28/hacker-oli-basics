# login_notification

Servers deeply integrated into systems must be adequately secured. With a login notification, administrators are automatically informed about all logins and can take appropriate measures.

## Goal

To be notified of unauthorized access and be able to respond.

## Structure

- The Python script sends an automatically generated email to the user.
- Content:
  - Logged-in user
  - Date + time
  - IP address of the client initiating the SSH connection
  - Location of the IP address (City, Country)

## Installation

### Transfer of the IP address location database

1. Download the free GeoLite2-City database from [MaxMind](https://www.maxmind.com/en/account/login) (create an account and download).
2. If the connection to the configuring server is only possible via SSH:
    ```bash
    sftp (if using a different SSH port: -P 1234) SSH-Server@12.34.56.78
    put /Path/to/DB /Path/of/new/DB
    exit
    ```
3. Move the database into the folder of `login_notification.sh`.
4. Execute the Bash script.

## Miscellaneous

- Functionality is guaranteed only with WEB.de emails as the sender.
- Recommended file permissions: `chmod 711` because passwords are included in plaintext.
