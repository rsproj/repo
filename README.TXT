### Instrucao

Para montar localmente o repositorio em sftp
...em ./debian

    /usr/local/bin/rsp.dev.debRepository mount;

#### Inst

Fazer alteracoes, depois desmontar.

#### implementar no sources.list

    deb [trusted=yes] https://rsp.ropsoft.cloud debian/
    deb-src [trusted=yes] https://rsp.ropsoft.cloud debian/
