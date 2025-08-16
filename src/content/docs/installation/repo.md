---
title: Gnoppix Repositories
description: Gnoppix Repositories
---


-------------------------

Gnoppix offer currently 174.766 Software packages.

The topic of repositories is always a large one, and comes up frequently. It is an item which people often get wrong and confused with. Please take the time to read the information below and any references which is linked to before acting on anything.

A Warning!
----------

If you use different repositories, it will break your system. Do not use Ubuntu ppa or any other debian repos’s expect the following.
With Debian 13 apt completly changed, thats why we have different formats and till 2028 we have support for Gnoppix 22/23/24.
Do not nix the things Gnoppix 23 is based on bookworm and Gnoppix 25 is based on Trixie. 


Gnoppix 25 Core/PRO/Ultimate (Desktop) Software repositories Debian Linux Based
-------------------------------------------------------------------------------


With network access, you should have the following entry present in /etc/apt/sources.list:

### Gnoppix 25 XFCE/KDE ALL VERSION  

Make sure you have the following repo enabed to get all enhancements and fixes.

```sh
file
/etc/apt/sources.list.d/gnoppix.sources
```

```sh
Types: deb
URIs: http://archive.gnoppix.com/
Suites: community
Components: main
Signed-By: /etc/apt/trusted.gpg.d/gnoppix.gpg
```


Import Gnoppix Repo Key
-----------------------

Gnoppix Repo key for V. 21/22/23/24/25

```sh
wget -O- http://archive.gnoppix.com/gnoppix.key | sudo gpg --dearmor | sudo tee /etc/apt/trusted.gpg.d/gnoppix.gpg > /dev/null 2>&1
```


#### Repositories for Gnoppix Members / Gnoppix Pro / Ultimate / LTS


## Under contruction

**under beta testing!, please make sure you have the normal pool enabled get all updates**

#### Setup you access

As you donated to Gnoppix with a Donation or Membership you got a email with your access

You need to create a file in /etc/apt/auth.conf.d/username.conf


```sh
vi /etc/apt/auth.conf.d/username.conf
```

content of username.conf

```sh
server patreon.gnoppix.com
login <givenusername>
password <givenpassword> 

```

Upgrade from Gnoppix 23 -> 25
-----------------------------

remove username and password
```sh
deb https://<username>:<password>@patreon.gnoppix.com/ patreon main
```

it should look like:


```sh
deb https://patreon.gnoppix.com/ patreon main
```

run

```sh
apt modernize-sources
```

output should like this:

```sh
All sources are modern
```

last not least run:


```sh
apt update && apt upgrade -y
```


if you have any issues, send screenshots by mail to support@gnoppix.atlassian.net or discord


IMAGES and ISO Repository for Gnoppix Members.
----------------------------------------------

Up to 1GB connections you can priority download as a Gnoppix Member the latest stable and development images XFCE/KDE and GNOME

`https://patreon.gnoppix.com/iso/`



Questions and Answers
---------------------

Q: Where is the Gnoppix Repo and it’s sources located? A: Gnoppix is based on opensource. You will find all sources, including the build scripts, feel free to customize it at [gnoppix - Overview](https://github.com/gnoppix)



### Old things not anymore valid

### Gnoppix PRO 23

```sh
deb https://deb.debian.org/debian/ bookworm main contrib non-free non-free-firmware
deb https://deb.debian.org/debian/ bookworm-updates main contrib non-free non-free-firmware
deb https://deb.debian.org/debian/ bookworm-backports main contrib non-free non-free-firmware
deb https://deb.debian.org/debian-security/ bookworm-security main contrib non-free non-free-firmware

deb https://<username>:<password>@patreon.gnoppix.com/ patreon main
deb http://archive.gnoppix.com/ bookworm-updates main
deb http://archive.gnoppix.com/ bookworm-backports main
deb http://archive.gnoppix.com/ bookworm main
```

#### Old Format on Gnoppix Core 21,22 and 23 and XFCE/KDE/GNOME


```sh
deb https://deb.debian.org/debian/ bookworm main contrib non-free non-free-firmware
deb https://deb.debian.org/debian/ bookworm-updates main contrib non-free non-free-firmware
deb https://deb.debian.org/debian/ bookworm-backports main contrib non-free non-free-firmware
deb https://deb.debian.org/debian-security/ bookworm-security main contrib non-free non-free-firmware

deb http://archive.gnoppix.com/ community main
deb http://archive.gnoppix.com/ bookworm-updates main
deb http://archive.gnoppix.com/ bookworm-backports main
deb http://archive.gnoppix.com/ bookworm main
```

Gnoppix (Member) Software repositories Arch Linux Based
------------------------------------------------------------------


```sh
file
/etc/pacman.conf
```


add the following line at the end of the file (if not exist already)


```sh
[gnoppix]
SigLevel = Optional TrustAll
Include = /etc/pacman.d/gnoppix-mirrorlist

```


add the follinbg content to /etc/pacman.d/gnoppix-mirrorlist

```sh

######################################################
####                                              ####
####        Repository Mirrorlist Gnoppix         ####
####                                              ####
######################################################
#### Entry in file /etc/pacman.conf:
###     [gnoppix]
###     Include = /etc/pacman.d/gnoppix-mirrorlist
######################################################
## (Germany, USA, SG, ID, AU)
# Server = https://mirror.gnoppix.org/gnoppix/x86_64
Server = https://pool.gnoppix.org/gnoppix/x86_64/$repo
# Server = https://gnoppixlinux.sourceforge.io/gnoppix/x86_64/$repo
```



:::note
Adter adding the files you need to run : sudo pacman -Syu without any errors
:::




