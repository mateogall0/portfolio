#!/usr/bin/bash


npx lighthouse http://localhost:3000 --preset=desktop --output-path=./lh_output/desktop.html


npx lighthouse http://localhost:3000 \
  --emulated-form-factor=mobile \
  --screenEmulation.enabled=true \
  --throttling-method=simulate \
  --output-path=./lh_output/mobile.html \
  --view
