# Resources

Status key: **Fetched** = page was opened and read in this workspace's setup session (2026-10-18). **Not fetched** = listed from web-search results only; the sandbox could not open the site, so no lesson may rely on its content until a later session fetches it.

## Primary (fetched)

### 1. Effective context engineering for AI agents
- URL: https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents
- Type: Engineering blog post (Anthropic Applied AI team; published 2025-09-29)
- Why trusted: Written by the model vendor's applied team that builds agents on Claude.
- Useful for: The core definition, the "finite attention budget" mental model, context rot, system prompt "right altitude", tool design, just-in-time retrieval, compaction, note-taking, sub-agents. Anchor text for the whole course.
- Status: Fetched.

### 2. Context windows (Claude API docs)
- URL: https://platform.claude.com/docs/en/build-with-claude/context-windows
- Type: Official documentation
- Why trusted: Vendor documentation, kept current with the API.
- Useful for: What counts toward the window (system prompt, messages, tool results, tool definitions, output), context rot, compaction and context editing entry points.
- Status: Fetched.

### 3. Memory tool (Claude API docs)
- URL: https://platform.claude.com/docs/en/agents-and-tools/tool-use/memory-tool
- Type: Official documentation
- Why trusted: Vendor documentation with runnable examples in several SDKs.
- Useful for: Implementing persistent memory outside the window, just-in-time retrieval from memory files, pairing with compaction, the multisession pattern.
- Status: Fetched.

### 4. Tool use with Claude (overview)
- URL: https://platform.claude.com/docs/en/agents-and-tools/tool-use/overview
- Type: Official documentation
- Why trusted: Vendor documentation.
- Useful for: The tool-use round trip, client vs server tools, how tool definitions and results add tokens. Entry point for the tools lessons.
- Status: Fetched.

### 5. Prompt caching (Claude API docs)
- URL: https://platform.claude.com/docs/en/build-with-claude/prompt-caching
- Type: Official documentation
- Why trusted: Vendor documentation.
- Useful for: Reusing prompt prefixes (tools, system, messages in that order) to cut cost and latency. Only the page summary was read; read in full before teaching it.
- Status: Fetched (first 100,000 of 160,435 characters).

### 6. Prompting best practices (Claude API docs)
- URL: https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/claude-prompting-best-practices
- Type: Official documentation
- Why trusted: Vendor reference for prompting current Claude models.
- Useful for: The prompt-engineering side: clarity, examples, XML structure, thinking, agentic systems.
- Status: Fetched (title, description and intro only; read the body before teaching from it).

### 7. Effective harnesses for long-running agents
- URL: https://www.anthropic.com/engineering/effective-harnesses-for-long-running-agents
- Type: Engineering blog post (Justin Young, Anthropic; published 2025-11-26)
- Why trusted: Vendor engineering write-up of a real harness using the Claude Agent SDK.
- Useful for: Multi-session agents: initializer agent, progress log, feature list, git history as recovery. Good portfolio-project material.
- Status: Fetched (summary only).

## Community and practitioner (not fetched yet)

### 8. Simon Willison, "Context engineering" (2025-06-27)
- URL: https://simonwillison.net/2025/Jun/27/context-engineering/
- Type: Blog post
- Why trusted: Long-standing independent LLM practitioner who documents sources carefully; the post collects the Lütke and Karpathy remarks that popularised the term.
- Useful for: Where the term came from and why it may stick; the history of the name.
- Status: **Not fetched** (search snippet only).

### 9. Andrej Karpathy, "+1 for context engineering" (X/Twitter, about 2025-06-25)
- URL: not yet located; Willison's post (above) quotes and links it.
- Type: Social post
- Why trusted: Primary source for his definition of the term.
- Useful for: The "filling the context window with just the right information for the next step" framing.
- Status: **Not fetched**; date and wording come from a search snippet and are unverified.

### 10. Manus, "Context Engineering for AI Agents: Lessons from Building Manus" (Yichao "Peak" Ji, 2025-07-18)
- URL: https://manus.im/blog/Context-Engineering-for-AI-Agents-Lessons-from-Building-Manus
- Type: Company engineering blog (production agent)
- Why trusted: First-hand production lessons from a shipping agent product.
- Useful for: Practical agent-building lessons (to be confirmed after fetching: caching, tool management, file-system memory, error handling).
- Status: **Not fetched**; only the intro was visible in search results.

### 11. LangChain, "Context Engineering for Agents" (LangChain Team, 2025-07-02)
- URL: https://www.langchain.com/blog/context-engineering-for-agents
- Type: Framework vendor blog
- Why trusted: Widely cited taxonomy from a major agent-framework maker; companion repo at https://github.com/langchain-ai/context_engineering.
- Useful for: A second vocabulary to compare with Anthropic's: write, select, compress, isolate (per search snippet, unverified).
- Status: **Not fetched**.

## To find later
- Anthropic docs: tool definitions best practice ("Define tools"), context editing, compaction pages.
- A runnable agent tutorial (for portfolio projects): Anthropic "Build a tool-using agent" page.
