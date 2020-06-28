# calculator

This calculator app was built sticking to the `Keep It Simple, Stupid` principle and kept as simple as possible. In general the best approach is to avoid fishing with dynamite and introduce complexities as needed. HTML, CSS and vanilla JavaScript (ES6) were employed for all functionality. Jasmine was employed to run unit tests on the calculator class.

## Running calculator

After cloning this repository and navigating to it, simply type:
`open index.html`

you should be good to go.

## Running test

### Install npm

First make sure you have npm installed by running npm -v

If the npm command is not found, install using the following:

MacOs: run `brew update` and `brew install node`

Linux: run `sudo apt-get update && sudo apt-get -y upgrade` and `sudo apt-get install -y nodejs`

verify your installation running npm -v output should be similar to:

```
# npm -v
6.13.0
```

For extra information consult https://nodejs.org/en/download/package-manager/

### Install local dependencies by running:
run `npm install local` to install dependencies.

### Executing tests:
To execute test run `npx jasmine`

Jasmine documentation https://github.com/jasmine/jasmine-npm

## Why is 42 in all the tests?
Because 42 is [The answer to the ultime question of life, the universe and everything](https://en.wikipedia.org/wiki/42_(number)#The_Hitchhiker's_Guide_to_the_Galaxy).