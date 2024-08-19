document.addEventListener('DOMContentLoaded', function () {
    const postsTableBody = document.querySelector('#postsTable tbody');

    function carregarPosts() {
        const posts = JSON.parse(localStorage.getItem('posts')) || [];

        postsTableBody.innerHTML = '';

        posts.forEach(post => {
            const row = document.createElement('tr');

            row.innerHTML = `
                <td>${post.id}</td>
                <td>${post.nome}</td>
                <td>${post.idade}</td>
                <td>${post.categoria}</td>
                <td>${post.descricao}</td>
                <td><img src="${post.foto}" alt="${post.nome}"></td>
                <td><button class="delete-btn" data-id="${post.id}">Deletar</button></td>
            `;

            postsTableBody.appendChild(row);
        });

        deletar();
    }

    function deletar() {
        const deleteButtons = document.querySelectorAll('.delete-btn');

        deleteButtons.forEach(button => {
            button.addEventListener('click', function () {
                const postId = this.getAttribute('data-id');
                deletarPost(postId);
            });
        });
    }

    function deletarPost(id) {
        let posts = JSON.parse(localStorage.getItem('posts')) || [];
        posts = posts.filter(post => post.id != id);
        localStorage.setItem('posts', JSON.stringify(posts));
        carregarPosts();
    }

    carregarPosts();
});