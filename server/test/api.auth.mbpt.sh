#!/usr/bin/env bash
curl -d '{"username":"dong", "password":"123"}' \
    -H "Content-Type: application/json" \
    -X POST localhost:8080/api/auth/mbpt
