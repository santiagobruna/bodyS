window.sr = ScrollReveal({ reset: true });

sr.reveal(".area-1", {
  duration: 3000,
});

sr.reveal(".area-2", {
  rotate: { x: 0, y: 100, z: 0 },
  duration: 3000,
});

sr.reveal(".area-3", { duration: 3000 });

let elementosDuvida = document.querySelectorAll(".duvida");

elementosDuvida.forEach((duvida) => {
  duvida.addEventListener("click", function () {
    duvida.classList.toggle("ativa");
  });
});

// Objeto com as traduções
const translations = {
  en: {
    "title-terms": "Terms and Conditions",
    "link-terms": "Terms and Conditions of Use",
    "title-payment": "Payment Methods",
    "payment-mastercard": "MasterCard",
    "payment-pix": "Pix",
    "title-location": "Location",
    address: "Address: Example Street, 123 - Nova Iguaçu - Rio de Janeiro",
    whatsapp: "WhatsApp: (22) 98765-4321",
    email: "Email: contato@bodyS.com",
    "footer-copyright":
      "&copy; 2025 Developed Bruna Carla. All rights reserved.",
    "footer-notice":
      "The content programming varies according to the plan. To use the service, you must be a subscriber and over 18 years old. Content subject to availability. The service is sold by Academy Ltda.",
  },
  pt: {
    "title-terms": "Termos e Condições",
    "link-terms": "Termos e Condições de Uso",
    "title-payment": "Formas de Pagamento",
    "payment-mastercard": "MasterCard",
    "payment-pix": "Pix",
    "title-location": "Localização",
    address: "Endereço: Rua Exemplo, 123 - Nova Iguaçu - Rio de Janeiro",
    whatsapp: "WhatsApp: (22) 98765-4321",
    email: "Email: contato@bodyS.com",
    "footer-copyright":
      "&copy; 2025 Desenvolvido por Bruna Carla. Todos os direitos reservados.",
    "footer-notice":
      "A programação do conteúdo esportivo varia de acordo com o plano. Para usar o serviço, é necessário ser assinante e ter mais de 18 anos de idade. Conteúdo sujeito a disponibilidade. O serviço é comercializado por Academy Ltda.",
  },
};

// Script para alternar os idiomas
document
  .getElementById("languageSelector")
  .addEventListener("change", (event) => {
    const selectedLang = event.target.value;

    // Atualiza os textos com base na linguagem selecionada
    document.querySelectorAll("[data-lang]").forEach((element) => {
      const key = element.getAttribute("data-lang");
      if (translations[selectedLang][key]) {
        element.innerHTML = translations[selectedLang][key];
      }
    });
  });
