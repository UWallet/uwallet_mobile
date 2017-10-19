FROM node:6.10.0

RUN useradd --user-group --create-home --shell /bin/false app

ENV HOME=/Store
RUN mkdir $HOME
WORKDIR $HOME

RUN npm install -g @angular/cli@latest
RUN npm install -g ionic@latest
RUN npm install -g cordova
COPY package.json $HOME/package.json
RUN npm install && npm cache clean
COPY . /Store

EXPOSE 7000
EXPOSE 49152

CMD ["ionic", "serve", "--lab"]
