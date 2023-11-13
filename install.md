npm install 

npm run bundle 

npm test 

# Upgrade to latest version of NodeJS using NVM 
sudo apt update

curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh | bash

source ~/.bashrc

nvm --version

nvm ls

nvm ls-remote

nvm install 16.0.0

nvm use 16.0.0

nvm alias default 16.0.0


## OUTPUT 

$ npm run bundle

> auto-release-draft@0.0.0 bundle
> npm run format:write && npm run package


> auto-release-draft@0.0.0 format:write
> prettier --write **/*.ts

__tests__/index.test.ts 221ms
__tests__/main.test.ts 50ms
__tests__/wait.test.ts 18ms
src/index.ts 3ms
src/main.ts 20ms
src/wait.ts 8ms

> auto-release-draft@0.0.0 package
> ncc build src/index.ts --license licenses.txt

ncc: Version 0.38.1
ncc: Compiling file index.js into CJS
ncc: Using typescript@5.2.2 (local user-provided)
  4kB  dist/licenses.txt
 97kB  dist/index.js
101kB  [5176ms] - ncc 0.38.1



$ npm test

> auto-release-draft@0.0.0 test
> jest

 PASS  __tests__/wait.test.ts (8.286 s)
  wait.ts
    ✓ throws an invalid number (14 ms)
    ✓ waits with a valid number (501 ms)

 PASS  __tests__/main.test.ts (8.49 s)
  action
    ✓ sets the time output (521 ms)
    ✓ sets a failed status (1 ms)

 PASS  __tests__/index.test.ts
  index
    ✓ calls run when imported (17 ms)

----------|---------|----------|---------|---------|-------------------
File      | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s 
----------|---------|----------|---------|---------|-------------------
All files |     100 |      100 |     100 |     100 |                   
 index.ts |     100 |      100 |     100 |     100 |                   
 main.ts  |     100 |      100 |     100 |     100 |                   
 wait.ts  |     100 |      100 |     100 |     100 |                   
----------|---------|----------|---------|---------|-------------------
Test Suites: 3 passed, 3 total
Tests:       5 passed, 5 total
Snapshots:   0 total
Time:        9.222 s
Ran all test suites.