---
id: cli-commands.md
title: Commands
sidebar_label: Commands
slug: /cli-commands
---

Here is a list of available commands for munster cli:

| Command | Syntax | Description |
| --- | --- | --- |
| new | `vm new <project_name>` | Generate a new munster application. |
| serve | `vm serve` | Serve the application locally for development. |
| generate| `vm generate <type> <name>` | Generate a munster file based on the given type and name. See [generate types](/docs/cli-commands#generate-types) section for more info. |

## Generate types

Here's a list of available types for the generate command:

| Type | Description |
| --- | --- |
| component | Generate a component file. |
| middleware | Generate a middleware file. |

Here's an example on how to use the generate command:

```bash
vm generate component Sidebar
```

This will generate a component file in `src/Sidebar.js`.