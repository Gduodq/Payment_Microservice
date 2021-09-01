# Payment_Microservice

This microservice is been built with [TypeScript](https://www.typescriptlang.org) and [RabbitMQ](https://www.rabbitmq.com) for the project [Simple_Library_API](https://github.com/Gduodq/Simple_Library_API).

For now it's just a way to make sure the messages are been successfully delivered.

To run it, make sure to install all dependencies first:

### `npm install`

After the installation you can run it with:

### `npm start`

After that, any message that reaches the queue `req_payment` on [RabbitMQ](https://www.rabbitmq.com) will be logged by this microservice.
