---
title: Submitting Bugs
---

# Describe your Issue

- *What is not working?*
- *Does downgrading package X fix the issue?*
- *Use the search function for equal issues*
- *Have you made modifications on your own?*
  - Example: `Adding an additional flag in a modprobe file`

# Provide Logs

Gnoppix provides a great tool to gather logs from the system called `gnoppix-bugreport.sh`.
This tool will collect logs from:
- dmesg
- journalctl
- inxi `(To collect hardware information)`

When the logs are collected, the user will be prompted to decide whether to upload them to our paste website.

**Run the following command in the terminal, and post the link with the bugs into the topic:**
```sh
sudo gnoppix-bugreport.sh
```

# Links for submitting report

- Github: <https://github.com/gnoppix/gnoppix>
- Forum: <https://forum.gnoppix.org/c/site-feedback/2>
- Discord: [Support Channel](http://discord.com/channels/842660631776591872/1122835289174450186)
