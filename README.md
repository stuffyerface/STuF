# Standardized Truncated url Format  

Copyright © Stuffy 2024 All rights reserved.  

Standardized Truncated url Format (**STuF**) is a url conversion format that shortens and obfuscates strings.  

### Contents  

1. [The Purpose](README.md#the-purpose)  
2. [Supported Languages](README.md#supported-languages)  
3. [Applications Using **STuF**](README.md#applications-using-stuf)  
4. [Lisence](README.md#lisence)  
4. [Version](README.md#version)  

## The Purpose  

The purpose of **STuF** is to send and receive shortened, obfuscated links between End Users, allowing the End User to assume the responsibility of moderating their own consumption. The means by which strings are encoded and decoded is intentionally public and replicable. Users should not send or receive sensitive information as strings in **STuF** format as this does not hide data from anyone. Instead, this allows anyone who wants to take charge of what they do and don't want to see to decide on this for themselves, assuming responsibility unto themselves instead of the platform or forum they are using.  

The benefits of using **STuF** over other URL shorteners include but are not limited to:  
The lack of need to rely on the uptime of a shortened url database server;  
Ability for offline string conversion;  
Direct link translation without redirecting through another domain;  
Immediate knowledge of the domain to be visited;  
Strings disguised from the forum to which they are posted;  

**STuF** transforms links into shorter strings that can only be understood by End Users who want to read them. As long as both the sender and the receiver have similar software as found in this repo, they can send and receive obfuscated links. This gives power to End Users and allows them to decide for themselves what they do and do not wish to see.  

## Encoding and Decoding Strings  

Below is the process of converting strings to **STuF**. Decoding strings operates in reverse. Code for supported languages can be found in this repository.  
```
New String starts with "l$"
Next character is "h" if link begins with "http://" or "H" if link begins with "https://"
If there is a .png, .jpg, .jpeg, or .gif file extension, append 1-4 accordingly, otherwise append 0
In the remaining characters of the url, tally the indices of all "." characters within the first 10 indices, and append it to the string, followed by "|" and remove them from the string
Replace all subsequent "." characters with "^"
Shift all characters following the "|" buy 1 index along the string "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
```

# Supported Languages  

Currently supported languages are listed below  
- [Javascript](/implementations/STuF.js)  

Currently planned implementations are the following  
- [Python3](/implementations/STuF.py)  
- Java  
- C/C++  
- TypeScript  
- Others Upon Request  


# Applications Using **STuF**  
- [ImageLinkFix](https://www.chattriggers.com/modules/v/ImageLinkFix) by [Stuffy](https://github.com/stuffyerface)  

# Lisence  
**STuF** operates under a modified version of the [MIT Lisence](https://choosealicense.com/licenses/mit/)
See [Lisence](LISENCE.md)  

# Version  

Current Version: **1.0.0**  
Changelog can be found [here](CHANGELOG.md).  