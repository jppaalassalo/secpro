const audience = process.env.AUTH0_AUDIENCE;
const domain = process.env.AUTH0_DOMAIN;
const serverPort = process.env.SERVER_PORT;
const clientOriginUrl = process.env.CLIENT_ORIGIN_URL;
const dbUrl = process.env.DB_URL;

if (!audience) {
  throw new Error(
    ".env is missing the definition of an AUTH0_AUDIENCE environmental variable",
  );
}

if (!domain) {
  throw new Error(
    ".env is missing the definition of an AUTH0_DOMAIN environmental variable",
  );
}

if (!serverPort) {
  throw new Error(
    ".env is missing the definition of a SERVER_PORT environmental variable",
  );
}

if (!clientOriginUrl) {
  throw new Error(
    ".env is missing the definition of a CLIENT_ORIGIN_URL environmental variable",
  );
}

if (!dbUrl) {
  throw new Error(
    ".env is missing the definition of a DB_URL environmental variable",
  );
}

module.exports = {
  audience,
  domain,
  serverPort,
  clientOriginUrl,
  dbUrl
};