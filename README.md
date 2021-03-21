# Laravel@Vue SPA Boilerplate

HAHAHA

## Prerequisites
Siguraduhin mo muna na dapat nakainstall ang mga sumusunod na packages sa iyong sistema, kung hindi baka kung anong komplikasyon ang mangyari sa ating pagsisimula.

- PHP 7.4 + MySQL
- Composer
- Node.js
- Docker (optional)

## Installation
Kung magsisimula ka pa lang gamitin ang templayte na ito, dapat mong siguraduhin na naipatupad mo ang mga sumusunod na utos na ito:

Sa loob ng `./client` dapat mong ipatupad ang utos: `npm install` 
at sa direktoryong `./server` naman ipatupad mo ang `composer install`

Pagkatapos mong maipatupad ang mga utos na ito sa mga nabangit na direktoryo, lahat ng mga dependencies na kung saan dumidepende ang ating templayte ay makukuha.

## Post-Installation
Para sa huli nating pagsasaayos ng ating templayte, siguraduhin mo na dapat naigawa mo ito sa loob ng mga nabanggit na direktoryo (`./client`, `./server`) ang instruksyon na ito.

**Sa loob ng `./client`:**

**(1)** Palitan ang pangalan ng payl `.env.example` na maging `.env` at ilagay ang mga sumusunod ng konpigurasyon depende sa iyong sistema:

```
VUE_APP_AXIOS_API_BASE_URL=     # The [host/url]:port where your Laravel is listening
                                # (e.g. http://localhost:3000).
```

Kung meron ka pang pangalan na nais ilagay sa loob ng iyong `.env` (for example: API or SECRET key) dapat mo itong lagyan ng `VUE_APP_` sa unahan ng pangalan (e.g. `VUE_APP_(name)`).

**Sa loob ng `./server`:**
Para naman sa ating server direktory ng ating templayte, halos magkaparehas lang naman sa **(1)** ang pamamaraan ng pag popost-install kay `./server`.

Palitan ang sumusunod na makakalikasang baryabol sa loob ng kinopyang `.env`:

```
SANCTUM_STATEFUL_DOMAINS=               # Yung host:port na kung saan nakikinig ang ating
                                        # Vue application. (e.g. localhost:8080).
DB_CONNECTION=
DB_HOST=
DB_PORT=
DB_DATABASE=
DB_USERNAME=
DB_PASSWORD=
```

Pagkatapos, ipatupad mo ang utos `php artisan key:generate --ansi` para gumawa ang Laravel ng bagong susi para sa ating app. Ipatupad mo rin ang command na `php artisan migrate`, para ma imigrate ng Laravel ang migration ng ating templayte.

**To create a dummy user just open `php artisan tinker` and type the code below into our Tinker interpreter:**

```
App\Models\User::factory()->create([
    'email' => 'admin@mitsi.digital',
    'password' => bcrypt('admin')
]);
```

## Run
Execute the following command in a separate instance of a terminal to start the application;

In `./client`: `npm run serve`
In `./server`: `php artisan serve` 

After executing the above command, open up a web browser and then navigate to where our Vue application is listening.
**Done :)**

## Packages@Plugins
In `./client/package.json`:
```
"dependencies": {
    "axios": "^0.21.1",
    "core-js": "^3.6.5",
    "vue": "^2.6.11",
    "vue-class-component": "^7.2.3",
    "vue-property-decorator": "^9.1.2",
    "vue-router": "^3.2.0",
    "vue-router-layout": "^0.1.6",
    "vuetify": "^2.4.0",
    "vuex": "^3.6.2",
    "vuex-module-decorators": "^1.0.1"
},
```

In `./server/composer.json`:
```
"require": {
    "php": "^7.3|^8.0",
    "fideloper/proxy": "^4.4",
    "fruitcake/laravel-cors": "^2.0",
    "guzzlehttp/guzzle": "^7.0.1",
    "laravel/framework": "^8.12",
    "laravel/sanctum": "^2.9",
    "laravel/tinker": "^2.5"
},
```