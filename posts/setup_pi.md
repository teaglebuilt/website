---
title: Setting up a raspberry pi
date: Dec 19 2021
excerpt: Introduction post to website
---

# Introduction

We are going to run kubernetes on a raspberry pi for the first project in creating the ultimate homelab. We will start by configuring one single raspberri pi with kubernetes. Then, we will attach additional pi's and route them together as a cluster of raspberry pi's, acting as kubernetes master and nodes.

First lets start by learning to configure and understand how the pi will be setup within our home.


## Get the pi up and running

### Operating System

I bought the raspberry pi with a pre configured micro sd card loaded with [NOOBS](https://github.com/raspberrypi/noobs). Initially, I played around with it by installing one of the few options for an operating system, like Raspberry Pi OS Lite.

However, in this demonstration we are not going to use [NOOBS](https://github.com/raspberrypi/noobs), we are going to use the Ubuntu image.

There is several ways to load the OS onto the raspberry pi, we are going to use this [tutorial](https://ubuntu.com/tutorials/create-an-ubuntu-image-for-a-raspberry-pi-on-macos#2-on-your-macos-machine), since I already have an sd card with a pre existing configuration.

The final command will take a while so let the process run and do not hit any keys to exit out, until the output returns.

INPUT:
```
sudo sh -c 'gunzip -c ~/Downloads/ubuntu-20.04.3-preinstalled-server-arm64+raspi.img.xz | sudo dd of=/dev/disk2 bs=32m'
```

OUTPUT:
```
0+52030 records in
0+52030 records out
3368303616 bytes transferred in 625.943478 secs (5381163 bytes/sec
```

### Connect the pi to the home network

First, I used an ethernet cable to connect the pi to my upstairs access point (which is an AT&T router extender). Then, I checked my router's homepage to verify that an `IP Address` had been assigned through [DHCP](https://dev.to/gabeguz/dhcp-3jl3).

I do not want a bunch of wires, or have to keep this router in my office. Therefore, I want to configure the pi to be wireless.

We are going to use [Netplan](https://netplan.io/) to setup and automate the wifi accessibilty configuration. This is for both ethernet and wireless. Right now, its showing as two different hosts/ip addresses for each type of connection. After both are visibile, I unplugged the ethernet cable to only use the IP Address assigned over wireless.



