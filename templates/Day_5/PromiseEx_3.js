let fetch_API = async () =>
{
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await res.json();
    console.log(data);
}
fetch_API();


// await : Makes JavaScript wait for a promise to finish before moving to the next line.
// async: Makes a function asynchronous and automatically return a promise.
// Without async, you cannot use await.