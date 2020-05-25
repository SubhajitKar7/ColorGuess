// color project

var col=["rgb(255, 255, 0)",
		"rgb(255, 0, 0)",
		"rgb(255, 0, 255)",
		"rgb(255, 255, 0)",
		"rgb(255, 216, 0)",
		"rgb(255, 0, 0)",
]

var sq=document.querySelectorAll(".sq");

for(var i=0;i<sq.length;i++)
{
	sq[i].style.backgroundColor=col[i];
}


