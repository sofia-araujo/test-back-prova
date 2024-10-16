

const criaUsuario = () => {
    const usuario = {
        nome: "sofia",
        email: "sofiiagomes34@gmail.com",
        idade: 18
    }
    return usuario
}

const pegaTemperatura = () => {
    const temperaturaAtual = 25.3
    return temperaturaAtual
}

const adicionaProduto = (array, produto) => {
    array.push(produto)
    const novoArray = array
    return novoArray
}

const usuarioLogado = (usuario) => {
    if(usuario === 'sofia-lucio') {
        return true
    }
    return false
}

const pegaProdutos = () => {
    return ['maça', 'banana', 'pera', 'uva']
}

test("Testa se uma função possui determinada propriedade", () => {
    expect(criaUsuario()).toHaveProperty('email')
})

test("Testa se a temperatura retornada é maior que 20", () => {
    expect(pegaTemperatura()).toBeGreaterThan(20)
})

test("Testa se a temperatura retornada é menor que 30", () => {
    expect(pegaTemperatura()).toBeLessThan(30)
})

test("Testa se o produto foi adicionado no array", () => {
    expect(adicionaProduto(['ervilha', 'brocolis'], 'feijão')).toContain('feijão')
    expect(adicionaProduto(['ervilha', 'brocolis'], 'feijão')).toHaveLength(3)
})

test("Testa se o usuario ta logado", () => {
    expect(usuarioLogado('sofia-lucio')).toBeTruthy()
})

test("Testa se o usuario não esta logado", () => {
    expect(usuarioLogado('sofia-gomes')).toBeFalsy()
})

test("Testa se o array devolve o número certo de produtos", () => {
    expect(pegaProdutos()).toHaveLength(4)
})