(eslint .)
for dir in */
do
  (web-ext lint -s ${dir})
done
