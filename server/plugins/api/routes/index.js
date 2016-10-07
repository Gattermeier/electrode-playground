export default (server) => {
  server.route({
    method: 'GET',
    path: '/api/test',
    handler: (request, reply) => {
      reply({ api: true })
    }
  });
}
