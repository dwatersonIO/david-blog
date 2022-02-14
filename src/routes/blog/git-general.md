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
5. creat new repo on GitHub    
6. git remote add origin *https://github.com/github username/repo-name.git*  
**Note:**  In this case origin is just term used by convention to represent the remote location.  
If you want to check what current orgin is type: git remote -v.
7. git push -u origin main  

### To update later

1. git add .  
2. git commit -m "my other changes"
3. If the origin is now different (uploading to different repo) then:    
'git remote set-url origin https://github.com/dwatersonIO/repo-you-want-name.git'
4. git push  

</article>
