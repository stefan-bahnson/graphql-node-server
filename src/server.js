const express = require('express')
const bodyParser = require('body-parser')
const { graphqlExpress, graphiqlExpress } = require('apollo-server-express')
const schema = require('./schema/index')
const connectMongo = require('./mongo-connector')
const app = express()
const PORT = 3000

const start = async () => {
  try {
    const mongo = await connectMongo();

    app.use(
      '/graphql',
      bodyParser.json(),
      graphqlExpress({ context: { mongo }, schema })
    )

    app.use('/graphiql', graphiqlExpress({
      endpointURL: '/graphql',
    }));

    app.get('/', (req, res) => {
      res.redirect('/graphiql')
    })

    app.listen(PORT, () => {
      console.log(`GraphQL server running on port ${PORT}.`)
    })
  }
  catch(err) {
    console.error('Failed to setup server', err);
  }
}

start()
