const getData = () => {
    fetch('https://jsonplaceholder.typicode.com/posts?userId=1')
        .then(response => response.json())
        .then((data) => {
            const ul = document.querySelector('ul');
            const loader = document.querySelector('.loader')
            loader.classList.add('hide')
            data.forEach(function (item) {
                const li = document.createElement('li');
                const h3 = document.createElement('h3')
                const p = document.createElement('p')
                h3.innerText = item.title
                p.innerText = item.body
                li.appendChild(h3)
                li.appendChild(p)
                ul.appendChild(li)
            })

        });
}

getData()