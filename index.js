const express = require("express");
const app = express();


const PORT = process.env.PORT || 8080

// Connect to server
app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);
})

console.log();