

const exibeMensagemVar = () => {
    var msgforqIF = 'Brasil';

    if (true) {
        var msgDentroIF = 'Argentina'
        console.log(msgDentroIF)
    }
    console.log(msgforqIF);
    console.log(msgDentroIF);
}

exibeMensagemVar();

const exibeMensagemLet = () => {
    let msgforqIF = 'Brasil';

    if (true) {
        let msgDentroIF = 'Argentina'
        console.log(msgDentroIF)
    }

    console.log(msgforqIF);
    console.log(msgDentroIF);
}
exibeMensagemLet();