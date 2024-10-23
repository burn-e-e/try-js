const strs = ["act","pots","tops","cat","stop","hat"];
console.log(strs);

const groupAnagrams = (strs)=> {
    let res = [];
    for(let s of strs){
        const sortedS = s.split('');
        console.log(sortedS);
    }
    
}
groupAnagrams(strs);