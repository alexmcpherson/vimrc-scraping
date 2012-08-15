#!/bin/bash
for i in {1..67}
do
  casperjs scrape.js $i
done