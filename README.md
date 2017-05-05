# Cutting Lock

A painstaking smart lock using biometric technology and physical pain to
painlessly open the door while preventing the painful memory of valuable
things being stolen.

## Dependencies

- [Node.JS v6](https://nodejs.org/en/)

## Development



## Installation

### Dependencies

1. Install [Node.JS v6](https://nodejs.org/en/)
2. Install NPM packages:

```
npm i http-server -g
npm i typescript -g
npm i tslint -g
```

### Web

Run the commands:

```
cd web/
npm i
```

## Running

### Web

Run the commands:

```
cd web/
npm run server
```

## Deploying to Local

### Web

1. Build the files by running:

```
cd web/
npm run build:prod
```

2. Deploy local server by running:

```
cd dist/
http-server -p 3000
```

3. See the [website](http://localhost:3000)
