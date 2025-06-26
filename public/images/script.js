document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.btn-apagar')

    buttons.forEach((button) => {
        button.addEventListener('click', async () => {
            const id = button.getAttribute('data-id')

            const dialog = confirm('Tem certeza que quer deletar esse jogo?')
            if (!dialog) return

            try {
                const res = await fetch(`/games/remove/${id}`, {
                    method: 'DELETE',
                })

                if (res.ok) {
                    location.reload()
                } else {
                    console.log('Erro ao deletar jogo')
                }
            } catch (err) {
                console.error(err)
                alert('Erro na requisição')
            }
        })
    })
})
