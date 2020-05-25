//alert("hi");
/*var a=prompt("hello");
alert("hi "+a);
console.log("jhj "+a);
*/
/*
var list=[];
		console.log("connected");

i=prompt("what do u want?");

while(i!=="quit")
{


	if(i==="new")
	{
		var t=prompt("what to add ? ");
		list.push(t);
	}
	else if(i==="list")
	{
		console.log(list);
	}
i=prompt("what do u want?");
	
}

alert(" you have quit !! ");
*/


/*
var logo=document.querySelector("#uu")
logo.style.border="10px solid purple"
*/



//event
/*
var a=document.querySelector("#jj");
a.addEventListener("click",function(){alert(" its clicked ");})
a.addEventListener("click",function(){a.style.background="blue";})
a.addEventListener("click",function(){a.textContent="BYE BYE";})
*/

/*
var a=document.querySelector("#bt");
var b=document.querySelector("body");
var c=false

a.addEventListener("click",function(){

	if(c==true)
	{
b.style.background="orange";
c=false;
	}else
	{
b.style.background="white";
c=true;
	}
})
*/

/*
var a=document.querySelector("#bt");
a.addEventListener("click",function(){document.body.classList.toggle("orange");})

*/



// score keeper

/*
var v1=document.querySelector("#p1");
var v2=document.querySelector("#p2");
var res=document.querySelector("#rs");
var h1=document.querySelector("#s1");
var h2=document.querySelector("#s2");
var r=document.querySelector("#rs");
var inp=document.querySelector("#tt");
var wd=document.querySelector("p span");

var over=false;
var p1c=0;
var p2c=0;
var win=0;

v1.addEventListener("click",function(){
	if(!over)
	{
		p1c++;
		console.log(p1c,win);
		if(p1c === win){
			h1.classList.add("winner");
			over=true;
		}

		h1.textContent=p1c;
	}
});

v2.addEventListener("click",function(){
	if(!over)
	{
		p2c++;
		if(p2c === win){
			h2.classList.add("winner");
			over=true;
		}

		h2.textContent=p2c;
	}
});

r.addEventListener("click",function(){
reset();
});

function reset()
{
	p1c=0;
	p2c=0;
	h1.textContent=0;
	h2.textContent=0;
	h2.classList.remove("winner");
	h1.classList.remove("winner");
	over=false;

}

inp.addEventListener("change",function(){
wd.textContent=inp.value;
win=Number(inp.value);
reset();
});
*/




// other events
/*
var f=document.querySelectorAll("li");

for(var i=0;i<f.length;i++)
{
f[i].addEventListener("mouseover",function(){
this.style.color="red";
this.classList.toggle("selected");
});

f[i].addEventListener("mouseout",function(){
this.style.color="black";
});

f[i].addEventListener("click",function(){	
this.classList.toggle("done");
});

}
*/


// color project

var num;

var col;

var sq;
var colPick;
var dis;
var msg;
var h1;
var reset;
var ebtn;
var hbtn;

init();

function init()
{
 num=6;
 col=genCol(num);
 colPick=col[pick()];
 sq=document.querySelectorAll(".sq");
 colPick;
 dis=document.querySelector("#guess");
 msg=document.querySelector("#msg");
 h1=document.querySelector("h1");
 reset=document.querySelector("#reset");
 ebtn=document.querySelector("#ebtn");
 hbtn=document.querySelector("#hbtn");

}


dis.textContent=colPick;

ebtn.addEventListener("click",function(){
hbtn.classList.remove("selected");
ebtn.classList.add("selected");
num=3;
rst(3);

});

hbtn.addEventListener("click",function(){
hbtn.classList.add("selected");
ebtn.classList.remove("selected");
num=6;
rst(6);

});


for(var i=0;i<sq.length;i++)
{
	sq[i].style.backgroundColor=col[i];

	sq[i].addEventListener("click",function(){
		var clickCol=this.style.backgroundColor;

		if(clickCol === colPick)
		{
			msg.textContent="correct !! ";
			correct(clickCol);
			h1.style.background=clickCol;
			reset.textContent="Play Again?";
		}
		else
		{
			this.style.backgroundColor="black";
			msg.textContent="Try Again ";
		}
			
	});
}



function rst(n)
{
	reset.textContent="New Colours";
	col=genCol(n);
colPick=col[pick()];
dis.textContent=colPick;

for(var i=0;i<sq.length;i++)
{
	if(i<n)
	{
	sq[i].style.backgroundColor=col[i];
}
else
	sq[i].style.backgroundColor="black";
}
h1.style.backgroundColor="steelblue";

}


reset.addEventListener("click",function(){
	reset.textContent="New Colours";
	col=genCol(num);
colPick=col[pick()];
dis.textContent=colPick;

for(var i=0;i<sq.length;i++)
{
	sq[i].style.backgroundColor=col[i];
}
h1.style.backgroundColor="steelblue";
msg.textContent="";
});



function correct(Col)
{
	for(var i=0;i<num/*sq.length*/;i++)
	{
		sq[i].style.background=Col;
	}

}


function pick()
{
	return (Math.floor(Math.random()*col.length));
}


function genCol(n)
{
	var arr=[];

	for(var i=0;i<n;i++)
	{
		arr[i]=randCol();
	}

	return arr;
}

function randCol()
{
	var r=Math.floor(Math.random()*256);
	var g=Math.floor(Math.random()*256);
	var b=Math.floor(Math.random()*256);

	return "rgb("  + r + ", " + g + ", " + b + ")";	
}


