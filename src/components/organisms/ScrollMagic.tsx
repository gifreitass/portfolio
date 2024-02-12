// import React, { useEffect } from 'react';
// import ScrollMagic from 'scrollmagic';
// import 'scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators'; // Opcional: para depuração

// const ScrollMagic: React.FC<{ children: any }> = (props) => {
//   useEffect(() => {
//     // Configurar o controlador do ScrollMagic
//     const controller = new ScrollMagic.Controller();

//     // Adicionar cena (exemplo: disparar uma animação quando o usuário rolar)
//     new ScrollMagic.Scene({
//       triggerElement: '.seu-elemento-trigger', // Substitua pelo seu seletor
//       triggerHook: 0.8, // Altere conforme necessário
//     })
//       .setClassToggle('.seu-elemento-animado', 'animate__animated animate__bounce') // Substitua pelos seus seletores e classes Tailwind
//       .addTo(controller)
//       .addIndicators(); // Opcional: Adiciona indicadores de depuração

//     // Limpar o controlador ao desmontar o componente
//     return () => controller.destroy();
//   }, []);

//   return <div>{props.children}</div>;
// };

// export default ScrollMagic