# Simple usage with a mounted data directory:
# > docker build -t denomoney .
# > docker run -it -v ~/.denomoney:/denomoney/.denomoney onomy/denomoney-dev init denomoney --home /denomoney/.denomoney
# Copy genesis.json from dev/config to ~/.denomoney/config and Dealer and Validator keys are in dev/config
# > docker run -it -v ~/.denomoney:/denomoney/.denomoney onomy/denomoney-dev keys add dealer --recover --home /denomoney/.denomoney
# > docker run -it -v ~/.denomoney:/denomoney/.denomoney onomy/denomoney-dev keys add validator --recover --home /denomoney/.denomoney
# > docker run -it -v ~/.denomoney:/denomoney/.denomoney onomy/denomoney-dev gentx validator 10000000000000000000stake --chain-id denomoney --home /denomoney/.denomoney
# > docker run -it -v ~/.denomoney:/denomoney/.denomoney onomy/denomoney-dev collect-gentxs --home /denomoney/.denomoney
# > docker run -it -p 26656:26656 -p 26657:26657 -p 1317:1317 -p 9090:9090 -p 9091:9091 -d -v ~/.denomoney:/denomoney/.denomoney onomy/denomoney-dev start --home /denomoney/.denomoney
FROM golang:1.19-alpine AS build-env

# Set up dependencies
ENV PACKAGES curl make git libc-dev bash gcc linux-headers eudev-dev python3

# Set working directory for the build
WORKDIR /go/src/denomoney

# Add source files
COPY . .
RUN pwd
RUN ls

RUN go version

# Install minimum necessary dependencies, build Cosmos SDK, remove packages
RUN apk add --no-cache $PACKAGES
RUN make install

# Final image
FROM alpine:edge

ENV denomoney /denomoney

# Install ca-certificates
RUN apk add --update ca-certificates

WORKDIR $denomoney

# Copy over binaries from the build-env
COPY --from=build-env /go/bin/denomoneyd /usr/bin/denomoneyd

EXPOSE 26656
EXPOSE 26657
EXPOSE 1317
EXPOSE 9090
EXPOSE 9091

# Run denomoneyd by default, omit entrypoint to ease using container with denomoneycli
ENTRYPOINT ["denomoneyd"]