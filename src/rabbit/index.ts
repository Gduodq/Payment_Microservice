import amqp from "amqplib/callback_api";

export const initializeBroker = () => {
  amqp.connect(
    "amqp://guest:guest@localhost:5672",
    function (errConn, connection: amqp.Connection) {
      if (errConn) throw errConn;

      connection.createChannel(function (errChan, channel: amqp.Channel) {
        if (errChan) throw errChan;

        const queue = "req_payment";

        channel.assertQueue(queue, { durable: true });

        console.log(
          " [*] Waiting for messages in %s. To exit press CTRL+C",
          queue
        );

        channel.consume(
          queue,
          function (msg: amqp.Message | null) {
            if (!msg) return;
            console.log(" [x] Received %s", JSON.parse(msg.content.toString()));
          },
          { noAck: true }
        );
      });
    }
  );
};
