/* Setup Variables */

var productBtn = document.getElementById("product-btn");
var productComtainer = document.getElementById("product-container");

var data = [
    {id:1 , name:"product 1" , desc:"bla bla bla"},
    {id:2 , name:"product 2" , desc:"bla bla bla"},
    {id:3 , name:"product 3" , desc:"bla bla bla"},
    {id:4 , name:"product 4" , desc:"bla bla bla"}
];
// Drow Ui
function drowUi(items){

    productComtainer.innerHTML="";// عشان لما نمسح تحت يمسح كلشي و يرجع الداتا بدون العنصر الممسوح    

    items.forEach(function(ele){
        productComtainer.innerHTML += /*"<div>" + ele.name + "</div>"*/
        `
        <div onclick='deleteitem(${ele.id})'>
        ${ele.name}
        </div>
        `;
    });
};
//load data
window.onload = function(){
    drowUi(data);
};

//add item
productBtn.addEventListener("click" , additem);

function additem(){
    var productinput = document.getElementById("product-input");
    //sample validation
    if(productinput.value =='' ) alert("you should enter");
    
    var lastid = data.length ? data[data.length -1].id : 0;// معناها اذا فش ايدي اعطيه رقم واحد ,واذا في جبلي ياه

    //add to array
    data.push({id:++lastid,name: productinput.value , desc:"bla bla bla"});
    console.log(data)
    //drowUi
    var lastitem= data[data.length -1];
    productComtainer.innerHTML += //"<div>" + lastitem.name +"</div>"
    `
    <div onclick='deleteitem(${lastitem.id})'>
    ${lastitem.name}
    </div>
    `;//temblate String

    productinput.value ="";//عشان يفضي الانبت بعد الاضافه
}

function deleteitem(id1){

    var index= data.map(function(i){
        return i.id;
    });
    console.log(index);
    
    if(index!== -1){
        data.splice(index,1);//splice(index , number of items after )
        drowUi(data);
    }

};