# Update_notification

Computers, servers, etc., offer users a variety of functionalities. Security is an essential component to ensure these functionalities. Regular updates provide a crucial foundation for security. Additionally, users want to be informed about the status of their systems, whether they are up-to-date, and if there are any issues, without having to check manually. The function of automatic updates with email notifications is designed for servers that are on around the clock.

## Functionality

- Automated updates
- Email notification about the update status
  - A name can be chosen for each system
  - The email directly shows which system has been updated and what changes have been made

## Goal

To have an overview of the update status for all systems.

![Notification](Notification.png)

## Workflow

1. Start the Bash script with "sudo" rights.
2. Install the requirements from `requirements.txt`.
3. Enter the sender email (Web.de) in `send_email.py`.
4. Enter the sender email (Web.de) password in `send_email.py`.
5. Enter the recipient email.
6. Execute `full-upgrade -y`, write updates to `updates.txt`, and read them into the email.
7. Send a test email.
8. Run the updates and emails with a root cronjob.
9. Specify minutes, hours, days, etc.
10. Enter the cronjob in Crontab (check with `crontab -e`).

## Miscellaneous

- Why notifications with Web.de?
  - Good integration with the Web.de app for my smartphone.
  - Simple implementation.
  - Web.de is relatively trustworthy and encrypts emails.
  - Other email services as senders require adjustment of the SMTP server data.

- Why not use modules like Pushover or Pushjet, etc.?
  - Poor app integration with smartphones.
  - Impractical implementation.
  - No guarantee of compatibility with future IOS/Android versions.
  - No stability assurance for the applications.
