#!/usr/bin/env sh

# abort on errors
set -e

# Install dependencies
yarn install

# Removing useless dependencies for compatibility
sed -i -E 's/var\ (.+)\ =\ require\(\x27three\/examples/\/\/var\ \1\ =\ require\(\x27three\/examples/g' node_modules/troisjs/build/trois.js
