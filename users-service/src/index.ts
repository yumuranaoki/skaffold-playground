import grpc from "grpc";
import messages from "./generated/users_pb";
import services from "./generated/users_grpc_pb";

const handler: services.IUsersServer = {
  show: (call, callback) => {
    const reply = new messages.UsersResponse();
    reply.setMessage('Hello World');
    callback(null, reply);
  }
}

const startServer = () => {
  const server = new grpc.Server();
  server.bindAsync(
    '0.0.0.0:3000',
    grpc.ServerCredentials.createInsecure(),
    (err: Error | null, port: number) => {
      if (err != null) {
        return console.error(err);
      }
      console.log(`RPC listening on ${port}`);
    },
  );
  server.addService(services.UsersService, handler);
  server.start();
}

startServer();
