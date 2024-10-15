<script lang="ts">
  import { Card, Button, GradientButton, Progressbar, Tooltip } from "flowbite-svelte";
  import { Questions, AnswerType, getResults, mobile } from "../code/question";
  import {
    ThumbsUpSolid,
    ArrowRightOutline,
    ArrowLeftOutline,
  } from "flowbite-svelte-icons";
  let currentQuestion = 0;
  function submitQuestion(answer: AnswerType) {
    Questions[currentQuestion].answer = answer;
    if (currentQuestion !== Questions.length - 1) {
      currentQuestion++;
    }

    console.log(Questions[Questions.length - 1].answer == AnswerType.Unanswerd);
  }
  function submitQuestionWithoutContinue(answer: AnswerType) {
    Questions[currentQuestion].answer = answer;

    console.log(Questions[Questions.length - 1].answer == AnswerType.Unanswerd);
  }
  let isMobile = mobile();
  let isInConclusion = false;
</script>

{#if !isMobile}
  {#if !isInConclusion}
    <Card class="text-center" size="lg" padding="xl">
      <h5 class="mb-2 text-3xl font-bold text-gray-900 dark:text-white">
        {Questions[currentQuestion].heading}
      </h5>
      <p class="mb-5 text-base text-gray-500 sm:text-lg dark:text-gray-400">
        {Questions[currentQuestion].content}
      </p>
      <div
        class="justify-center items-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4 rtl:space-x-reverse"
      >
        {#if !(currentQuestion == 0)}
        <Button
        pill={true}
        outline={true}
        on:click={() => {
          if (currentQuestion > 0) {
            currentQuestion--;
          }
        }}
        class="!p-2 group"
        size="xl"
      >
        <ArrowLeftOutline class="w-6 h-6 text-primary-700 group-hover:text-primary-50" />
      </Button>
        {/if}

        <Button
          outline={Questions[currentQuestion].answer == AnswerType.Agree ||
            Questions[currentQuestion].answer == AnswerType.Neutral}
          color="red"
          on:click={() => {
            if (Questions[currentQuestion].answer == AnswerType.Unanswerd) {
              submitQuestion(AnswerType.Disagree);
            } else {
              submitQuestionWithoutContinue(AnswerType.Disagree);
            }
          }}>Stimme nicht zu</Button
        >
        <Button
          outline={Questions[currentQuestion].answer == AnswerType.Disagree ||
            Questions[currentQuestion].answer == AnswerType.Agree}
          on:click={() => {
            if (Questions[currentQuestion].answer == AnswerType.Unanswerd) {
              submitQuestion(AnswerType.Neutral);
            } else {
              submitQuestionWithoutContinue(AnswerType.Neutral);
            }
          }}>Mir egal</Button
        >
        <Button
          color="green"
          outline={Questions[currentQuestion].answer == AnswerType.Disagree ||
            Questions[currentQuestion].answer == AnswerType.Neutral}
          on:click={() => {
            if (Questions[currentQuestion].answer == AnswerType.Unanswerd) {
              submitQuestion(AnswerType.Agree);
            } else {
              submitQuestionWithoutContinue(AnswerType.Agree);
            }
          }}>Stimme zu</Button
        >
        {#if Questions[currentQuestion].answer !== AnswerType.Unanswerd && currentQuestion !== Questions.length - 1}
          <Button
            pill={true}
            outline={true}
            on:click={() => {
              currentQuestion++;
            }}
            class="!p-2 group"
            size="xl"
          >
            <ArrowRightOutline class="w-6 h-6 text-primary-700 group-hover:text-primary-50" />
          </Button>
        {/if}
      </div>
    </Card>
  {/if}
{/if}

{#if isMobile}
  {#if !isInConclusion}
    <Card class="text-center" size="lg" padding="xl">
      <h5 class="mb-2 text-3xl font-bold text-gray-900 dark:text-white">
        {Questions[currentQuestion].heading}
      </h5>
      <p class="mb-5 text-base text-gray-500 sm:text-lg dark:text-gray-400">
        {Questions[currentQuestion].content}
      </p>
      <div class="flex flex-col justify-center items-center space-y-4">
        {#if !(currentQuestion == 0)}
          <Button
            pill={true}
            outline={true}
            on:click={() => {
              if (currentQuestion > 0) {
                currentQuestion--;
              }
            }}
            class="!p-2 group"
            size="xl"
          >
            <ArrowLeftOutline class="w-6 h-6 text-primary-700 group-hover:text-primary-50" />
          </Button>
        {/if}
        <Button
          class="!px-8 !py-2 w-70"
          outline={Questions[currentQuestion].answer == AnswerType.Agree ||
            Questions[currentQuestion].answer == AnswerType.Neutral}
          color="red"
          on:click={() => {
            if (Questions[currentQuestion].answer == AnswerType.Unanswerd) {
              submitQuestion(AnswerType.Disagree);
            } else {
              submitQuestionWithoutContinue(AnswerType.Disagree);
            }
          }}>Stimme nicht zu</Button
        >
        <Button
          class="!px-8 !py-2 w-70"
          outline={Questions[currentQuestion].answer == AnswerType.Disagree ||
            Questions[currentQuestion].answer == AnswerType.Agree}
          on:click={() => {
            if (Questions[currentQuestion].answer == AnswerType.Unanswerd) {
              submitQuestion(AnswerType.Neutral);
            } else {
              submitQuestionWithoutContinue(AnswerType.Neutral);
            }
          }}
        >
          Mir egal</Button
        >
        <Button
          class="!px-8 !py-2 w-70"
          color="green"
          outline={Questions[currentQuestion].answer == AnswerType.Disagree ||
            Questions[currentQuestion].answer == AnswerType.Neutral}
          on:click={() => {
            if (Questions[currentQuestion].answer == AnswerType.Unanswerd) {
              submitQuestion(AnswerType.Agree);
            } else {
              submitQuestionWithoutContinue(AnswerType.Agree);
            }
          }}>Stimme zu</Button
        >
        {#if Questions[currentQuestion].answer !== AnswerType.Unanswerd && currentQuestion !== Questions.length - 1}
          <Button
            pill={true}
            outline={true}
            on:click={() => {
              currentQuestion++;
            }}
            class="!p-2 group"
            size="xl"
          >
            <ArrowRightOutline class="w-6 h-6 text-primary-700 group-hover:text-primary-50" />
          </Button>
        {/if}
      </div>
    </Card>
  {/if}
{/if}

{#if !isInConclusion}
  <h2 class="text-center mt-4">
    Frage {currentQuestion + 1} von {Questions.length}
  </h2>
{/if}
{#if Questions[Questions.length - 1].answer !== AnswerType.Unanswerd && !isInConclusion}
  <GradientButton
    outline
    class="mt-8 w-64 content-center mx-auto"
    color="purpleToBlue"
    on:click={() => {
      isInConclusion = true;
    }}
  >
    <h2>Auswertung</h2>
  </GradientButton>
{/if}

{#if isInConclusion}
  <Card class="text-center" size="lg" padding="xl">
    <h5 class="mb-2 text-3xl font-bold text-gray-900 dark:text-white">
      Auswertung
    </h5>
    <p class="mb-5 text-base text-gray-500 sm:text-lg dark:text-gray-400">
      Die Ergebnisse richten sich nach den Antworten der Parteien, Neutrale
      Antworten werden nicht berücksichtigt.
    </p>
    {#each getResults(Questions) as result}
    <div style="display: flex; align-items: center; justify-content: center; margin-bottom: 20px; width: 100%;">
      <div style="display: flex; align-items: center; justify-content: center; width: 100%;">
        <h2 style="margin-right: 15px; flex-shrink: 0; width: 60px; text-align: right; font-weight: bold;">{result.party.name}</h2>
        <div style="flex-grow: 1; max-width: 400px; margin-left: 0px;">
          <Progressbar progress={result.percentage} style="width: 100%;" progressClass={result.party.color} size="h-3"/>
          <Tooltip>{result.party.displayName}</Tooltip>
        </div>
        <h2 style="margin-left: 10px; flex-shrink: 0; width: 60px; text-align: left;">{result.percentage}%</h2>
      </div>
    </div>
  {/each}
    <div>
      <Button
        pill={true}
        outline={true}
        on:click={() => {
          isInConclusion = false;
        }}
        class="!p-2 group"
        size="xl"
      >
        <ArrowLeftOutline class="w-6 h-6 text-primary-700 group-hover:text-primary-50" />
      </Button>
    </div>
  </Card>
{/if}