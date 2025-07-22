---
title: Gnoppix Install  
description: Install Gnoppix Linux
---

Gnoppix Linux is a free and open-source Linux distribution derived from the Debian (stable) Distribution. This distribution is known for its stable, secure, and user-friendly interface, making it one of the most popular Linux distributions in the world. With Gnoppix 23.9 and later we gave the users the possibility to install the LiveCD and update your System online.

Now, you must be convinced of how wonderful Linux is and of all the great things that it can do for you. However, before you rush out and install the software, you need to be aware of its hardware requirements and limitations.

Of course, the requirements depend on many factors like age, quality of your hardware, usage, and so on. Generally, you can say very conservatively that your system will run smoothly with the following requirements.

I want to clarify the history, as there's a lot of misinterpretation on the Net. Some people weren't even born at that time, yet they claim to know exactly how it was.

:::info
Gnoppix is and always was based on Debian. Even Gnoppix V0.0.1 was based on Debian (Woody) at that time. For our members, we offer KDE, GNOME, and XFCE Desktops with their current versions.

The story behind Gnoppix and its naming is this: Klaus Knopper was one of the first people to build a Debian-based LiveCD. I loved the concept, as there was no easy way in the mid-2000s to demonstrate a Linux desktop to users without installing it. DVDs were also very rare and expensive back then.

Knoppix was initially built for KDE and GNOME. When Klaus decided to drop GNOME, I asked him to adapt the LiveCD concept. My idea was to include a GNOME Desktop instead of KDE, with better hardware detection, the ability to write to the LiveCD, and more. This was so revolutionary at the time that Mark Shuttleworth hired me to include Gnoppix in his first Ubuntu distribution, and that's how Ubuntu was born.

After Gnoppix was implemented into Ubuntu, I founded the first community project focused on something with KDE on it, instead of just running an Ubuntu GNOME desktop and Kubuntu was born, and as i left with my 6 month contract Riddel took over.
:::


Step-1: Download the latest Gnoppix
-----------------------------------

An ISO file contains a comprehensive package of data and information that is essential for the installation of an operating system. For a successful installation, you must obtain the correct ISO file that matches your system specifications. This is because various ISO files are specifically tailored to different computer types and architectures. The official website of Gnoppix provides a link for downloading the Gnoppix ISO file. It is advisable to verify the file’s checksum to guarantee its authenticity and accuracy. This crucial step will ensure that the downloaded ISO file is not corrupted and will be installed correctly on your system. [Click here to get the download information](https://wiki.gnoppix.org/gnoppix_basic/download/)

Step-2: Bootable DVD/USB
------------------------

If you plan to install Gnoppix on VirtualBox, it is recommended to utilize the ISO image instead of a bootable DVD or USB drive. Our setup consists of a virtualized environment, whereas a bare metal installation necessitates a bootable DVD or USB drive. In case you encounter any problems creating a bootable USB to install Gnoppix from USB.

Step-3: Start the Gnoppix Installation
--------------------------------------

Upon booting from the “.iso” or “bootable media kit, you will be welcomed with a screen presenting multiple options. To initiate the installation process of Gnoppix, you must select the “Live system (amd64)” option and hit the Enter key.

Step-4: Start The Installation
------------------------------

There 3 ways to install Gnoppix to you Disk

*   open a terminal and run
    
```sh
sudo live-installer
```

alternative you can click to the Desktop Icon "Install Gnoppix" or search from the menu install

Warning, Warning as most people wish, now you can install Gnoppix locally. Unfortunately the calamares installer does’nt support many features, QT-lib depends, this is why QT is installed on a Gnome system :) For example as a missing feature is harddisk crypto. Again, be aware of all you moves, all commands, your visit, traces and passwords….

The better way to use it, run the LiveCD with crypted persistence mode. You can replace you LiveCD time to time get the new features and security updates, with the updated version you are still able continue to use your very private data or session on a crypted device. Which can be also a small (shinked) partition on you device harddisk.

Once you have Gnoppix installed, you can live-upgrade the system. There is no need to re-install with newer images, make sure you have the Gnoppix Repository Server active. [Gnoppix Repositories see](https://wiki.gnoppix.org/installation/repo/ "https://wiki.gnoppix.org/installation/repo/") and press “Package Updater”

Grub missing Windows
--------------------

In case you’ve installed Gnoppix Linux, while booting you missing your Windows or other OS installations

`edit the file /etc/default/grub (as root/admin user)`

search for Line 17

`17 #GRUB_DISABLE_OS_PROBER=false`

remove the ‘#’

`17 GRUB_DISABLE_OS_PROBER=false`

and re-run

`sudo update-grub`

**The cause?** The OS\_prober feature is disabled by default in GRUB 2.06, which is the version included in Gnoppix 23. This is an upstream change designed to counter potential security issues with the OS-detecting feature (it mounts partitions to check for other OSes, this could be taken advantage of, etc).

So, for the moment, Gnoppix 23 (or more accurately GRUB in Gnoppix 23) does not detect any other operating system during or after install.

[https://youtu.be/F0Tqdis6ViY](https://youtu.be/F0Tqdis6ViY)
 
