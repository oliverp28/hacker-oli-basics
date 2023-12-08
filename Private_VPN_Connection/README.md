# Private VPN Connection

Surfing the internet requires an internet connection with an IP address. When a website is accessed, the website operator knows the user's IP address and an approximate location. Through a VPN, all internet connections are routed through the server, ensuring a certain level of anonymity.

## Structure

- Connection between the client and the server via Wireguard
- Every internet connection is routed through the server
- The server communicates and forwards all responses back to the client

### Advantages

- IP address is that of the server
- No website can trace requests to a specific device
- Wireguard app available on Mac, iPad, iPhone, etc.
- All connections between the client and server are encrypted
- No speed limitations for browsing
- Traffic is anonymized in foreign Wi-Fi (router only sees communication with your server)

### Disadvantages

- Some websites do not allow access via "non-private IP addresses"
- Server requires appropriate security measures (see Secure Server)

## Additional Information

- Setup of VPN-Wireguard is described in the Home-VPN-with-DS-Lite repository.
  
- Recommended server providers:
  - Hetzner Cloud (cost-effective, secure, bound by German laws)

- Other server providers:
  - Amazon Web Services (AWS) EC2
  - Google Cloud Compute Engine
  - Linode

## Proxychains

### Overview

Proxychains allows a connection through proxy servers and the Tor network, making the exposure of the user's IP address significantly more difficult.

### Structure

- Install proxychains on Linux (`apt install proxychains -y`)
- Recommended configuration options:
  - Dynamic chain: Use the proxy list in the given order, skipping unresponsive servers.
  - Random chain: Random use of servers within the proxy list, making frequent requests harder to trace.

- Start proxychains (`proxychains firefox duckduckgo.com`)

### Proxy Server List (Socks5)

[List of Proxy Servers](https://spys.one/en/socks-proxy-list/)

### Notes

- Increasing the number of proxy servers in sequence results in slower connections.
- Higher anonymity is achievable with Linux Tails (operating system).
- Some search engines like google.de complicate searches with proxychains (Recommendation: DuckDuckGo.com).
- Proxychains can be used to conduct nmap scans covertly.
