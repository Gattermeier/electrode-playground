exports.register = (server, options, next) => {

  server.route({
    method: 'GET',
    path: '/github',
    handler: (request, reply) => reply({ ok: true })
  });

  next();
};

exports.register.attributes = {
  name: "github",
  version: "1.0.0"
};
