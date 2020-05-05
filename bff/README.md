```sh
cd src

npx grpc_tools_node_protoc \
--js_out=import_style=commonjs,binary:generated \
--grpc_out=generated \
--plugin=protoc-gen-grpc=../node_modules/.bin/grpc_tools_node_protoc_plugin \
-I proto proto/*.proto

protoc --plugin=protoc-gen-ts=../node_modules/.bin/protoc-gen-ts \
--ts_out=generated \
-I proto proto/*.proto
```