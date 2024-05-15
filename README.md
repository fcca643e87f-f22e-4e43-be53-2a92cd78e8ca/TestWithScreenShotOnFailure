# Playwright Test with Screenshot on Failure

This repository contains a Playwright test script that captures screenshots on test failure.

## Overview

In this test script, Playwright is used to automate browser testing. The script navigates to a web page and performs assertions on the page title. If a test fails, a screenshot is captured and saved with a filename that includes the test title, timestamp, and project name.

## Setup

### Prerequisites

- Node.js installed on your machine

### Installation

1. Clone this repository:
   git clone https://github.com/yourusername/your-repository.git
2. Install dependencies:
    npm install

## Usage
    npx playwright test