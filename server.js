const app = require("./src/app")
PORT = process.env.PORT || 8080

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))