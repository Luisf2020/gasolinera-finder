# Buscador de gasolineras

![stack: React](https://img.shields.io/badge/stack--React-0d9488?style=flat-square) ![stack: JavaScript](https://img.shields.io/badge/stack--JavaScript-0d9488?style=flat-square) ![stack: axios](https://img.shields.io/badge/stack--axios-0d9488?style=flat-square) ![stack: Create React App](https://img.shields.io/badge/stack--Create%20React%20App-0d9488?style=flat-square) ![IA: asistido](https://img.shields.io/badge/IA--asistido-6366f1?style=flat-square)

Aplicacion React que consulta precios de carburante y ayuda a localizar la gasolinera mas conveniente segun empresa, carburante o cercania.

**Tipo:** Aplicacion web (React) · **Complejidad:** Intermedio

## Problema que resuelve

Comparar precios de carburante entre estaciones cercanas exige normalmente visitar varios sitios; la aplicacion concentra la consulta en una sola pantalla.

## Solucion implementada

Componente principal que consume una API publica de precios mediante axios, filtra los resultados y los presenta en tarjetas; construido con Create React App.

### Funcionalidades principales

- Consulta de estaciones por API (axios)
- Filtros por empresa y tipo de carburante
- Listado de resultados en tarjetas
- Componente reutilizable GasStationFinder

## Stack

- React
- JavaScript
- axios
- Create React App

## Estructura

```
src/App.js                    # contenedor
src/components/GasStationFinder.js  # logica y consulta
public/index.html
```

## Puesta en marcha

```bash
npm install
npm start
```

## Complejidad del proyecto

**Nivel: Intermedio** — Consumo de API externa con estado y filtrado en el cliente.

El nivel describe la complejidad tecnica del proyecto, no el grado de dominio de quien lo escribio.

## Despliegue

Desplegable como sitio estatico tras `npm run build`; requiere definir el origen de la API en el entorno.  
El codigo fuente esta disponible en este repositorio.

> El repositorio incluye `node_modules` versionado, una practica que conviene evitar: deberia anadirse a `.gitignore`.

## Transparencia sobre IA

Este proyecto se desarrollo con asistencia de inteligencia artificial (generacion de codigo,
revision y documentacion). El codigo fue leido, ejecutado y probado manualmente. No se declaran
clientes, metricas ni resultados que no puedan verificarse.

## Autor

**Luis Felipe Zuniga Leon** — Desarrollador de software asistido por IA

- GitHub: <https://github.com/Luisf2020>
- Correo: developerluis2@gmail.com
- WhatsApp: +504 3237 0056

---

_Proyecto de portafolio. El desarrollo se apoyo en herramientas de IA bajo revision tecnica humana._
