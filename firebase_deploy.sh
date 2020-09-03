#!/usr/bin/env bash

npm run build;

echo "Deploying insights"

firebase use known-origin-io;
firebase deploy --only hosting:known-origin-insights;
