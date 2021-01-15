import bcrypt from 'bcryptjs'

const users = [
    {
        name: 'Admin',
        email: 'admin@eshop.com',
        password: bcrypt.hashSync('admin', 10),
        isAdmin: true
    },
    {
        name: 'Janusz Kowalski',
        email: 'janusz.kowalski@megamail.com',
        password: bcrypt.hashSync('grazyna123', 10)
    },
    {
        name: 'Jack Sparrow',
        email: 'j.sparrow@pirates.com',
        password: bcrypt.hashSync('blackpearl123', 10),
    },
]



export default Users