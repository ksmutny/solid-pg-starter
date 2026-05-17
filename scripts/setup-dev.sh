#!/bin/sh
set -e

# Seed .env from .env.example on first run; leave alone if already present.
if [ ! -f .env ]; then
    cp .env.example .env
    echo ".env created from .env.example"
fi

# Install PostgreSQL client psql
if ! command -v psql >/dev/null 2>&1; then
    sudo apt-get update -qq
    sudo apt-get install -y -qq postgresql-client >/dev/null
fi

echo "psql $(psql --version | awk '{print $3}')"
