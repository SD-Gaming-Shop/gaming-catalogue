var data = [
{
    category:"Action-adventure",
    imgSrc:"images/action-adventure1.jpg"
},{
    category:"Action-adventure",
    imgSrc:"images/action-adventure2.jpg"
},{
    category:"Action-adventure",
    imgSrc:"images/action-adventure3.jpg"
},{
    category:"Action-adventure",
    imgSrc:"images/action-adventure4.jpg"
},{
    category:"Action-adventure",
    imgSrc:"images/action-adventure5.jpg"
},{
    category:"Action-adventure",
    imgSrc:"images/action-adventure6.jpg"
},{
    category:"Action-adventure",
    imgSrc:"images/action-adventure7.jpg"
},{
    category:"Action-adventure",
    imgSrc:"images/action-adventure8.jpg"
},{
    category:"Sports-And-Simulation",
    imgSrc:"images/Sports1.jpg"
},{
    category:"Sports-And-Simulation",
    imgSrc:"images/Sports2.jpg"
},{
    category:"Sports-And-Simulation",
    imgSrc:"images/Sports3.jpg"
},{
    category:"Sports-And-Simulation",
    imgSrc:"images/Sports4.jpg"
},{
    category:"Sports-And-Simulation",
    imgSrc:"images/Sports5.jpg"
},{
    category:"Sports-And-Simulation",
    imgSrc:"images/Sports6.jpg"
},{
    category:"Sports-And-Simulation",
    imgSrc:"images/Sports7.jpg"
},{
    category:"Sports-And-Simulation",
    imgSrc:"images/Sports8.jpg"
},{
    category:"horor games",
    imgSrc:"images/horor-games1.jpg"
},{
    category:"horor games",
    imgSrc:"images/horor-games2.jpg"
},{
    category:"horor games",
    imgSrc:"images/horor-games3.jpg"
},{
    category:"horor games",
    imgSrc:"images/horor-games4.jpg"
},{
    category:"horor games",
    imgSrc:"images/horor-games5.jpg"
},{
    category:"horor games",
    imgSrc:"images/horor-games6.jpg"
},{
    category:"horor games",
    imgSrc:"images/horor-games7.jpg"
},{
    category:"horor games",
    imgSrc:"images/horor-games8.jpg"
},{
    category:"shooters",
    imgSrc:"images/shooters1.jpg"
},{
    category:"shooters",
    imgSrc:"images/shooters2.jpg"
},{
    category:"shooters",
    imgSrc:"images/shooters3.jpg"
},{
    category:"shooters",
    imgSrc:"images/shooters4.jpg"
},{
    category:"shooters",
    imgSrc:"images/shooters5.jpg"
},{
    category:"shooters",
    imgSrc:"images/shooters6.jpg"
},{
    category:"shooters",
    imgSrc:"images/shooters7.jpg"
},{
    category:"shooters",
    imgSrc:"images/shooters8.jpg"
},
];

function each(coll, f) {
  if (Array.isArray(coll)) {
    for (var i = 0; i < coll.length; i++) {
      f(coll[i], i);
    }
  } else {
    for (var key in coll) {
      f(coll[key], key);
    }
  }
}
function filter(array, predicate) {
  var acc = [];
  each(array, function(element, i) {
    if (predicate(element, i)) {
      acc.push(element);
    }
  });
  return acc;
}
function map(array, func) {
  var acc = [];
  each(array, function(element, i) {
    acc.push(func(element, i));
  });
  return acc;
}
function reduce(array, f, acc) {
  if (acc === undefined) {
    acc = array[0];
    array = array.slice(1);
  }
  each(array, function(element, i) {
    acc = f(acc, element, i);
  });
  return acc;
}
    $('.list').click(function(){
        var btn = $(this).attr('buttonof')
        if ( btn ==="all"){
            $('data').show('1000')
        }
        else{
            $('data').not('.'+ btn).hide('1000')
        }
    })
    $('.list').click(function(){
        $(this).addClass('active').siblings().removeClass('active')
    })
each(data,function(e){
var format = $(`<div class="grid-item">
<div class="flip-card">
<div class="card">
  <div class="flip-card-inner">
    <div class="flip-card-front">
    <img
    src=${e.imgSrc}
    alt="god of war ">
    </div>
    <div class="flip-card-back">
    <h1>${e.category}</h1>
    <p class="price">$39.99</p>
    <p>good game</p>
    <button>Add to Cart</button>

    </div>
  </div>
</div>
</div>
</div>`)
$("#container").append(format)
 })
$('#shooters').click(function(){
    $(".grid-item").remove()
var filtred = []
 filtred=filter(data,function(e,i){
    return e.category=== "shooters"
})
    each(filtred,function(e){
var format = $(`
<div class="grid-item">
<div class="flip-card">
<div class="card">
  <div class="flip-card-inner">
    <div class="flip-card-front">
    <img
    src=${e.imgSrc}
    alt="god of war ">
    </div>
    <div class="flip-card-back">
    <h1>${e.category}</h1>
    <p class="price">$39.99</p>
    <p>good game</p>
    <button>Add to Cart</button>

    </div>
  </div>
</div>
</div>
</div>
`)
$("#container").append(format)
 })
                }
)
$('#simulation_and_sports').click(function(){
    $(".grid-item").remove()
var filtred = []
 filtred=filter(data,function(e,i){
    return e.category=== "Sports-And-Simulation"
})
    each(filtred,function(e){
var format = $(`<div class="grid-item">
<div class="flip-card">
<div class="card">
  <div class="flip-card-inner">
    <div class="flip-card-front">
    <img
    src=${e.imgSrc}
    alt="god of war ">
    </div>
    <div class="flip-card-back">
    <h1>${e.category}</h1>
    <p class="price">$39.99</p>
    <p>good game</p>
    <button>Add to Cart</button>

    </div>
  </div>
</div>
</div>
</div>`)
$("#container").append(format)
 })
    }
)
$('#action_adventure').click(function(){
    $(".grid-item").remove()
var filtred = []
 filtred=filter(data,function(e,i){
    return e.category=== "Action-adventure"
})
    each(filtred,function(e){
var format = $(`<div class="grid-item">
<div class="flip-card">
<div class="card">
  <div class="flip-card-inner">
    <div class="flip-card-front">
    <img
    src=${e.imgSrc}
    alt="god of war ">
    </div>
    <div class="flip-card-back">
    <h1>${e.category}</h1>
    <p class="price">$39.99</p>
    <p>good game</p>
    <button>Add to Cart</button>

    </div>
  </div>
</div>
</div>
</div>`)
$("#container").append(format)
 })
    }
)
$('#survivor-and-horor').click(function(){
    $(".grid-item").remove()
var filtred = []
 filtred=filter(data,function(e,i){
    return e.category=== "horor games"
})
    each(filtred,function(e){
var format = $(`<div class="grid-item">
  <div class="flip-card">
    <div class="card">
      <div class="flip-card-inner">
        <div class="flip-card-front">
        <img
        src=${e.imgSrc}
        alt="god of war ">
        </div>
        <div class="flip-card-back">
        <h1>${e.category}</h1>
        <p class="price">$39.99</p>
        <p>good game</p>
        <button>Add to Cart</button>

        </div>
      </div>
    </div>
  </div>
</div>`)
$("#container").append(format)
 })
    }
)
$('#all').click(function(){
    $(".grid-item").remove()
var filtred = []
 filtred=filter(data,function(e,i){
    return true
})
    each(filtred,function(e){
var format = $(`<div class="grid-item">
<div class="flip-card">
<div class="card">
  <div class="flip-card-inner">
    <div class="flip-card-front">
    <img
    src=${e.imgSrc}
    alt="god of war ">
    </div>
    <div class="flip-card-back">
    <h1>${e.category}</h1>
    <p class="price">$39.99</p>
    <p>good game</p>
    <button>Add to Cart</button>

    </div>
  </div>
</div>
</div>
</div>`)
$("#container").append(format)
 })
    }
)