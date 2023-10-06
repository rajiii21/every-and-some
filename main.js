// some and every in array of Object

// every


let a=[{
    name:"raji",
	age:20,
},
{
    name:"dore",
	age:10,
},
{
    name:"nobi",
	age:80,
},
{
    name:"rj",
	age:120
}
];
let result=a.every((e)=>{
	return e.age>=20
	
})
console.log(result);

// some



let b=[{
    name:"raji",
	age:20,
},
{
    name:"dore",
	age:10,
},
{
    name:"nobi",
	age:80,
},
{
    name:"rj",
	age:120
}
];
let ans=b.some((e)=>{
	return e.age>=20
	
})
console.log(ans);


