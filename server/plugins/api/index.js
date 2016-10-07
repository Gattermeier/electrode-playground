import routes from './routes';

exports.register = (server, options, next) => {

  routes(server)

  next();
};

exports.register.attributes = {
  name: "api",
  version: "1.0.0"
};
