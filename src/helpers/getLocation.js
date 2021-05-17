const baseUrl = 'https://rickandmortyapi.com/api/location?name='
const getLocation = async (name) =>{
    const resp = await fetch(`${baseUrl}${name}`);
    const data = await resp.json();
    if(data.results){
        return data.results;
    }else{
        return {error : 'hola'}
    }
}

export default getLocation;