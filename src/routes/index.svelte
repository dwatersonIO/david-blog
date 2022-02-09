
<div class="card-parent">
    <div class="card">
        <div class="card-text">Language</div>
    </div>
    <div class="card">
        <div class="card-text">Tech</div>
    </div>
    <div class="card">
       <div class="card-text">Other</div>
    </div>
</div>

<style>

.card-parent {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

    /* space out items  */
    /* justify-content: space-between; */

    /* center itemss  */
    justify-content: center;
    
    /* align items to the right */
    /* justify-content: end;  */

    /* align items to the left */
    /* justify-content: start;  */

    /* ------------------------------------- */
    
    /* center items vertically  */
    /* align-items: center; */

    /* justify-content: start;  */
    /* align-items: flex-end; */

    /* gap between columns */
    column-gap: .5em;

    /* gap between rows */
    /* row-gap: 2em; */


}
.card {
    /* Make items take up full screen width */
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100px;
    width: 100px;
    overflow: hidden;
    position: relative;
    background-color: rgb(94, 91, 91);
}

.card-text {
    text-align: center;
    color: rgb(214, 52, 52);
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-size: 3rem;
    z-index: 1;
}

</style>
