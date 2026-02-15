docker run \
  --rm \
  -e SONAR_HOST_URL="http://host.docker.internal:9000"  \
  -e SONAR_TOKEN="sqa_ab031b246107e81aa9fe1f851999ba4c357d803d" \
  -v "$(pwd):/usr/src" \
  sonarsource/sonar-scanner-cli

# npm run sonar
# les conteneur docker compose doivent être en ligne
# le token était un token utilisateur global sans ttl
#
