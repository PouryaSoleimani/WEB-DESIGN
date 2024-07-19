// ^ ADD USER TEST PAGE 
import path from 'path'
import fs from 'fs'
//* USERS LIST
const users = [
    { id: 1, name: "POURYA", age: 30 },
    { id: 2, name: "ALI", age: 20 },
    { id: 3, name: "REZA", age: 24 },
]

//^ ADD USER HANDLER
function addUser(request, response) {
    switch (request.method) {
        case "GET": { return response.json({ message: "GET METHOD", users: users }) }
        case "POST": {
            const root = process.cwd()
            const dbPath = path.join(root, 'data', "db.json")
            const dbBuffered = fs.readFileSync(dbPath)
            const dbParsed = JSON.stringify(dbBuffered)
            const db = JSON.stringify(dbBuffered)
        }
        default:
    }

}