# Learning record 0001: Context is a budget

Date: 2026-10-18 · Lesson: `lessons/0001-context-is-a-budget.html`

## Covered
- Context engineering vs prompt engineering (Anthropic framing).
- Context window as a finite attention budget; context rot.
- Five buckets: system prompt, tools, retrieved data, memory, history.
- Tools (few, clear) and just-in-time retrieval, introduced briefly; memory tool as external notes.
- Prompt caching: cached tokens still count toward the window (quiz Q3 only).

## Quiz
5 questions, all single-answer, correct option shuffled at render. Retrieval targets: definition, context rot, caching vs window, JIT retrieval, memory for persistence.

## Not yet verified about the learner
- They have **not answered the quiz**; no score, no error pattern.
- Whether the "intermediate" level (prompts yes, API little) is right: not tested, including token and API-request vocabulary.
- Whether they read the primary source.
- Whether the mission wording is confirmed.
- Reaction to lesson length, tone and style.
- Whether they have the means to try API calls (key, budget) for hands-on lessons.

## Not yet taught
Compaction, sub-agents, tool design in depth, prompt caching mechanics, system prompt altitude exercises, evaluation of context changes, building a portfolio project.

## Suggested next lesson
0002: tool results and history growth: why a long agent loop degrades, and how to clear or compact. Start with 2-3 spaced retrieval questions from lesson 1 (the ones missed). Then hands-on if the learner has an API key.
