const baseUrl = 'https://rickandmortyapi.com/api/location?name='
const getLocation = async (name) =>{
    const resp = await fetch(`${baseUrl}${name}`);
    const data = await resp.json();
    return data.results;
}

export default getLocation;