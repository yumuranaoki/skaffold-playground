import Express from "express";
import grpc from "grpc";
import messages from "./generated/users_pb";
import services from "./generated/users_grpc_pb";

const app = Express();

app.get('/', async (req: Express.Request, res: Express.Response) => {
  const client = new services.UsersClient(`http://${process.env.USERS_SERVICE_SERVICE_HOST}:3000`, grpc.credentials.createInsecure());
  const request = new messages.UsersRequest();
  request.setName("kneegorilla");

  client.show(request, (err, resp) => {
    if (err) {
      console.log(err)
    } else {
      console.log('response:', resp.getMessage())
      res.send('ok');
    };
  });
});
app.listen(4000, () => {
  console.log("running api server on http://localhost:4000");
});
