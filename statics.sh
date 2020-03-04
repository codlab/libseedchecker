curl https://raw.githubusercontent.com/Leanny/leanny.github.io/master/seedchecker/nest1.json > statics/nest1.json
curl https://raw.githubusercontent.com/Leanny/leanny.github.io/master/seedchecker/nest2.json > statics/nest2.json

mkdir tmp
git clone https://github.com/Leanny/SeedSearcher tmp/
cp tmp/Events/*.json statics/
rm -rf tmp