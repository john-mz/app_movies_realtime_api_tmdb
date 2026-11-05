# App de películas en tiempo real (TMDB)

Aplicación móvil hecha con **Expo** y **React Native** que consume la API de [The Movie Database (TMDB)](https://www.themoviedb.org/) para mostrar películas en cartelera, populares, mejor valoradas y próximos estrenos, con su detalle y reparto.

## Funcionalidades actuales

- Pantalla de inicio con carrusel principal y listas horizontales de películas.
- Detalle de cada película con su información y reparto.
- Navegación por pestañas: inicio, búsqueda y favoritos.

## Tecnologías

- Expo + Expo Router (navegación basada en archivos)
- TypeScript
- TanStack React Query (caché y estados de carga de las peticiones)
- Axios (cliente HTTP para TMDB)
- NativeWind 4 (Tailwind CSS en React Native)

## Estructura

```
src/
  app/          rutas (pestañas y detalle de película)
  components/   componentes de UI y de películas
  services/api  cliente de TMDB
  types/        tipos de dominio
```

## Cómo ejecutarla

1. Instala las dependencias:

   ```bash
   npm install
   ```

2. Copia `.env.example` como `.env` y pon tu token de lectura de TMDB (lo obtienes en https://www.themoviedb.org/settings/api):

   ```bash
   cp .env.example .env
   ```

3. Inicia la app:

   ```bash
   npx expo start
   ```

> El archivo `.env` está en `.gitignore`: nunca subas tu token al repositorio.

## Próximos pasos

- Favoritos persistentes en el dispositivo.
- Búsqueda con filtros por género y año, y paginación infinita.
- Pantalla de actor con su filmografía.
- Tráilers y plataformas donde ver cada película.
- Manejo de errores, estados de carga y modo sin conexión.
- Pruebas con Jest y React Native Testing Library.
- Build de Android con EAS.

## Licencia

Distribuido bajo la licencia MIT. Consulta el archivo [LICENSE](LICENSE).

Este producto usa la API de TMDB, pero no está avalado ni certificado por TMDB.
