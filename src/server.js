import express from 'express'
import userRoutes from './routes.jnpm install --save sequelizes'


const app = express()
app.use(express.json())

app.use('/usuarios', userRoutes)

app.listen(1000, () => {
    console.log('Server On-line')
})

