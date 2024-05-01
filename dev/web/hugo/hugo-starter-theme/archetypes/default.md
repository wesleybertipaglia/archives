---
title: "{{ replace .Name "-" " " | title }}"
date: {{ .Date }}
type: "{{ .Section }}"
author: "{{ .Site.Author.name }}"
tags: ["{{ .Section }}"]
draft: true
---
