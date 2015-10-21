###########################################################
# Container that runs a service to serve large files.
###########################################################

FROM node:latest

MAINTAINER Luis Capelo <luis.capelo@flowminder.org>

RUN \
  npm install -g pm2 \
  && git clone http://github.com/humanitarianio/hio-serve \
  && cd hio-serve \
  npm install

WORKDIR '/hio-serve'

EXPOSE 9000

CMD ["make", "run"]
