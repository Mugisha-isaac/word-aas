

const getWordFile = async(wordType:string)=>{
   await(
       await fetch(process.env.NODE_ENV === 'production' ? "<https://words-aas.vercel.app/db/>": "< http:localhost:3000/db/>" + wordType)
   ).text()
}

const getRandomWord = (contents:string)=>{
    console.log("content before: ", contents)
    contents = contents.replace(/[\\r]/g, "")
    console.log("contents after: ", contents)

    const words = contents.split("\\n");
    words.pop();

    const i = Math.floor(Math.random() * words.length);
    return words[i];
}
