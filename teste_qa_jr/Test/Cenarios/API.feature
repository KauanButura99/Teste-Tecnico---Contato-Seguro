  #language: pt

    Funcionalidade: API
    Como desenvolvedor
    Quero consultar informações de um usuário específico
    Para que eu possa exibir esses dados no sistema

    Contexto: 
    Dado que a API home está disponível

    Cenário: Acesso bem-sucedido à rota Home
    Quando o usuário acessar a rota "/"
    Então a resposta deve ser retornada com código "200"
    E o corpo da resposta deve conter "home"

    Cenário: Consulta bem-sucedida de todos os usuários
    Quando usuário acessar a rota "/api/user"
    Então a resposta deve ser retornada com código "200"
    E o corpo da resposta deve conter uma lista de usuários

    Cenário: Consulta bem-sucedida de usuário existente
    Quando o usuário buscar o usuário com ID "123"
    Então a resposta deve ser retornada com código "200"
    E o corpo da resposta deve conter "User data"

    Cenário: Consulta de erro do cliente ao consultar um usuário com ID inválido
    Quando o usuário buscar o usuário com um ID inválido
    Então a resposta deve ser retornada com código "400"
    E o corpo da resposta deve conter uma mensagem de erro "Bad request"

    Cenário: Consulta Erro interno do servidor
    Quando o usuário buscar o usuário e ocorrer um erro no servidor
    Então a resposta deve ser retornada com código "500"
    E o corpo da resposta deve conter uma mensagem de erro "Internal server error"

    Cenário: Criação bem-sucedida de um novo usuário
    Quando o usuário enviar uma requisição POST para "/api/user/create" com um corpo válido
    Então a resposta deve ser retornada com código "201"
    E o corpo da resposta deve conter os dados do usuário criado

    Cenário: Consulta de erro do cliente ao tentar criar um usuário com ID inválido
    Quando o usuário enviar uma requisição POST para "/api/user/create" com um corpo inválido
    Então a resposta deve ser retornada com código "400"
    E o corpo da resposta deve conter uma mensagem de erro "Bad request"

    Cenário: Consulta Erro interno do servidor
    Quando o usuário enviar uma requisição POST para "/api/user/create" e ocorrer um erro no servidor
    Então a resposta deve ser retornada com código "500"
    E o corpo da resposta deve conter uma mensagem de erro "Internal server error"

    Cenário: Atualização bem-sucedida de um usuário existente
    Quando o usuário enviar uma requisição PATCH para "/api/user/{id}/update" com um corpo válido
    Então a resposta deve ser retornada com código "200"
    E o corpo da resposta deve conter os dados do usuário atualizado

    Cenário: Consulta de erro do cliente ao tentar atualizar um usuário com corpo inválido
    Quando o usuário enviar uma requisição PATCH para "/api/user/{id}/update" com um corpo inválido
    Então a resposta deve ser retornada com código "400"
    E o corpo da resposta deve conter uma mensagem de erro "Bad request"

    Cenário: Consulta Erro interno do servidor
    Quando o usuário enviar uma requisição PATCH para "/api/user/{id}/update" e ocorrer um erro no servidor
    Então a resposta deve ser retornada com código "500"
    E o corpo da resposta deve conter uma mensagem de erro "Internal server error"

    Cenário: Deleção bem-sucedida de um usuário existente
    Quando o usuário enviar uma requisição DELETE para "/api/user/{id}/delete"
    Então a resposta deve ser retornada com código "200"
    E o corpo da resposta deve conter a confirmação da deleção

    Cenário: Consulta de erro do cliente ao tentar deletar um usuário com ID inválido
    Quando o usuário enviar uma requisição DELETE para "/api/user/{id}/delete" com um ID inválido
    Então a resposta deve ser retornada com código "400"
    E o corpo da resposta deve conter uma mensagem de erro "Bad request"

    Cenário: Consulta Erro interno do servidor
    Quando o usuário enviar uma requisição DELETE para "/api/user/{id}/delete" e ocorrer um erro no servidor
    Então a resposta deve ser retornada com código "500"
    E o corpo da resposta deve conter uma mensagem de erro "Internal server error"

    Cenário: Consulta bem-sucedida de todas as empresa
    Quando o usuário acessar a rota "/api/company"
    Então a resposta deve ser retornada com código "200"
    E o corpo da resposta deve conter uma lista de empresas

    Cenário: Consulta bem-sucedida de empresa existent
    Quando o usuário buscar a empresa com ID "123"
    Então a resposta deve ser retornada com código "200"
    E o corpo da resposta deve conter os dados da empresa

    Cenário: Consulta de erro do cliente ao tentar buscar uma empresa com ID inválid
    Quando o usuário buscar a empresa com um ID inválido
    Então a resposta deve ser retornada com código "400"
    E o corpo da resposta deve conter uma mensagem de erro "Bad request"

    Cenário: Consulta Erro interno do servido
    Quando o usuário buscar a empresa e ocorrer um erro no servidor
    Então a resposta deve ser retornada com código "500"
    E o corpo da resposta deve conter uma mensagem de erro "Internal server error"

    Cenário: Criação bem-sucedida de uma nova empres
    Quando o usuário enviar uma requisição POST para "/api/company/create" com um corpo válido
    Então a resposta deve ser retornada com código "201"
    E o corpo da resposta deve conter os dados da empresa criada

    Cenário: Consulta de erro do cliente ao tentar criar uma empresa com corpo inválid
    Quando o usuário enviar uma requisição POST para "/api/company/create" com um corpo inválido
    Então a resposta deve ser retornada com código "400"
    E o corpo da resposta deve conter uma mensagem de erro "Bad request"

    Cenário: Consulta Erro interno do servido
    Quando o usuário enviar uma requisição POST para "/api/company/create" e ocorrer um erro no servidor
    Então a resposta deve ser retornada com código "500"
    E o corpo da resposta deve conter uma mensagem de erro "Internal server error"

    Cenário: Atualização bem-sucedida de uma empresa existent
    Quando o usuário enviar uma requisição PATCH para "/api/company/{id}/update" com um corpo válido
    Então a resposta deve ser retornada com código "200"
    E o corpo da resposta deve conter os dados da empresa atualizada

    Cenário: Consulta de erro do cliente ao tentar atualizar uma empresa com corpo inválid
    Quando o usuário enviar uma requisição PATCH para "/api/company/{id}/update" com um corpo inválido
    Então a resposta deve ser retornada com código "400"
    E o corpo da resposta deve conter uma mensagem de erro "Bad request"

    Cenário: Consulta Erro interno do servido
    Quando o usuário enviar uma requisição PATCH para "/api/company/{id}/update" e ocorrer um erro no servidor
    Então a resposta deve ser retornada com código "500"
    E o corpo da resposta deve conter uma mensagem de erro "Internal server error"

    Cenário: Deleção bem-sucedida de uma empresa existent
    Quando o usuário enviar uma requisição DELETE para "/api/company/{id}/delete"
    Então a resposta deve ser retornada com código "200"
    E o corpo da resposta deve conter a confirmação da deleção

    Cenário: Consulta de erro do cliente ao tentar deletar uma empresa com ID inválid
    Quando o usuário enviar uma requisição DELETE para "/api/company/{id}/delete" com um ID inválido
    Então a resposta deve ser retornada com código "400"
    E o corpo da resposta deve conter uma mensagem de erro "Bad request"

    Cenário: Consulta Erro interno do servido
    Quando o usuário enviar uma requisição DELETE para "/api/company/{id}/delete" e ocorrer um erro no servidor
    Então a resposta deve ser retornada com código "500"
    E o corpo da resposta deve conter uma mensagem de erro "Internal server error"









