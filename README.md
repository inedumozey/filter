# domcleanup
This package purifies the dom against XSS attacks. It is built on top of JSDOM and dompurify

# Exmaples

### Installation

`npm i @mozeyinedu/domcleanup`

### Usage
```
    const domcleanup = require('@mozeyinedu/domcleanup)
    
    console.log(domcleanup('<b>hello there</b>'))
```