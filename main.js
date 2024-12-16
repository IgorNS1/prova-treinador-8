const startGameButton = document.querySelector('.start-game')
const title = document.querySelector('h1')
const questionContainer = document.querySelector('.question-container')
const questionText = document.querySelector('.question')
const answersContainer = document.querySelector('.answers-container')
const nextQuestionButton = document.querySelector('.next-question')

startGameButton.addEventListener('click', startGame)
nextQuestionButton.addEventListener('click', displayNextQuestion)

let currentQuestionIndex = 0 // contador das questões
let totalCorrect = 0

function startGame() {
    startGameButton.classList.add('hide')
    questionContainer.classList.remove('hide')
    title.classList.add('hide')
    displayNextQuestion()
}

function displayNextQuestion() {
    resetState()

    if (questions_page_8.length === currentQuestionIndex) {
        return finishGame()
    }

    questionText.textContent = questions_page_8[currentQuestionIndex].question
    questions_page_8[currentQuestionIndex].answer.forEach(answer => {
        const newAnswer = document.createElement('button')

        newAnswer.classList.add('button', 'answer')
        newAnswer.textContent = answer.text

        if (answer.correct) {
            newAnswer.dataset.correct = answer.correct
        }

        answersContainer.appendChild(newAnswer)

        newAnswer.addEventListener('click', selectAnswer)
    })
}

function resetState() {
    while (answersContainer.firstChild) {
        answersContainer.removeChild(answersContainer.firstChild)
    }

    document.body.removeAttribute('class')
    nextQuestionButton.classList.add('hide')
}

function selectAnswer(event) {
    const answerClicked = event.target

    if (answerClicked.dataset.correct) {
        document.body.classList.add('correct')
        document.body.classList.remove('incorrect')
        totalCorrect++
    } else {
        document.body.classList.add('incorrect')
        document.body.classList.remove('correct')
    }

    document.querySelectorAll('.answer').forEach(button => {
        if (button.dataset.correct) {
            button.classList.add('correct')
        } else {
            button.classList.add('incorrect')
        }
        button.disabled = true
    })

    nextQuestionButton.classList.remove('hide')
    currentQuestionIndex++
}

function finishGame() {
    const totalQuestion = questions_page_8.length
    const performance = Math.floor(totalCorrect * 100 / totalQuestion)

    let message = ''

    switch (true) {
        case (performance >= 90):
            message = 'Execelente :D'
            break
        case (performance >= 70):
            message = 'Muito Bom :)'
            break
        case (performance >= 50):
            message = 'Bom :|'
            break
        case (performance >= 30):
            message = 'Precisa Melhorar :('
            break
        default:
            message = 'Precisa Melhorar MUITO D:'
    }

    questionContainer.innerHTML =
        `
            <p class="final-message">
                Você acertou ${totalCorrect} de ${totalQuestion} questôes!
                <span>Resultado: ${message}</span>
            </p>
        
            <button onclick="window.location.reload()" class="button">Refazer teste</button>

        `
}

const questions_page_8 = [
    {
        question: 'Pensando no cliente, o que a pessoa do Salão deve fazer?',
        answer: [
            { text: 'Atender os clientes de forma eficiente.', correct: false },
            { text: 'Garantir que os produtos sejam servidos corretamente.', correct: false },
            { text: 'Todas as alternativas estão corretas.', correct: true },
            { text: 'Ajudar na limpeza do ambiente.', correct: false },
        ]
    },
    {
        question: 'Por quanto tempo devemos deixar as McFritas escorrer depois de retirarmos do óleo?',
        answer: [
            { text: 'De 10 a 15 segundos.', correct: false },
            { text: 'De 5 a 10 segundos.', correct: true },
            { text: 'De 15 a 20 segundos.', correct: false },
            { text: 'De 2 a 5 segundos.', correct: false },
        ]
    },
    {
        question: 'Por que a área de preparação necessita de sua própria área dedicada?',
        answer: [
            { text: 'Para otimizar o uso do espaço.', correct: false },
            { text: 'Para evitar a contaminação cruzada e reduzir o risco de objetos estranhos.', correct: true },
            { text: 'Para garantir que os alimentos sejam servidos rapidamente.', correct: false },
            { text: 'Para manter a organização do restaurante.', correct: false },
        ]
    },
    {
        question: 'Por que as pinças e espátulas são utensílios específicos para a manipulação dos alimentos?',
        answer: [
            { text: 'Para evitar a contaminação cruzada entre os produtos.', correct: true },
            { text: 'Porque são mais eficazes no manuseio.', correct: false },
            { text: 'Para garantir a higiene do restaurante.', correct: false },
            { text: 'Porque são os utensílios mais duráveis.', correct: false },
        ]
    },
    {
        question: 'Por que dar atenção especial às Famílias é importante?',
        answer: [
            { text: 'Porque são os clientes que mais compram.', correct: false },
            { text: 'Porque são os mais exigentes em relação ao serviço.', correct: false },
            { text: 'Porque às Famílias são um terço de todos os nossos clientes e são o público mais crítico.', correct: true },
            { text: 'Porque as Famílias têm mais crianças que exigem atenção.', correct: false },
        ]
    },
    {
        question: 'Por que devemos agitar as McFritas após 30 segundos?',
        answer: [
            { text: 'Para garantir que fiquem crocantes.', correct: false },
            { text: 'Isso impede que as McFritas fiquem coladas e quebrem no momento de serem embaladas.', correct: true },
            { text: 'Para garantir que fiquem uniformemente fritas.', correct: false },
            { text: 'Para aumentar a quantidade de batatas fritas.', correct: false },
        ]
    },
    {
        question: 'Por que devemos entregar o cupom fiscal a todos os clientes?',
        answer: [
            { text: 'O cupom fiscal contém o número do pedido que o cliente realizou e é o comprovante de sua compra.', correct: true },
            { text: 'Porque é exigido por lei.', correct: false },
            { text: 'Porque os clientes preferem.', correct: false },
            { text: 'Porque ajuda a organizar o fluxo de pedidos.', correct: false },
        ]
    },
    {
        question: 'Por que devemos seguir os 4 passos no momento de receber um pedido?',
        answer: [
            { text: 'Para garantir que o pedido seja registrado corretamente.', correct: false },
            { text: 'Para agilizar o atendimento.', correct: false },
            { text: 'Para fazer com que os clientes se sintam confortáveis e especiais e promover uma experiência positiva e duradoura.', correct: true },
            { text: 'Para melhorar a qualidade do serviço.', correct: false },
        ]
    },
    {
        question: 'Por que devemos servir somente alimentos preparados corretamente?',
        answer: [
            { text: 'A primeira razão pela qual os clientes vêm ao McDonald\'s é a nossa comida, outro ponto é a Segurança Alimentar e sempre devemos garantir a experiência do cliente.', correct: true },
            { text: 'Para atender às normas de higiene.', correct: false },
            { text: 'Porque os clientes preferem alimentos frescos.', correct: false },
            { text: 'Para garantir a qualidade do produto.', correct: false },
        ]
    },
    {
        question: 'Por que devemos ter atenção e cuidados no manuseio de produtos químicos?',
        answer: [
            { text: 'Porque são muito caros e não devem ser desperdiçados.', correct: false },
            { text: 'Porque podem afetar o sabor dos alimentos.', correct: false },
            { text: 'Os produtos químicos podem causar danos à saúde e aos alimentos se não forem manuseados corretamente.', correct: true },
            { text: 'Porque são perigosos de manusear.', correct: false },
        ]
    },
    {
        question: 'Por que devemos torcer corretamente a solução do esfregão?',
        answer: [
            { text: 'Porque é mais fácil de limpar o chão.', correct: false },
            { text: 'Torcer corretamente a solução em excesso, leva menos tempo para secar o chão.', correct: true },
            { text: 'Porque ajuda a manter o esfregão limpo por mais tempo.', correct: false },
            { text: 'Porque evita o desperdício de solução.', correct: false },
        ]
    },
    {
        question: 'Por que é importante avisar o seu gerente sobre os níveis de dinheiro no caixa quando ficarem muito baixos ou altos?',
        answer: [
            { text: 'Para garantir que o caixa nunca fique vazio.', correct: false },
            { text: 'Para evitar que o gerente se atrase nas suas tarefas.', correct: false },
            { text: 'Porque o gerente precisa se concentrar no fluxo de caixa.', correct: false },
            { text: 'É importante avisar ao gerente sobre os níveis de dinheiro no caixa para que ele realize a retirada dos valores ou reponha os valores para garantir que tenha troco suficiente no POS.', correct: true },
        ]
    },
    {
        question: 'Por que é importante entregar primeiro os sacos e depois as bebidas e sobremesas, seguindo uma ordem específica?',
        answer: [
            { text: 'Para que o cliente possa comer mais rápido.', correct: false },
            { text: 'Para garantir uma apresentação organizada e facilitar o manuseio dos itens pelo cliente.', correct: true },
            { text: 'Porque facilita o pagamento.', correct: false },
            { text: 'Porque os sacos são mais pesados.', correct: false },
        ]
    },
    {
        question: 'Por que é importante manter a área da chapa sempre limpa?',
        answer: [
            { text: 'Uma chapa limpa significa hambúrgueres mais gostosos e dentro do Padrão Ouro de Qualidade, contribui com a segurança alimentar, os nossos clientes ficam mais felizes com o produto recebido e contribui com a manutenção do equipamento.', correct: true },
            { text: 'Para facilitar a limpeza no final do expediente.', correct: false },
            { text: 'Porque a chapa limpa prepara os alimentos mais rapidamente.', correct: false },
            { text: 'Para evitar o desperdício de ingredientes.', correct: false },
        ]
    },
    {
        question: 'Por que é importante ter um cuidado especial nos pedidos para viagem?',
        answer: [
            { text: 'Para evitar que o cliente esqueça algum item.', correct: false },
            { text: 'Porque os pedidos para viagem são mais rápidos de preparar.', correct: false },
            { text: 'Devemos ter todo o cuidado com os produtos embalados para garantir a exatidão dos pedidos e a satisfação do cliente.', correct: true },
            { text: 'Para garantir que o cliente leve a comida quente.', correct: false },
        ]
    },
    {
        question: 'Por que é que devemos falar da importância de uma cozinha limpa?',
        answer: [
            { text: 'Porque é exigido pela vigilância sanitária.', correct: false },
            { text: 'Para ter uma cozinha organizada, receber bem os clientes e atender as suas necessidades e garantir a segurança alimentar e pessoal.', correct: true },
            { text: 'Para aumentar a produtividade dos funcionários.', correct: false },
            { text: 'Para evitar problemas com fornecedores.', correct: false },
        ]
    },
];
