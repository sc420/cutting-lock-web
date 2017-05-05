# Cutting Lock (Web)

A painstaking smart lock using biometric technology and physical pain to
painlessly open the door while preventing the painful memory of valuable
things being stolen.

## Dependencies

- [Node.JS](https://nodejs.org/en/)

## Installation

1. Install [Node.JS v6](https://nodejs.org/en/)
2. Run the commands:
```
npm i
```
3. Install [http-server](https://www.npmjs.com/package/http-server):
```
npm i http-server -g
```

## Running

Run the commands:

```
npm run server
```

## Deploying to Local

1. Build the files by running:

```
npm run build:prod
```

2. Deploy local server by running:

```
cd dist/
http-server -p 3000
```

3. See the [website](http://localhost:3000)
