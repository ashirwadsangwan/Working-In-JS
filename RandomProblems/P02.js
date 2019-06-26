function FirstReverse(str) { 

    
    if (str.length==0){
        return str;
        
    }else{
        return FirstReverse(str.slice(1)) + str[0];
    }
}
   
// keep this function call here 
FirstReverse(readline());
