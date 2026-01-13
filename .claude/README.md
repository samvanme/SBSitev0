# Claude Skills & Commands Setup

This directory contains custom skills and commands for Claude Code, extending its capabilities with specialized workflows and domain knowledge.

## Directory Structure

```
.claude/
├── commands/                    # Invocable skills and commands
│   ├── design/                  # Design-focused skills
│   ├── qa/                      # QA, debugging, and mobile optimization skills
│   ├── gsd/                     # Get Shit Done workflow commands
│   └── context-engineering/     # Context engineering skills
├── get-shit-done/               # GSD framework support files
│   ├── references/              # Methodology documentation
│   ├── templates/               # Project and planning templates
│   └── workflows/               # Workflow definitions
└── README.md                    # This file
```

## Usage

Invoke skills using slash commands:

```
/design:frontend-design          # Design skills
/qa:frontend-qa                  # QA, debugging, and mobile optimization
/gsd:progress                    # GSD workflow commands
/context-engineering:multi-agent-patterns  # Context engineering skills
```

---

## Design Skills

Creative and production-focused design capabilities.

| Command | Description |
|---------|-------------|
| `/design:frontend-design` | Create distinctive, production-grade frontend interfaces with high design quality. Generates creative, polished code that avoids generic AI aesthetics. |

---

## QA Skills

Frontend debugging, mobile optimization, and quality assurance capabilities.

| Command | Description |
|---------|-------------|
| `/qa:frontend-qa` | Debug frontend issues, optimize for mobile devices, and perform comprehensive QA. Use for troubleshooting UI bugs, responsive design issues, accessibility checks, cross-browser testing, and performance optimization. |

---

## GSD (Get Shit Done) Workflow

A structured methodology for planning and executing software projects with Claude. The GSD framework provides systematic project management through phases, milestones, and detailed planning.

### Project Initialization

| Command | Description |
|---------|-------------|
| `/gsd:new-project` | Initialize a new project with deep context gathering and PROJECT.md |
| `/gsd:new-milestone` | Create a new milestone with phases for an existing project |
| `/gsd:create-roadmap` | Create roadmap with phases for the project |

### Planning & Research

| Command | Description |
|---------|-------------|
| `/gsd:discuss-milestone` | Gather context for next milestone through adaptive questioning |
| `/gsd:discuss-phase` | Gather phase context through adaptive questioning before planning |
| `/gsd:list-phase-assumptions` | Surface Claude's assumptions about a phase approach before planning |
| `/gsd:research-phase` | Research how to implement a phase before planning |
| `/gsd:plan-phase` | Create detailed execution plan for a phase (PLAN.md) |
| `/gsd:map-codebase` | Analyze codebase with parallel Explore agents to produce documentation |

### Execution & Progress

| Command | Description |
|---------|-------------|
| `/gsd:progress` | Check project progress, show context, and route to next action |
| `/gsd:execute-plan` | Execute a PLAN.md file |
| `/gsd:resume-work` | Resume work from previous session with full context restoration |
| `/gsd:resume-task` | Resume an interrupted subagent execution |
| `/gsd:pause-work` | Create context handoff when pausing work mid-phase |

### Verification & Issues

| Command | Description |
|---------|-------------|
| `/gsd:verify-work` | Guide manual user acceptance testing of recently built features |
| `/gsd:plan-fix` | Plan fixes for UAT issues from verify-work |
| `/gsd:consider-issues` | Review deferred issues, close resolved ones, identify urgent ones |

### Roadmap Management

| Command | Description |
|---------|-------------|
| `/gsd:add-phase` | Add phase to end of current milestone in roadmap |
| `/gsd:insert-phase` | Insert urgent work as decimal phase between existing phases |
| `/gsd:remove-phase` | Remove a future phase from roadmap and renumber subsequent phases |
| `/gsd:complete-milestone` | Archive completed milestone and prepare for next version |

### Help

| Command | Description |
|---------|-------------|
| `/gsd:help` | Show available GSD commands and usage guide |

---

## Context Engineering Skills

A comprehensive collection of skills for building production-grade AI agent systems through effective context engineering. These skills teach the art and science of curating context to maximize agent effectiveness.

### Foundational Skills

Understanding context fundamentals and failure patterns.

| Skill | Triggers On |
|-------|-------------|
| `/context-engineering:context-fundamentals` | "understand context", "explain context windows", "design agent architecture", context components, attention mechanics |
| `/context-engineering:context-degradation` | "diagnose context problems", "fix lost-in-middle", "debug agent failures", context poisoning, attention patterns |
| `/context-engineering:context-compression` | "compress context", "summarize conversation", "reduce token usage", tokens-per-task optimization |
| `/context-engineering:context-optimization` | "optimize context", "reduce token costs", "implement KV-cache", observation masking, context budgeting |

### Architectural Skills

Patterns and structures for building effective agent systems.

| Skill | Triggers On |
|-------|-------------|
| `/context-engineering:multi-agent-patterns` | "design multi-agent system", "implement supervisor pattern", context isolation, agent handoffs |
| `/context-engineering:memory-systems` | "implement agent memory", "build knowledge graph", "track entities", short-term/long-term memory |
| `/context-engineering:tool-design` | "design agent tools", "reduce tool complexity", "implement MCP tools", tool consolidation |
| `/context-engineering:filesystem-context` | "offload context to files", "dynamic context discovery", "agent scratch pad", file-based context |

### Operational Skills

Ongoing operation and optimization of agent systems.

| Skill | Triggers On |
|-------|-------------|
| `/context-engineering:evaluation` | "evaluate agent performance", "build test framework", "measure quality", evaluation rubrics |
| `/context-engineering:advanced-evaluation` | "implement LLM-as-judge", "compare model outputs", "mitigate bias", pairwise comparison |

### Development Methodology

Meta-level practices for building LLM-powered projects.

| Skill | Triggers On |
|-------|-------------|
| `/context-engineering:project-development` | "start LLM project", "design batch pipeline", "evaluate task-model fit", pipeline architecture |

### Cognitive Architecture

Formal cognitive modeling for rational agent systems.

| Skill | Triggers On |
|-------|-------------|
| `/context-engineering:bdi-mental-states` | "model agent mental states", "implement BDI architecture", "transform RDF to beliefs", cognitive agent |

---

## Adding New Skills

Skills are markdown files with YAML frontmatter placed in `.claude/commands/<category>/`.

### Skill Format

```markdown
---
name: category:skill-name
description: Brief description of what this skill does and when to use it.
---

# Skill Title

Detailed instructions, guidelines, and examples for the skill.
```

### Best Practices

1. Keep SKILL.md under 500 lines for optimal performance
2. Use clear, actionable descriptions
3. Include specific trigger phrases in descriptions
4. Organize related skills into category directories
5. Reference other skills when they complement each other

---

## Sources

- **GSD Framework**: Custom project management methodology
- **Context Engineering Skills**: Adapted from [Agent-Skills-for-Context-Engineering](https://github.com/muratcankoylan/Agent-Skills-for-Context-Engineering)
- **Design Skills**: Custom frontend design methodology
