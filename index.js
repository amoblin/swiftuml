#!/usr/bin/env node

const { execSync } = require('child_process');

process.argv
execSync("./plantuml.sh")

var plantumlTemplate = `
@startuml
' STYLE START
hide empty members
skinparam shadowing false
' STYLE END
`+STR2REPLACE+`
@enduml
`
