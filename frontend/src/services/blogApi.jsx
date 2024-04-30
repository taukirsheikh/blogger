import axios from 'axios'

export default async function BlogList() {
    try {
        const response = await axios.get('http://127.0.0.1:8000/blog/')
        console.log(response.data)
        
        return response
    } catch (err) {
        console.error(err)
        throw err;
    }
}