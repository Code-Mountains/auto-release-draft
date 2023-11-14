```
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


npm run bundle

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


npm run test

> auto-release-draft@0.0.0 test
> jest

 PASS  __tests__/wait.test.ts
  wait.ts
    ✓ throws an invalid number (13 ms)
    ✓ waits with a valid number (501 ms)

 PASS  __tests__/main.test.ts
  When running the action
    ✓ it should set the release-url output parameter (6 ms)


::set-output name=release-url::https://fruitfall.thecodemountains.com
 PASS  __tests__/index.test.ts
  index
    ✓ calls run when imported (235 ms)

----------|---------|----------|---------|---------|-------------------
File      | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s 
----------|---------|----------|---------|---------|-------------------
All files |   86.66 |       50 |     100 |    92.3 |                   
 index.ts |     100 |      100 |     100 |     100 |                   
 main.ts  |   71.42 |        0 |     100 |   83.33 | 13                
 wait.ts  |     100 |      100 |     100 |     100 |                   
----------|---------|----------|---------|---------|-------------------
Test Suites: 3 passed, 3 total
Tests:       4 passed, 4 total
Snapshots:   0 total
Time:        5.441 s, estimated 9 s
Ran all test suites.


npm run all

> auto-release-draft@0.0.0 all
> npm run format:write && npm run lint && npm run test && npm run coverage && npm run package


> auto-release-draft@0.0.0 format:write
> prettier --write **/*.ts

__tests__/index.test.ts 231ms
__tests__/main.test.ts 12ms
__tests__/wait.test.ts 15ms
src/event.ts 13ms
src/git.ts 26ms
src/github.ts 13ms
src/index.ts 3ms
src/main.ts 16ms
src/markdown.ts 6ms
src/version.ts 6ms
src/wait.ts 5ms

> auto-release-draft@0.0.0 lint
> npx eslint . -c ./.github/linters/.eslintrc.yml


> auto-release-draft@0.0.0 test
> jest

 PASS  __tests__/wait.test.ts
  wait.ts
    ✓ throws an invalid number (11 ms)
    ✓ waits with a valid number (503 ms)

 PASS  __tests__/main.test.ts (5.951 s)
  When running the action
    ✓ it should set the release-url output parameter (6 ms)

The event name was undefined, which is not handled by this action.

::set-output name=release-url::
 PASS  __tests__/index.test.ts
  index
    ✓ calls run when imported (202 ms)

-------------|---------|----------|---------|---------|-----------------------
File         | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s     
-------------|---------|----------|---------|---------|-----------------------
All files    |   54.11 |    26.08 |   27.77 |   54.21 |                       
 event.ts    |   81.81 |       50 |     100 |   81.81 | 10,13                 
 git.ts      |   23.07 |        0 |       0 |   23.07 | 5-7,16-35,39-54,60-88 
 github.ts   |   45.45 |        0 |       0 |   45.45 | 11-32                 
 index.ts    |     100 |      100 |     100 |     100 |                       
 main.ts     |   72.22 |       25 |     100 |   76.47 | 20-24,30              
 markdown.ts |   33.33 |      100 |       0 |   33.33 | 10-12                 
 version.ts  |      50 |        0 |       0 |      50 | 4,8,12-13             
 wait.ts     |     100 |       50 |     100 |     100 | 6                     
-------------|---------|----------|---------|---------|-----------------------
Test Suites: 3 passed, 3 total
Tests:       4 passed, 4 total
Snapshots:   0 total
Time:        6.835 s
Ran all test suites.

> auto-release-draft@0.0.0 coverage
> make-coverage-badge --output-path ./badges/coverage.svg

Wrote coverage badge to: ./badges/coverage.svg

> auto-release-draft@0.0.0 package
> ncc build src/index.ts --license licenses.txt

ncc: Version 0.38.1
ncc: Compiling file index.js into CJS
ncc: Using typescript@5.2.2 (local user-provided)
  36kB  dist/licenses.txt
1185kB  dist/index.js
1221kB  [5211ms] - ncc 0.38.1




```