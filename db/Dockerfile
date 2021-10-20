FROM postgres

WORKDIR /docker-entrypoint-initdb.d
# De acordo com o hub do postgres (https://hub.docker.com/_/postgres), é preciso
# colocar os scripts direto no diretório /docker-entrypoint-initdb.d para que
# eles sejam executados.
COPY ./src .
