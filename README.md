# Proyecto: url-shortner

Tecnologías usadas:

back-end

- django
  - csrf_token
  - uuid
  - csrf_protect

front-end

- bootstrap
- API fetch

## En qué consiste la APP

Es una app muy sencilla en la que mediante un formulario introducimos una url más o menos larga. Mediante una petición POST usando JS y la API fetch mando una petición al backend creado con Django donde crea un objeto con dos campos la url mandada y un str de 5 carcateres aleatorios(uid).
Finalmente devuelve ese uid y creo un enlace del tipo `http://localhost:800/5d3d8`. Cuando hago una petición a ese recurso django lo gestiona y busca en la bbdd ese uid y redirige a la url que tiene asociada.

Además he aprendido a hacer deploy de una proyecto django en heroku.

Deploy de la app en Heroku : [url-shortner](https://url-shortner-django-project.herokuapp.com/)
