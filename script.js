document.addEventListener("DOMContentLoaded", function () {
    emailjs.init("Qq24NiA83NLeNhb5D"); // PublicKey - Emailjs

    const form = document.getElementById("formContato"); 

    form.addEventListener("submit", function (e) { // Adiciona o evento abaixo ao botão de enviar do formulário.
        e.preventDefault();

        emailjs.sendForm("service_pdo3nxe", "template_1hv6hp5", form) // Envia o formulário ao emailjs para ser usado no template.
            .then(function () {
                const notificacao = document.getElementById("notificacao");
                notificacao.textContent = "Email enviado com sucesso!";
                notificacao.classList.remove("oculta"); // Remove a classe oculta para mostrar a notificação
                notificacao.classList.add("visivel"); // Adiciona a classe visível para mostrar a notificação

                setTimeout(() => { // Controla o tempo de exibição da notificação
                    notificacao.classList.remove("visivel");
                    notificacao.classList.add("oculta");
                }, 3000);

                form.reset(); // Limpa o formulário após envio
            }, function (error) {
                alert("Erro ao enviar: " + error.text);
            });
    });
});