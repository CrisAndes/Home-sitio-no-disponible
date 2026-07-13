# Andes Salud — Sitio en desarrollo

Portada temporal ("sitio en desarrollo") de Andes Salud, construida con React + Vite y Tailwind CSS v3.

Reutiliza el **header** del sitio principal ([Home-Andes](https://github.com/CrisAndes/Home-Andes)) — barra de emergencias, login/registro y navbar — pero muestra un cuerpo único con el mensaje de "muy pronto, un nuevo sitio". Los links del navbar apuntan al sitio productivo actual (`andessalud.com.ar`).

## Tecnologías

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS v3](https://tailwindcss.com/)

## Scripts

```bash
npm install     # instalar dependencias
npm run dev     # servidor de desarrollo → http://localhost:5173
npm run build   # build de producción en dist/
npm run preview # previsualizar el build
```

## Estructura

```
src/
  Components/
    Header.jsx        # header reutilizado del sitio principal
    BurgerMenu.jsx    # menú mobile
    EnDesarrollo.jsx  # cuerpo con el mensaje "en desarrollo"
    Modals/           # Login, Register, Emergency (+ Layout)
  App.jsx
  main.jsx
  index.css
public/
  gif/  svg/          # logo e íconos del header
```
