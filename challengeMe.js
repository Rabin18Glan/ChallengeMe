

const punishments=[
    'You have to dance',
    'You have to sing',
    'Tell some jokes',
    'You have to tell truth',
    'You have to dare some challenge',

]

const gridContainer = document.getElementById("grid-container");
const startContainer = document.getElementById("start-container");
const randomNumber = Math.floor(Math.random() * 12)+1;
const randomNumber2 = Math.floor(Math.random() * 12)+1;
const punishment = Math.floor(Math.random() * 5);

function start()
{
document.getElementById("btn").remove();
setTimeout(()=>{
const text1 = document.createElement('h1');
text1.id='text1';
text1.innerText='Starting....'

startContainer.appendChild(text1)

},500)

setTimeout(()=>{

document.getElementById("text1").remove();
const text2 = document.createElement('h1');
text2.id='text2';
text2.innerText=`Let's have fun with friends!`

startContainer.appendChild(text2)

},2000)





setTimeout(()=>{
document.getElementById("text2").remove();
for(let i=1;i<=12;i++)
{
// document.removeChild('button')

const  gridItem=document.createElement('div');
gridItem.id=i;
gridItem.className='grid-item';
gridItem.addEventListener('click',()=>
{
if(gridItem.id==randomNumber||gridItem.id==randomNumber2)
{
gridItem.innerText='Blast'
gridItem.style.backgroundColor='red'
blast();
}
else{
gridItem.innerText='Safe'
gridItem.style.backgroundColor='green'
}


});

gridContainer.appendChild(gridItem);

}

},4000)

function blast()
{
setTimeout(()=>{
gridContainer.remove();
const text1 = document.createElement('h1');
text1.id='text1';
text1.innerText='Blast !'
text1.style.color='red'

startContainer.appendChild(text1)
},2000);
setTimeout(()=>{
document.getElementById("text1").remove();
const text2 = document.createElement('h1');
text2.id='text2';
text2.innerText=punishments[punishment]


startContainer.appendChild(text2)
},4000)

setTimeout(()=>{
document.getElementById("text2").remove();
window.location.reload();
},8000)
}

}




