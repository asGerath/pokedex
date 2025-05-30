# 🧩 Pokédex App

Aplicación web construida con **Angular standalone components** y **CSS puro**, sin frameworks externos.  
Permite buscar, listar y visualizar Pokémon con una interfaz limpia y responsiva.

---

## 🚀 Requisitos

- Node.js ≥ 18.x
- Angular CLI ≥ 16.x (opcional pero recomendado)

---

## 🛠 Instalación

1. Clona el repositorio:

```bash
git clone https://github.com/asGerath/pokedex
cd tu-repo
```

2. Instala las dependencias:

```bash
npm install
```

---

## ▶️ Ejecutar en modo desarrollo

```bash
ng serve
```

Luego abre tu navegador en:  
[http://localhost:4200](http://localhost:4200)

---

## 📁 Estructura principal

```
├── src/
│   ├── app/
│   │   ├── components/      # Componentes como CardPokemon
│   │   ├── pages/           # Páginas como HomeComponent
│   │   ├── app.component.ts # Componente raíz standalone
│   │   └── app.routes.ts    # Rutas configuradas con provideRouter
│   ├── assets/              # Imágenes y otros archivos estáticos
│   └── styles.css           # Estilos globales
```

---

## 📦 Tecnologías utilizadas

- ✅ Angular standalone (sin módulos tradicionales)
- ✅ CSS puro (sin Bootstrap, Tailwind ni otros frameworks)
- ❌ Sin librerías externas

---

## 📄 Notas

- Las imágenes se encuentran en `public/` y se acceden vía `/img/...`.
- No se usa `AppModule`, toda la app está construida con componentes `standalone`.
- Código optimizado para mantener la simplicidad y claridad.

---

## 🧑‍💻 Autor

Joshua Gerath Abarca Sánchez  