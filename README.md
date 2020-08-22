#BC-social-network

BC-social-network es una red social, la cual le permite a cualquier usuario que se autentique mediante Auth0, visualizar, crear, modificar o eliminar historias, las cuales son subidas por ellos mismos, dichas historias permiten darle un título, una descripción, y opcionalmente una subir una imagen.
Todo esto es posible gracias a que BC-social-network cuenta con una API la cual permite hacer gestión de todas las historias, además de que ya ha sido desplegada por su creador en un servidor de Heroku, puede encontrarla en la dirección url “https://api-bc-social-network.herokuapp.com/api/stories”.
BC-social-network hace uso de librerías como fontAwesome para la implementación de iconos, bootswatch que es una versión modificada de Bootstrap y sweetAlert2 para la visualización de mensajes de alerta personalizados.
Se implementó CDK (component Developement Kit) para permitirle a BC-social-network, tener un virtual scroll, permitiendo así mejorar la velocidad de renderizado de la aplicación cuando hay un número considerable de historias.

##Recomendaciones
El API de BC-social-network está desplegada en un servidor de Heroku gratuito por tal razón, a la de usar BC-social-network, es posible que dicho servidor se encuentre apagado por inactividad, y tarde más de lo esperado en cargar la primera vez que se inicia.
A la hora de subir imágenes a tus historias se recomienda no subir imágenes con un peso superior a 2Mb, puesto que su subida puede tomar bastante tiempo.


