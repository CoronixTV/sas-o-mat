<script lang="ts">
  import { Card, Button } from 'flowbite-svelte';
  import {Questions, AnswerType} from "../code/question" 
  let currentQuestion = 0;
  function submitQuestion(answer: AnswerType) {
    Questions[currentQuestion].answer = answer;
    currentQuestion++;
  }
</script>

<Card class="text-center" size="lg" padding="xl">
  <h5 class="mb-2 text-3xl font-bold text-gray-900 dark:text-white">
    {Questions[currentQuestion].heading}
  </h5>
  <p class="mb-5 text-base text-gray-500 sm:text-lg dark:text-gray-400">    
    {Questions[currentQuestion].content}
  </p>
  <div class="justify-center items-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4 rtl:space-x-reverse">
    <Button color="red" on:click={
      () => submitQuestion(AnswerType.Disagree)
    }>Stimme nicht zu</Button>
    <Button on:click={
      () => submitQuestion(AnswerType.Neutral)
    }>Neutral</Button>
    <Button color="green" on:click = {
      () => submitQuestion(AnswerType.Agree)
    }>Stimme zu</Button>
  </div>
</Card>
