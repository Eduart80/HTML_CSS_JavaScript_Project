
export async function fetchData() {
   const respond = await fetch('./data.json')
    const data = await respond.json()
    return data
}