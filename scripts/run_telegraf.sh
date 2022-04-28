#!/bin/bash

ERROR_ENV_VAR=85

set -o allexport
source .env
set +o allexport

if [[ -z "$INFLUX_TOKEN" ]]; then
  echo "INFLUX_TOKEN not set"
  exit $ERROR_ENV_VAR
elif [[ -z "$INFLUX_URL" ]]; then
  echo "INFLUX_URL not set"
  exit $ERROR_ENV_VAR
elif [[ -z "$INFLUX_ORG" ]]; then
  echo "INFLUX_ORG not set"
  exit $ERROR_ENV_VAR
elif [[ -z "$INFLUX_BUCKET" ]]; then
  echo "INFLUX_BUCKET not set"
  exit $ERROR_ENV_VAR
fi

telegraf_conf=$(dirname "$0")/telegraf.conf
telegraf --config "$telegraf_conf"
