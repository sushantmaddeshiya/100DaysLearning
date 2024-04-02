/*First Solution*/

const addHasTag = (str)=>{
 /* str.trim(); */
	if(str.length > 280 || str.trim().length===0){
 		return false;
}
 	str = str.split(" ");
	 	str = str.map((curr)=>{
 		curr.replace(curr[0] = curr[0].toUpperCase())
 });
 str = str.join();
 console.log(str);
}

/*Second Solution*/
const addHasTag = (str)=>{
    //str is not greater then 280 and 
	if(str.length > 280 || str.trim().length===0){
		return false;
	}
	str = str.split(" ");
	
	str = str.map((curr)=>
			curr.charAt(0).toUpperCase() + curr.slice(1)
);
console.log(str);
str = str.join("");
console.log(str);
return `#${str}`
}


console.log(addHasTag("My Name is Sushant Maddeshiya"));
