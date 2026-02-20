import fastify from "fastify";
import cors from '@fastify/cors'



const server = fastify({logger: true});

server.register(cors,{
    origin: ["*"]
})

const teams = [
{ id: 1, name: "McLaren", base: "Woking, United Kingdom'" },
{ id: 2, name: "Merdeces", base: "'Brackley, United Kingdom" },
{ id: 3, name: "Red Bull Racing", base: "Milton Keynes, United Kingdom" },
{ id: 4, name: "Williams", base: "Grove, United Kingdom" },
]

server.get("/teams", async(request, response)=>{
    response.type("application/json").code(200)
    return {teams}
})

const drivers = [
        { id: 1, name: "Max Verstappen", team: "Red Bull Racing" },
        { id: 2, name: "Lewis Hamilton", team: "Mercedes" },
        { id: 3, name: "Charles Leclerc", team: "Ferrari" },
        { id: 4, name: "Lando Norris", team: "McLaren" },   
    ]

server.get("/drivers", async(request, response)=>{
    response.type("application/json").code(200)
    return {drivers}
})

interface DriveParams{
    id: string
}

server.get<{Params: DriveParams}>("/drivers/:id", async(request, response)=>{
    const id = parseInt(request.params.id)
    const driver = drivers.find(driver => driver.id === id)

    if (!driver) {
        response.type("application/json").code(404)
        return ({error: "Driver not found"})
    }else{
        response.type("application/json").code(200)
        return {driver}
    }
})

const port:number = Number(process.env.PORT)
server.listen({port:port}, ()=>{
    console.log(`Servidor iniciado na porta ${port}`)
})