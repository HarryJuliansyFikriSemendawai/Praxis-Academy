const getData = async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/todos/1');
    
    console.log(response.data);
    document.querySelector( '#app' ).innerHTML =`
    <ul>
        <li>id: ${response.data.userId}</li>
        <li>id: ${response.data.id}</li>
        <li>id: ${response.data.data}</li>
        <li>completed: ${response.data.completed}</li>
    </ul>`;
};

getData();

// async function getDatas (){

// }