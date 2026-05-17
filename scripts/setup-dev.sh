#!/bin/sh
set -e

# Install PostgreSQL client psql
if ! command -v psql >/dev/null 2>&1; then
    sudo apt-get update -qq
    sudo apt-get install -y -qq postgresql-client >/dev/null
fi

echo "psql $(psql --version | awk '{print $3}')"
