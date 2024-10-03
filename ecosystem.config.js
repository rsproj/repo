module.exports = {
    apps: [
        {
            name: "rsp-server",
            script: "http-server",
            args: "./repos", // Argumento para especificar o diretório
            port: 8222,
            instances: 1, // Número de instâncias do aplicativo
            exec_mode: "fork", // Modo de execução, "fork" ou "cluster"
            autorestart: true, // Reiniciar automaticamente se o aplicativo falhar
            watch: false, // Não habilitar watch para evitar reinicializações em arquivos alterados
            env: {
                NODE_ENV: "production" // Definir ambiente
            }
        }
 ]
};
