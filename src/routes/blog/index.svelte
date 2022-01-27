<script context = "module">
    const allPosts = import.meta.glob("./*.{md, svx}")
    
    let body =[];
    for (let path in allPosts) {
        body.push(
            allPosts[path]().then(({metadata}) => {
                return { path, metadata };
        })
      );
    }
    
    export const load = async() => {
        const posts = await Promise.all(body);
        
        return {
            props: {
                posts,
            }
        }
    };
</script>

<script>
    export let posts
    const dateSortedPosts = posts.slice().sort((post1, post2) => {
        return new Date(post2.metadata.date) - new Date(post1.metadata.date)
    }) 
</script>
<body>
   <!-- {JSON.stringify(posts)} -->
    {#each dateSortedPosts as {path, metadata: {title, tags, date} }}
        <article>
        <h1><a class="title" href={`/blog/${path.replace(".md","").replace(".svx", "")}`}>{title}</a></h1>
        <p class="date">{new Date(date).toDateString()}</p>
        <p>
            {#each tags as tag}
                <a class="tag" href={`/tags/${tag}`}>#{tag} </a>
            {/each}
        </p>
        </article>
    {/each}
    
</body>


<style>

body {
    margin: 1em 2em 0 1em;
    font-size: 1.1rem;

}

a, h2 {
    color: #555;
}

h2 {
    margin: .8rem 0 .2rem 0 
}

h1 {
    color: black;
    margin: .8rem 0 .2rem 0 
}

p {
    margin: 0em;
    font-size: 1rem;
}

.title  {
    text-decoration: none;
}

.tag {
    text-decoration: none;
    margin-right: 10px;
    color: #555;
}

.tag:hover {
    color: coral;
}

.date {
    font-size: 0.7rem;
    color: grey

}


</style>
    
    