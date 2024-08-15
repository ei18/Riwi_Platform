/// <reference types="vite/client" />
// Declara el modulo
declare module '*.vue' {
    //Importa los tipos
    import { DefineComponent } from 'vue';
    //Define el componente
    const component: DefineComponent<{}, {}, any>
    //Lo exporta por defecto
    export default component;
}
