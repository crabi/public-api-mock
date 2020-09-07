# Swagger generated server

## Overview
This server provides a crabi mock API

### Running the server
To run the server, run:

```
npm start
```

To view the Swagger UI interface:

```
open http://localhost:8080/docs
```

## Examples

### Login

```sh
curl --location --request POST 'localhost:8080/users/login' \
--header 'os-name: Android' \
--header 'os-version: Android 9' \
--header 'brand: Samsung' \
--header 'client-version: android-1.10.3' \
--header 'Content-Type: application/json' \
--data-raw '{
    "email": "user@example.com",
    "password": "exAmpl3!"
}'
```

### Refresh JWT token

```sh
curl --location --request POST 'localhost:8080/users/refresh' \
--header 'os-name: Android' \
--header 'os-version: Android 9' \
--header 'brand: Samsung' \
--header 'client-version: android-1.10.3' \
--header 'Content-Type: application/json' \
--data-raw '{
    "refreshToken" : "eyJhbGciOiJSUzI1NiIsImtpZCI6Im1sVW1COEtoY040QVFRbXF1TXZDbFEiLCJ0eXAiOiJKV1QifQ.eyJhbGciOiJSUzI1NiIsImRldmljZV9pZCI6IiIsImV4cCI6MTYwMjM2MjUyNCwiaXNfcmVmcmVzaF90b2tlbiI6dHJ1ZSwicm9sZXMiOlsiUE9MSUNZIiwiVE9LRU5fR0VORVJBVE9SIiwiQkFTSUMiXSwic3ViIjoiMmMyNDFkMzItZmY0NC00NmEwLWI0MDgtYmQ5N2I0YzM0MWU5IiwidHlwIjoiSldUIn0.hdV3G4ibF7HCrKQUbeS79BS0fnq6paUMwn24FE_Y75D16ic-ezxbyP4xrBl7wSUeUnB58DMgV0lo9yzU_dCSsPsjlVQTVS_kUzszYzezotrhl061GPYkcSeMH23lvE2Coq8UqkgDtulCnThJi_tBRsEo2v6EK363IsMhDGpNMK0L8ussiZCoHqldQ2Uq7S-9cgrxBCJhZUVkT_V4yKEF18x8ShKCNcF1QgMVXUlSqNoBIWln2KuX_yp7hnr73bOGlpbnB7tRaKspjkJ9OUUL2p-QQ_vAz-tu9heDU69jXEiBCA06gBLznQZSYMWqrSCu3CV6g0ZaV6SDAOEIU0JKbQ"
}'
```

### Search policy

```sh
curl --location --request GET 'http://localhost:8080/policy/search?policy-number=ae-101' \
--header 'os-name: Android' \
--header 'os-version: Android 9' \
--header 'brand: Samsung' \
--header 'client-version: android-1.10.3' \
--header 'Authorization: Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJhbGciOiJSUzI1NiIsImRldmljZV9pZCI6IiIsImV4cCI6MTYwMDYyMDYyNywiaXNfcmVmcmVzaF90b2tlbiI6ZmFsc2UsInJvbGVzIjpbIlBPTElDWSIsIlRPS0VOX0dFTkVSQVRPUiIsIkJBU0lDIl0sInN1YiI6IjM4Nzk3YWRkLTdlMTktNDViZC1hNTRmLTMxZDc5MTZmZWNkZCIsInR5cCI6IkpXVCJ9.abZN_ojWHknj2DF2n6XZRl8b4wi36rD69f0RzW1WvjKIG_MjM-v9xvuOaGRsUMV3nHCJw1CAyYAir5MV0Y02f4HfPQq4OdeHOfK6BwBZgFK4hScLT8alMcs6l_gIaJBkt6PkuET9pkq-QupkquSo18XCsdnSWV9fMwKJBOFUFcmZl__0Oh2JPAkp-KjfiOYOe5nXJwTtcFFF3ngQW3C7guxlpcr79yXXMK2e9OuFTWMfKaEOAgF31NmK0fiZnodjg0VB1D7DsOKX2II8uKa96pP6b8zfyPFSD4pO95GhfTKWs2dPK9hoqxv7hxuMWUi4boh1kH98CzhRqUgGpDSMkg'
```
