
export enum AnswerType {
    Agree,
    Disagree,
    Neutral,
    Unanswerd
}


export type Question = { heading: string, content: string, answer: AnswerType }

export let questionIceCream: Question = { heading: "Icecream", content: "Do you like ice cream?", answer: AnswerType.Unanswerd }
export let questionPizza: Question = { heading: "Pizza", content: "Do you like pizza?", answer: AnswerType.Unanswerd }
export let questionBurger: Question = { heading: "Burger", content: "Do you like burger?", answer: AnswerType.Unanswerd }
export let questionPasta: Question = { heading: "Pasta", content: "Do you like pasta?", answer: AnswerType.Unanswerd }
export let questionSushi: Question = { heading: "Sushi", content: "Do you like sushi?", answer: AnswerType.Unanswerd }
export let questionTaco: Question = { heading: "Taco", content: "Do you like taco?", answer: AnswerType.Unanswerd }
export let questionSteak: Question = { heading: "Steak", content: "Do you like steak?", answer: AnswerType.Unanswerd }
export let questionSalad: Question = { heading: "Salad", content: "Do you like salad?", answer: AnswerType.Unanswerd }
export let questionSandwich: Question = { heading: "Sandwich", content: "Do you like sandwich?", answer: AnswerType.Unanswerd }
export let questionSoup: Question = { heading: "Soup", content: "Do you like soup?", answer: AnswerType.Unanswerd }
export let Questions = [questionBurger, questionPizza, questionIceCream, questionPasta, questionSalad, questionSandwich, questionSoup, questionSteak, questionSushi, questionTaco]


type Party = { name: string, Agrees: Question[] }


let MeatParty: Party = { name: "Fleischpartei", Agrees: [questionBurger, questionSteak, questionSushi] }
let VegParty: Party = { name: "Veggi-Partei", Agrees: [questionPasta, questionIceCream, questionSalad] }
let SweetParty: Party = { name: "Süßes-Partei", Agrees: [questionIceCream, questionSandwich] }

function getAgreePercentage(party: Party, questions: Question[]) {
    //remove every question from the party array that is labled as neutral in the questions array
    let neutral_questions = [];
    questions.forEach(question => {
        if (question.answer === AnswerType.Neutral) {
            neutral_questions.push(question)
        }
    }
    )
    neutral_questions.forEach(neutral_question => {
        party.Agrees = party.Agrees.filter(question => question !== neutral_question)
    }
    )
    let agreed_questions = [];
    questions.forEach(question => {
        if (question.answer === AnswerType.Agree) {
            agreed_questions.push(question)
        }
    }
    )
    let agreeCount = 0
    for (let i = 0; i < agreed_questions.length; i++) {
        if (party.Agrees.includes(agreed_questions[i])) {
            agreeCount++
        }
    }
    if (party.Agrees.length === 0) {
        return 0
    }
    let questions_without_neutral = questions.filter(question => question.answer !== AnswerType.Neutral)
    let result: number = (agreeCount / questions_without_neutral.length) * 100
    return Number(result.toFixed(1))
}


export type Result = { party: Party, percentage: number }

export function getResults(questions: Question[]): Result[] {
    let results: Result[] = []
    results.push({ party: MeatParty, percentage: getAgreePercentage(MeatParty, questions) })
    console.log(getAgreePercentage(MeatParty, questions))
    results.push({ party: VegParty, percentage: getAgreePercentage(VegParty, questions) })
    console.log(getAgreePercentage(VegParty, questions))

    results.push({ party: SweetParty, percentage: getAgreePercentage(SweetParty, questions) })
    console.log(getAgreePercentage(SweetParty, questions))
    results.sort((a, b) => b.percentage - a.percentage);
    return results
}