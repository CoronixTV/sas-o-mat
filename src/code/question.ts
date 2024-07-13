
export enum AnswerType {
    Agree,
    Disagree,
    Neutral,
    Unanswerd
}


export type Question = { heading: string, content: string, answer: AnswerType }

export let questionIceCream: Question = { heading: "Eiscreme", content: "Mögen Sie Eiscreme?", answer: AnswerType.Unanswerd }
export let questionPizza: Question = { heading: "Pizza", content: "Mögen Sie Pizza?", answer: AnswerType.Unanswerd }
export let questionBurger: Question = { heading: "Burger", content: "Mögen Sie Burger?", answer: AnswerType.Unanswerd }
export let questionPasta: Question = { heading: "Pasta", content: "Mögen Sie Pasta?", answer: AnswerType.Unanswerd }
export let questionSushi: Question = { heading: "Sushi", content: "Mögen Sie Sushi?", answer: AnswerType.Unanswerd }
export let questionTaco: Question = { heading: "Taco", content: "Mögen Sie Tacos?", answer: AnswerType.Unanswerd }
export let questionSteak: Question = { heading: "Steak", content: "Mögen Sie Steak?", answer: AnswerType.Unanswerd }
export let questionSalad: Question = { heading: "Salat", content: "Mögen Sie Salat?", answer: AnswerType.Unanswerd }
export let questionSandwich: Question = { heading: "Sandwich", content: "Mögen Sie Sandwiches?", answer: AnswerType.Unanswerd }
export let questionSoup: Question = { heading: "Suppe", content: "Mögen Sie Suppe?", answer: AnswerType.Unanswerd }
export let Questions = [questionBurger, questionPizza, questionIceCream, questionPasta, questionSalad, questionSandwich, questionSoup, questionSteak, questionSushi, questionTaco]


type Party = { name: string, Agrees: Question[] }


let MeatParty: Party = { name: "Fleischpartei", Agrees: [questionBurger, questionSteak, questionSushi] }
let VegParty: Party = { name: "Veggi-Partei", Agrees: [questionPasta, questionIceCream, questionSalad] }
let SweetParty: Party = { name: "Süßes-Partei", Agrees: [questionIceCream, questionSandwich] }

function getAgreePercentage(party: Party, questions: Question[]) {
    //remove the questions that the user answered with neutral from both the party and the user
    let userQuestions = questions.filter(q => q.answer !== AnswerType.Neutral)
    let userAgrees = userQuestions.filter(q => q.answer === AnswerType.Agree)
    if (userAgrees.length === 0) {
        return 0
    }
    let userDisagrees = userQuestions.filter(q => q.answer === AnswerType.Disagree)
    let partyQuestions: Question[] = []
    party.Agrees.forEach(q => {
        if (userQuestions.includes(q)) {
            partyQuestions.push(q)
        }
    })
    let common_agrees = 0
    partyQuestions.forEach(q => {
        if (userAgrees.includes(q)) {
            common_agrees++
        }
    })
    let common_disagrees = 0
    userDisagrees.forEach(q => {
        if (!partyQuestions.includes(q)) {
            common_disagrees++
        }
    })
    return Number(((common_agrees + common_disagrees) / userQuestions.length) * 100).toFixed(1);
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





export function mobile() {
    return window.innerWidth < window.innerHeight
}