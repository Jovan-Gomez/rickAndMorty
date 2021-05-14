const getCharacter = async(url) =>{
    const baseUrl = `https://rickandmortyapi.com/api/character/`;
    const  arr = [];
    if(url?.length){
        await url.forEach(e => {
            fetch(e).then(resp => resp.json()).then(data => fetch(baseUrl + data.id).then(resp => resp.json()).then(data => arr.push(data)))
        });
    }
    return arr
}
export default getCharacter