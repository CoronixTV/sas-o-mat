
export enum AnswerType {
    Agree,
    Disagree,
    Neutral,
    Unanswerd
}


type Question = { heading: string, content: string, answer: AnswerType}

let questionIceCream: Question = {heading: "Icecream", content: "Do you like ice cream?", answer: AnswerType.Unanswerd}
let questionPizza: Question = {heading: "Pizza", content: "Do you like pizza?", answer: AnswerType.Unanswerd}
let questionBurger: Question = {heading: "Burger", content: "Do you like burger?", answer: AnswerType.Unanswerd}
let questionPasta: Question = {heading: "Pasta", content: "Do you like pasta?", answer: AnswerType.Unanswerd}
let questionSushi: Question = {heading: "Sushi", content: "Do you like sushi?", answer: AnswerType.Unanswerd}
let questionTaco: Question = {heading: "Taco", content: "Do you like taco?", answer: AnswerType.Unanswerd}
let questionSteak: Question = {heading: "Steak", content: "Do you like steak?", answer: AnswerType.Unanswerd}
let questionSalad: Question = {heading: "Salad", content: "Do you like salad?", answer: AnswerType.Unanswerd}
let questionSandwich: Question = {heading: "Sandwich", content: "Do you like sandwich?", answer: AnswerType.Unanswerd}
let questionSoup: Question = {heading: "Soup", content: "Do you like soup?", answer: AnswerType.Unanswerd}
export let Questions = [questionBurger, questionPizza, questionIceCream, questionPasta, questionSalad, questionSandwich, questionSoup, questionSteak, questionSushi, questionTaco]