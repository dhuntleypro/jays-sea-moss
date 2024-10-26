#!/bin/bash

if [ -z "$GITHUB_TOKEN" ]; then
  echo "Error: GITHUB_TOKEN environment variable is not set."
  exit 1
fi

echo "//npm.pkg.github.com/:_authToken=${GITHUB_TOKEN}" > .npmrc
echo "@dhuntleypro:registry=https://npm.pkg.github.com" >> .npmrc
echo ".npmrc file has been generated with the GITHUB_TOKEN."
