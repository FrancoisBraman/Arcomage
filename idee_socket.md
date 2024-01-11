# Idées pour intégrer Socket.io

- Stocker l'instance de Socket.io dans le state (store de Redux)
  - Un reducer (par exemple) pour le socket, qui contiendra juste de quoi l'initialiser ainsi que le supprimer
  - Un hook custom pour accéder au socket, intéragir avec etc
  - Un middleware qui exploitera le hook custom pour consommer le serveur Socket.io sur l'API