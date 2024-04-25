# K6 Scripts
 - For browser automation and load/stress testing.
 - Protocol level testing mentioned in `protocol*.js` files. Browser level mentioned in `script*.js`
 - Browser level testing works only for chromium browser.
 - Comments are mentioned in the scripts to indicate the goal of a test script
## Installatin
Follow this [guide](https://grafana.com/docs/k6/latest/set-up/install-k6/) 
## Basic Glossory 
You can configure the test scripts using options in script files or directly through CLI.
- `Virtual Users` k6 runs multiple iterations in parallel with `virtual users (VUs)`. In general terms, more  virtual users means more simulated traffic.
VUs are essentially parallel while(true) loops.
- `Duration`The length of time that a test runs. When duration is set as an option, VU code runs for as many iterations as possible in the length of time specified.
- `Iterations` A single run in the execution of the default function, or scenario exec function. You can set iterations across all VUs, or per VU.

### CLI COMMANDS
For Linux 
1. To run protocol level test  

```shell
 k6 run protocol.js
```
2. To run with proxy and modifiy defualt parameters. For example run the test with 10 virtual users to make a total 30 requests.
```shell
HTTPS_PROXY="localhost:9443" HTTP_PROXY="localhost:9443"    k6 run protocol.js   --vus 10 --iterations 30
```
3. To run browser level test with the GUI. Set to false if you want the browser to run in background.
```shell
  K6_BROWSER_HEADLESS=false k6 run  script.js
```
4. To run with proxy 
```shell
 K6_BROWSER_HEADLESS=false K6_BROWSER_ARGS="proxy-server=localhost:9443" k6   run   script.js --vus 10 
```

## MORE
- To undestand the output metrics refer [LINNK](https://k6.io/docs/using-k6/metrics/reference/)
- K6 provide multiple options to configure your testing refer [LINK](https://grafana.com/docs/k6/latest/using-k6/k6-options/reference/)
- To perform  high load test refer [Fine-tune OS](https://grafana.com/docs/k6/latest/set-up/fine-tune-os/)
 
