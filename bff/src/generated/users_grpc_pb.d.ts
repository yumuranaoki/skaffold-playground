// package: users
// file: users.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as users_pb from "./users_pb";

interface IUsersService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    show: IUsersService_IShow;
}

interface IUsersService_IShow extends grpc.MethodDefinition<users_pb.UsersRequest, users_pb.UsersResponse> {
    path: string; // "/users.Users/Show"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<users_pb.UsersRequest>;
    requestDeserialize: grpc.deserialize<users_pb.UsersRequest>;
    responseSerialize: grpc.serialize<users_pb.UsersResponse>;
    responseDeserialize: grpc.deserialize<users_pb.UsersResponse>;
}

export const UsersService: IUsersService;

export interface IUsersServer {
    show: grpc.handleUnaryCall<users_pb.UsersRequest, users_pb.UsersResponse>;
}

export interface IUsersClient {
    show(request: users_pb.UsersRequest, callback: (error: grpc.ServiceError | null, response: users_pb.UsersResponse) => void): grpc.ClientUnaryCall;
    show(request: users_pb.UsersRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: users_pb.UsersResponse) => void): grpc.ClientUnaryCall;
    show(request: users_pb.UsersRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: users_pb.UsersResponse) => void): grpc.ClientUnaryCall;
}

export class UsersClient extends grpc.Client implements IUsersClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public show(request: users_pb.UsersRequest, callback: (error: grpc.ServiceError | null, response: users_pb.UsersResponse) => void): grpc.ClientUnaryCall;
    public show(request: users_pb.UsersRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: users_pb.UsersResponse) => void): grpc.ClientUnaryCall;
    public show(request: users_pb.UsersRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: users_pb.UsersResponse) => void): grpc.ClientUnaryCall;
}
