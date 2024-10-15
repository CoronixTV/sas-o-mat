
export enum AnswerType {
    Agree,
    Disagree,
    Neutral,
    Unanswerd
}


export type Question = { heading: string, content: string, answer: AnswerType }

export let questionSubventionen: Question = { heading: "Subventionen", content: "Firmen, die in finanzielle Not geraten, sollen durch Leistungen des Staates (Subventionen) unterstützt werden.", answer: AnswerType.Unanswerd }
export let questionSteuern: Question = { heading: "Steuern", content: "Firmen, die sehr hohe Gewinne erzielen, sollen zum Gemeinwohl beitragen und höhere Steuersätze zahlen.", answer: AnswerType.Unanswerd }
export let questionGrundeinkommen: Question = { heading: "Grundeinkommen", content: "Es sollte ein bedingungsloses Grundeinkommen geben.", answer: AnswerType.Unanswerd }
export let questionBesuchertag: Question = { heading: "Besuchertag", content: "Es sollte einen zusätzlichen Besuchertag geben, um mehr Geld in den Wirtschaftskreislauf zu bringen.", answer: AnswerType.Unanswerd }
export let questionVegTag: Question = { heading: "Vegetarischer Tag", content: "Maßnahmen gegen den Klimawandel sollten Priorität haben. Daher sind wir für die Einführung eines vegetarischen Tages.", answer: AnswerType.Unanswerd }
export let questionMüllvermeidung: Question = { heading: "Müllvermeidung", content: "Umweltschutz ist ein wichtiges Ziel unserer Regierung. Gesetze zur Müllvermeidung sollten erlassen und streng kontrolliert werden.", answer: AnswerType.Unanswerd }
export let questionStandards: Question = { heading: "Ökologische Standards", content: "Waren, welche in Dörmany eingeführt werden, sollten gewisse ökologische Standards erfüllen müssen.", answer: AnswerType.Unanswerd }
export let questionVeranstaltungen: Question = { heading: "Veranstaltungen", content: "Kulturelle Veranstaltungen sind Privatsache, daher ist es nicht die Aufgabe des Staates die Kultur zu finanzieren.", answer: AnswerType.Unanswerd }
export let questionBeleidigung: Question = { heading: "Beleidigung", content: "Beleidigende Inhalte bei kulturellen Aufführungen und in Pressemitteilungen müssen verfolgt und hart bestraft werden.", answer: AnswerType.Unanswerd }
export let questionGesetze: Question = { heading: "Gesetze", content: "Das Parlament sollte so wenig Gesetze wie möglich erlassen.", answer: AnswerType.Unanswerd }
export let questionWirtschaftParlament = { heading: "Wirtschaft und Parlament", content: "Die Hauptaufgabe des Parlamentes ist es, die Wirtschaft zu stärken. Alle anderen Anliegen werden diesem Ziel untergeordnet.", answer: AnswerType.Unanswerd }
export let questionParlamentBefugnisse = { heading: "Befugnisse des Parlamentes", content: "Das Parlament darf alles beschließen.", answer: AnswerType.Unanswerd }
export let Questions = [questionSubventionen, questionSteuern, questionGrundeinkommen, questionBesuchertag, questionVegTag, questionMüllvermeidung, questionStandards, questionVeranstaltungen, questionBeleidigung, questionGesetze, questionWirtschaftParlament, questionParlamentBefugnisse]

type Party = { name: string, displayName: string, Agrees: Question[], color?: string }


let Monetarier: Party = { name: "DMO", displayName: "Die Monetarier",  Agrees: [questionSubventionen, questionBesuchertag, questionMüllvermeidung, questionVeranstaltungen, questionBeleidigung, questionWirtschaftParlament], color: "bg-yellow-500 dark:bg-yellow-500" }
let CBP: Party = { name: "CBP", displayName: "Clevere Bürger Partei", Agrees: [questionSteuern, questionGrundeinkommen, questionBesuchertag, questionVeranstaltungen, questionBeleidigung, questionGesetze], color: "bg-teal-500 dark:bg-teal-500" }
let DP: Party = { name: "DP", displayName: "die protagonisten.", Agrees: [questionSubventionen, questionSteuern,questionBesuchertag, questionMüllvermeidung, questionStandards, questionBeleidigung], color: "bg-blue-500 dark:bg-blue-500" }
let STÖ: Party = { name: "STÖ", displayName: "Störtebeker", Agrees: [questionSubventionen, questionBesuchertag, questionMüllvermeidung, questionVeranstaltungen, questionBeleidigung, questionGesetze], color: "bg-black dark:bg-white" }
function getAgreePercentage(party: Party, questions: Question[]) {
    //remove the questions that the user answered with neutral from both the party and the user
    let userQuestions = questions.filter(q => q.answer !== AnswerType.Neutral)
    let userAgrees = userQuestions.filter(q => q.answer === AnswerType.Agree)
    if (userQuestions.length === 0) {
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
        userQuestions.length  })
    console.log("lol")
    console.log(party.name, common_agrees, common_disagrees)
    return Number(((common_agrees + common_disagrees) / userQuestions.length) * 100).toFixed(1);
}


export type Result = { party: Party, percentage: number }

export function getResults(questions: Question[]): Result[] {
    let results: Result[] = []
    const parties = [CBP, Monetarier, DP, STÖ];
    parties.forEach(party => {
        const percentage = Number(getAgreePercentage(party, questions));
        results.push({ party, percentage });
    });
     
    results.sort((a, b) => b.percentage - a.percentage);
    return results
}





export function mobile() {
    return window.innerWidth < window.innerHeight
}