---
title: How to Use Git & GitHub
summary: Add push new projects after creating repo, update existing projects
tags: 
    - tech
    - git
date: 2022-01-20
---
  
<article>

# {title}:
## {summary}

### First time

git add .  
git commit -m "my changes"  
at this point make sure have created new repo on GitHub
git remote add origin *https://github.com/github username/repo-name.git*  
**Note:** In this case origin is just term used by convention to represent the remote location.  
If you want to check what current orgin is type: git remote -v.
git push -u origin master  

### To later update

git add .  
git commit -m "my other changes"  
git push  

</article>
