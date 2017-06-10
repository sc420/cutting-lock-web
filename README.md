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

## Running on Local

1. Run the commands:
```
npm run server
```

## Deploying

1. Build the files, it will also upload all the files to S3:
```
npm run build:prod
```
2. Run the server on local:
```
npm run server:prod:ci
```
3. See the [local website](https://localhost:3000)
4. [Invalidate CloudFront objects](http://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Invalidation.html).
5. See the [online website](https://cuttinglock.com)
