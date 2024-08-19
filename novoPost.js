function adicionarPost(event) {
    event.preventDefault()

    const id = Date.now(); // id data
    const nome = document.getElementById('nome').value;
    const idade = document.getElementById('idade').value;
    const categoria = document.getElementById('categoria').value;;
    const descricao = document.getElementById('descricao').value;;
    const foto = document.getElementById('foto').value;

    if (nome && idade && categoria && descricao && foto) {
        const post = {
            id,
            nome,
            idade,
            categoria,
            descricao,
            foto
        };

        let posts = JSON.parse(localStorage.getItem('posts')) || []; // salvando no localstorage, 
        posts.push(post); // adiciona o novo  post na array posts e transforma em string JSON
        localStorage.setItem('posts', JSON.stringify(posts)); // JSON.stringify converte o array posts (que agora inclui o novo post) em uma string JSON.

        alert('Post salvo com sucesso!'); // alert (popup) na tela do usuário
        document.getElementById('postForm').reset(); // reset após submit do form
    };
}
document.getElementById('postForm').addEventListener('submit', adicionarPost) 