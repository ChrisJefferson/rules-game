#!/bin/bash
while true; do
ls -d src/* | entr -d ./build.sh
done