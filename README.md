# Terem Front End

This repository contains code for the Terem front end application test.

## Getting started

The application was developed using the `vite@latest` template on macOS Sonoma, with Node v21.4.0.

1. Clone the repository, then switch to the checkout directory
2. Run `pnpm i` to install dependencies
3. Run `pnpm dev` to start the development server and browse the application

## Testing

Unit and End-to-End (e2e) tests are provided, using `vitest` and `playwright` respectively. Please note the test snapshots were produced in a macOS environment: in the real world, this build process would probably be a Linux-based container for reproducibility across environments.

1. Run the unit tests via `pnpm test`
2. Run the e2e tests via starting `pnpm dev` then starting either `pnpm test:e2e` or `pnpm test:e2e:ui` (if you wish to see the Playwright GUI)
