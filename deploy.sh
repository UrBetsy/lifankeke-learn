#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 
npm run build

# 进入生成的文件夹
cd dist

# 如果是发布到自定义域名
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

git push -f git@github.com:Urbetsy/lifankeke-learn.git master:gh-pages

cd -