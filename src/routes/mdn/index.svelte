<script>
    import '../../styles/mdn.css'
    import Todos from './Todos.svelte'
    let todos = [
    { id: 1, name: 'Create a Svelte starter app', completed: true },
    { id: 2, name: 'Create your first component', completed: true },
    { id: 3, name: 'Complete the rest of the tutorial', completed: false }
  ]
</script>

<h1>Index Page of Svelte Todo App</h1>

<Todos todos={todos}/>

<style>

    h1 {
        color: slateblue;
    }
</style>