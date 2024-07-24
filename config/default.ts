const dbUser = process.env.DB_USER
const dbPass = process.env.DB_PASS

export default {
    port: 3000,
    dbUri: `mongodb+srv://${dbUser}:${dbPass}@cluster0.mcamf3t.mongodb.net/APIRestfulTS?retryWrites=true&w=majority&appName=Cluster0`,
    env: "development"
}