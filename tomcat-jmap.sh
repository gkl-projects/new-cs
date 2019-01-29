#!/bin/bash
while true
do
jmap -heap 14579 > input.txt
sed 's/ *//g' input.txt > intermediate.txt
awk 'BEGIN { ORS="" } {print p"\047"$0"\047"; p=","} END {print "\n"}' intermediate.txt > output.csv


sleep 3m

done 
#exit 0
