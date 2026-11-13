#!/bin/sh
# Sums tools/racing-quality.mjs over several seeds (4 at a time). Usage: tools/quality-seeds.sh <repo dir> <level> <track> [seeds="1 2 3 4"]
dir=$1; level=$2; track=$3; seeds=${4:-"1 2 3 4"}
tmp=$(mktemp -d)
for sd in $seeds; do (cd "$dir" && node tools/racing-quality.mjs "$level" 5 "$track" "$sd" 2>&1 | tail -2 | head -1 > "$tmp/$sd") & done
wait
cat "$tmp"/* | awk -v t="$track" '{p+=$2; c+=$3; w+=$4; r+=$5; n+=$6; split($7,f,"/"); fin+=f[1]; k++} END {printf "%-11s seeds %d  passes %4d  car-contacts %3d  wall %3d  recov %3d  pens %3d  finish %d/%d\n", t, k, p, c, w, r, n, fin, 20*k}'
rm -rf "$tmp"
