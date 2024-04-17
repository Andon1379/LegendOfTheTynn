export async function post_req(url, data = {}) {
  //console.log(data, JSON.stringify(data))
  const response = await fetch(url, {
    method: 'POST', 
    mode: 'cors', 
    cache: 'no-cache', 
    credentials: 'same-origin',
    headers: { 'Content-Type': 'application/json' },
    redirect: 'follow',
    referrerPolicy: 'no-referrer',
    body: JSON.stringify(data)
  });
  if (!response.ok) {
    alert(`HTTP error! Status: ${response.status}`)
  }
  return response.json();
}

export async function get_req(url) {
  const response = await fetch(url, {
    method:'get',
    mode:'cors',
    cache:'no-cache',
    credentials:'same-origin',
    headers:{ 'Content-Type': 'application/json' },
    redirect:'follow',
    referrerPolicy:'no-referrer'
  });
  return response.json();
}