# Zadanie 1 - PFwChO
Paulina Wójcik, grupa 2.3 NS 

Link do DockerHub: `https://hub.docker.com/repository/docker/wpaulina/zadanie1/general`

## Punkt (1)
### a) Informacje o dacie uruchomienia, imieniu i nazwisku autora serwera oraz porcie TCP

Kod źródłowy:
![image](https://github.com/w-paulina/Zadanie1/assets/79654003/88d6629f-6acb-4fec-b370-238e45ce3a76)

Wynik działania kodu:
![image](https://github.com/w-paulina/Zadanie1/assets/79654003/45d7d145-2356-4f16-976f-c975634572aa)

### b) Adres IP klienta oraz data i godzina w jego strefie czasowej

Kod źródłowy:
![image](https://github.com/w-paulina/Zadanie1/assets/79654003/8dd6370d-5fcb-4e75-8aaf-80868860bb59)

Wynik działania kodu:

![image](https://github.com/w-paulina/Zadanie1/assets/79654003/b9a4ee04-ed95-4212-9238-0d4eb3b1e18a)

## Punkt (2) Opracowany plik Dockerfile

![image](https://github.com/w-paulina/Zadanie1/assets/79654003/49f4cbb8-150b-44cc-a0ff-b0f7ef22e1d2)

## Punkt (3) Polecenia niezbędne do:
### a) zbudowania opracowanego obrazu kontenera

Polecenie: `docker build -t zad1-angular .`

Wynik polecenia:
![image](https://github.com/w-paulina/Zadanie1/assets/79654003/9d920240-72c2-4ac8-9e31-dacbb32485f4)

### b) uruchomienia kontenera na podstawie zbudowanego obrazu

Polecenie: `docker run -p 4200:4200 zad1-angular` 

Wynik polecenia:
![image](https://github.com/w-paulina/Zadanie1/assets/79654003/c2032b2a-9aed-480d-807a-1f1fd1035481)

### c) sposobu uzyskania informacji, które wygenerował serwer w trakcie uruchamiana kontenera

Polecenie: `docker logs zad1-angular` 

### d) sprawdzenia, ile warstw posiada zbudowany obraz

Polecenie: `docker history zad1-angular` 

Wynik polecenia:
![image](https://github.com/w-paulina/Zadanie1/assets/79654003/35d85373-e10b-4258-9313-e453e7300941)

