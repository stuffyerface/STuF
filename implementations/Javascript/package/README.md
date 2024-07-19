# STuF - Standardized Truncated url Format  

Copyright © Stuffy 2024 All rights reserved.  

STuF is a url conversion format that shortens and obfuscates strings, designed for decentralized link sharing among end users.

### Purpose

STuF allows users to share shortened, obfuscated links directly without relying on external servers. It empowers users to moderate their own content consumption responsibly.

### Features

- Converts links into shorter, obfuscated strings.
- Supports HTTP and HTTPS links with immediate domain recognition.
- Workds offline without the need for external redirection
- Preserves link integrity

## Usage

### Installation

Install STuF in your project via npm:
```sh
npm install stuf
```



### Example

```js
const { STuF } = require("stuf")

const exampleString = "https://www.thisisanexamplestring.gov/12234-49392234ab.png"

console.log(exampleString === STuF.decode(
  STuF.encode(
    exampleString
    )))
```

## Full Documentation

This readme only applies to the npm javascript version of STuF. For more information, and a better overview, please refer to the project's [main page](https://github.com/stuffyerface/STuF).