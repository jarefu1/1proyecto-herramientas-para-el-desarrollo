<<<<<<< HEAD
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and Oxlint's TypeScript related rules in your project.
=======
# 1proyecto-herramientas-para-el-desarrollo
# Sistema de Inventario - Tienda de Mochilas

## 📋 Descripción

Frontend de un sistema web para la gestión del inventario de una tienda de mochilas.

El sistema permitirá administrar y consultar la información relacionada con las mochilas disponibles en la tienda, controlar el stock y facilitar la gestión de los productos.

Este repositorio contiene únicamente el **frontend**, desarrollado con React. El backend se desarrolla de manera independiente utilizando Java y Spring Boot.

## 🎯 Objetivo

Desarrollar una interfaz web que permita gestionar de manera sencilla y organizada el inventario de una tienda de mochilas.

El sistema permitirá visualizar los productos disponibles y realizar operaciones relacionadas con la gestión del inventario.

## 🚀 Tecnologías utilizadas

- React
- JavaScript
- HTML5
- CSS3
- Node.js
- npm
- Vite
- Git
- GitHub

## 🏗️ Arquitectura

El frontend se comunica con el backend mediante servicios HTTP/REST.

```text
┌─────────────────────────┐
│      FRONTEND           │
│         React           │
│                         │
│  Componentes            │
│  Páginas                │
│  Formularios             │
│  Servicios              │
└────────────┬────────────┘
             │
             │ HTTP / REST
             ▼
┌─────────────────────────┐
│       BACKEND           │
│   Java + Spring Boot    │
└────────────┬────────────┘
             │
             ▼
┌─────────────────────────┐
│      BASE DE DATOS      │
└─────────────────────────┘
>>>>>>> 22fdf6812097a4b76cd2d106481c77f0f2de9d87
