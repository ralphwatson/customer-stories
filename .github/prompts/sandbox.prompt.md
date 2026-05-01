
---
description: 'Sandbox prompt file for testing and experimentation'
# name: 'sandbox'
# argument-hint: 'Optional hint text here'
# agent: 'agent'
# model: 'gpt-4'
# tools: []
---

<!-- 
Available frontmatter fields:
- description: Short description of the prompt (shown in UI)
- name: Name used when typing / in chat (default: file name)
- argument-hint: Hint text shown in chat input field
- agent: Agent for running the prompt (ask, agent, plan, or custom agent name)
- model: Language model to use (default: currently selected model)
- tools: List of tool names available for this prompt
-->

# Sandbox Prompt

Add your prompt instructions here in natural language, using Markdown format.

You can reference variables using ${variableName} syntax:
- Workspace: ${workspaceFolder}, ${workspaceFolderBasename}
- Selection: ${selection}, ${selectedText}
- File: ${file}, ${fileBasename}, ${fileDirname}, ${fileBasenameNoExtension}
- Input: ${input:variableName}, ${input:variableName:placeholder}

Reference other workspace files using Markdown links with relative paths.

Reference agent tools using #tool:<tool-name> syntax (e.g., #tool:githubRepo).
