var config = {
    "local": {
        jwtKey: "aDhv92EAgI31SsT2AOxI3kAeZZEZcoXd231",
        expiresIn: '60d',
        saltRounds: 10,
        port: 5256,
        host: "localhost",
        dbName: "aws_billing",
        dbUserName: "postgres",
        dialect: "postgres",
        dbPassword: "test",
        dbPort: "5432",
        pool: {
            max: 5,
            min: 0,
            acquire: 30000,
            idle: 10000
        },
    },
    "dev": {
        jwtKey: "KOQAGCZCuT5JeRAMzkIBdk75sELLlWcH254",
        expiresIn: '60d',
        port: 3001,
        host: "localhost",
        dbName: "awsbilling_new",
        dbUserName: "postgres",
        dialect: "postgres",
        dbPassword: "123456",
        dbPort: "5432",
        pool: {
            max: 5,
            min: 0,
            acquire: 30000,
            idle: 10000
        },
    },
    "uat": {
        jwtKey: "JpAZWvUA3DJW4zcDgZTU5UwQvFXLOTbi457",
        expiresIn: '60d',
        port: 3000,
        host: "localhost",
        dbName: "uatawsbilling",
        dbUserName: "postgres",
        dialect: "postgres",
        dbPassword: "45^!q7YI!uG5",
        dbPort: "5432",
        pool: {
            max: 5,
            min: 0,
            acquire: 30000,
            idle: 10000
        },
    },
    "prod": {
        jwtKey: "de873toel9sDfVcWQZhuRH42CJNK1TCEm2",
        expiresIn: '60d',
        port: 3002,
        host: "localhost",
        dbName: "awsbillingprod",
        dbUserName: "postgres",
        dialect: "postgres",
        dbPassword: "123456",
        dbPort: "5432",
        pool: {
            max: 5,
            min: 0,
            acquire: 30000,
            idle: 10000
        },
    }
}
module.exports = config;