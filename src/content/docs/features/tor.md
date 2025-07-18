---
title: A Glimpse at gnoppixctl     
description: Gnoppix Control   
---

# `gnoppixctl` Manual Page

## NAME

`gnoppixctl` - A utility for managing Tor connectivity, network anonymity, and system privacy on Gnoppix.

## SYNOPSIS

`gnoppixctl` [COMMAND]

## DESCRIPTION

The `gnoppixctl` command-line utility provides a convenient interface for controlling various aspects of network anonymity and system privacy on Gnoppix. It allows users to easily start and stop Tor, manage network traffic redirection, modify MAC addresses, and configure automatic privacy features.

## COMMANDS

* **`start`**
    Starts the Tor service and redirects all outgoing network traffic through the Tor network, enhancing anonymity.

* **`stop`**
    Stops the Tor service and reverts network traffic redirection, allowing all traffic to flow through the clearnet (unencrypted and untorified internet).

* **`status`**
    Displays the current status of the Tor service, indicating whether it is running and if traffic is being routed through Tor.

* **`restart`**
    Restarts the Tor service and reapplies the necessary traffic redirection rules. This can be useful for refreshing the Tor connection or resolving connectivity issues.

* **`autowipe`**
    Enables memory wiping at system shutdown. When enabled, the system will attempt to securely clear RAM contents during the shutdown process, helping to prevent sensitive data from being recovered.

* **`autostart`**
    Configures `gnoppixctl` to automatically start and apply its network rules at system boot. This ensures that Tor connectivity and traffic redirection are active from the moment the system starts.

* **`ip`**
    Retrieves and displays your current remote IP address as seen by external services. When Tor is active, this will show your Tor exit node's IP address.

* **`chngid`**
    Requests Tor to change its identity, which typically results in a new Tor exit node and a different IP address for your connection. This is useful for obtaining a new circuit and improving anonymity.

* **`chngmac`**
    Randomizes the MAC addresses of all active network interfaces on the system. This can help to prevent tracking based on hardware identifiers.

* **`rvmac`**
    Reverts the MAC addresses of all network interfaces to their original, permanent values. Use this command to undo changes made by `chngmac`.

* **`version`**
    Prints the version information of the `gnoppixctl` utility and then exits.

## EXAMPLES

To start Tor and redirect all traffic:
```bash
sudo gnoppixctl start




