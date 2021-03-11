module.exports = {
    apps: [
        {
            name: "MARK-SANOFI",
            script: "./bin/www",
            node_args: "--max_old_space_size=4000",
            env: {
                "PORT": 4000,
                "NODE_ENV": "development"
            },
            env_production: {
                "watch": false,
                "PORT": 4000,
                "NODE_ENV": "production"
            },
            ignore_watch : ["upload", "temp"]
        }
    ]
};
