
<div class="card-parent">
    <div class="card">
        <img 
            class = "card-bg"
            src = "https://cdn.pixabay.com/photo/2016/09/05/15/03/candle-1646765_960_720.jpg"
            alt = ""
        >
        <div class="card-text">Language</div>
    </div>
    <div class="card">
        <img 
        class = "card-bg"
        src= "https://cdn.pixabay.com/photo/2018/09/16/23/48/tech-3682674_960_720.jpg"
        alt=""
        >
        <div class="card-text">Tech</div>
    </div>
    <div class="card">
        <img 
        class = "card-bg"
        src= "https://images.pexels.com/photos/748626/pexels-photo-748626.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
        alt=""
        >
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
}

.card-bg {
  opacity: .9;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: auto;
}

.card-text {
    text-align: center;
    color: white;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-size: 3rem;
    z-index: 1;
}

</style>
