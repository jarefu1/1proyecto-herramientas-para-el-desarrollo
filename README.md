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
