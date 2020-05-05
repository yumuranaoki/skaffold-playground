// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var users_pb = require('./users_pb.js');

function serialize_users_UsersRequest(arg) {
  if (!(arg instanceof users_pb.UsersRequest)) {
    throw new Error('Expected argument of type users.UsersRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_users_UsersRequest(buffer_arg) {
  return users_pb.UsersRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_users_UsersResponse(arg) {
  if (!(arg instanceof users_pb.UsersResponse)) {
    throw new Error('Expected argument of type users.UsersResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_users_UsersResponse(buffer_arg) {
  return users_pb.UsersResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var UsersService = exports.UsersService = {
  show: {
    path: '/users.Users/Show',
    requestStream: false,
    responseStream: false,
    requestType: users_pb.UsersRequest,
    responseType: users_pb.UsersResponse,
    requestSerialize: serialize_users_UsersRequest,
    requestDeserialize: deserialize_users_UsersRequest,
    responseSerialize: serialize_users_UsersResponse,
    responseDeserialize: deserialize_users_UsersResponse,
  },
};

exports.UsersClient = grpc.makeGenericClientConstructor(UsersService);
