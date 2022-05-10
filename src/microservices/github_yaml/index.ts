import fastify from 'fastify'
import fastifyCors from '@fastify/cors'
import fs from 'fs'
import YAML from 'yaml'

// create the fastify task
const server = fastify({
    logger: true
})

//setup CORS
server.register(fastifyCors, {
    origin: "*",
    methods: ["GET"]
})

server.get('/yaml_repos', async (request, reply) => {

const file = fs.readFileSync('./repos.yaml', 'utf8')
const yamlData = YAML.parse(file)

    if ((yamlData == undefined)){
        reply.code(400).send('Error no repos defined')
        return;
    }

    reply.code(200).send(yamlData.github_repos)
})

server.listen(4080, (err, address) => {
  if (err) {
    console.error(err)
    process.exit(1)
  }
  console.log(`Server listening at ${address}`)
})

