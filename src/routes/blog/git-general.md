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

1. git init   
2. git add .  
3. git commit -m "my changes"  
4. git branch -M main   

at this point make sure have created new repo on GitHub    

5. git remote add origin *https://github.com/github username/repo-name.git*  
**Note:**  In this case origin is just term used by convention to represent the remote location.  
If you want to check what current orgin is type: git remote -v.
6. git push -u origin main  

### To update later

git add .  
git commit -m "my other changes"  
git push  

</article>
