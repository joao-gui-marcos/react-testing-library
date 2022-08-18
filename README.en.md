# Welcome to the testing project repository with the React Testing Library!

### README Translations:

-   [English](/README.en.md)
-   [Portuguese](/README.md)

* * *

## 👨‍💻 What was developed:

-   In this project you developed tests for a React application that is already created and configured, using[`Jest`](https://jestjs.io/)and the library[`React Testing Library`](https://testing-library.com/).
-   The application contains a complete implementation of a simplified Pokédex. For each requirement listed, I wrote tests that ensured its correctness. The tests were tested with Stryker, by creating mutants from code changes.

## Skills used:

-   Use React-Testing-Library selectors (queries) in automated tests;

-   Simulate events with React-Testing-Library in automated tests;

-   Test asynchronous logic flows with the React-Testing-Library;

-   Write tests that allow the refactoring of the application's components structure without having to be changed;

-   Testar inputs.

# requirements

## 1. Test the component`<App.js />`

> Component path:`src/App.js`

-   <details><summary>Teste se o topo da aplicação contém um conjunto fixo de links de navegação:</summary>

    -   The first link must have the text`Home`;

    -   The second link must have the text`About`;

    -   The third link must have the text`Favorite Pokémons`.
        </details>

-   Test if the application is redirected to the homepage, in the URL`/`by clicking on the link`Home`from the navigation bar;

-   Test if the application is redirected to the page of`About`, of EARL`/about`, by clicking on the link`About`from the navigation bar;

-   Test if the application is redirected to the page of`Pokémons Favoritados`, of EARL`/favorites`, by clicking on the link`Favorite Pokémons`from the navigation bar;

-   Test if the application is redirected to the page`Not Found`when entering an unknown URL.

<details>
  <summary><strong>O que será verificado</strong></summary><br />

-   It will be evaluated if the test file`App.test.js`covers 100% of the use cases created by Stryker:
        * É exibido na tela um `link` com o texto `Home`
        * É exibido na tela um `link` com o texto `About`
        * É exibido na tela um `link` com o texto `Favorite Pokémons`
    </details>

* * *

## 2. Test the component`<About.js />.`

> Component path:`src/pages/About.js`

-   Test if the page contains information about the Pokédex;

-   Test if the page contains a heading`h2`with the text`About Pokédex`;

-   Test if the page contains two paragraphs of text about the Pokédex;

-   Test if the page contains the following image of a Pokédex:`https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png`.

    <details>
    <summary><strong>O que será verificado</strong></summary><br />


-   It will be evaluated if the test file`About.test.js`covers 100% of the use cases created by Stryker:
    -   A screen is displayed`h2`with text`About Pokédex`
    -   the attribute`src`of the image is`https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png`
        </details>

* * *

## 3. Test the component`<FavoritePokemons.js />`

> Component path:`src/pages/FavoritePokemons.js`

-   Test if the message appears on the screen`No favorite pokemon found`, in case the person doesn't have favorite pokemons;

-   Test if all favorite Pokemon cards are displayed.

    <details>
    <summary><strong>O que será verificado</strong></summary><br />


-   It will be evaluated if the test file`FavoritePokemons.test.js`covers 100% of the use cases created by Stryker:
    -   The message appears on the screen`No favorite pokemon found`
        </details>

* * *

## 4. Test the component`<NotFound.js />`

> Component path:`src/pages/NotFound.js`

-   Test if the page contains a heading`h2`with the text`Page requested not found`;

-   Test if the page shows the image`https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif`.

    <details>
    <summary><strong>O que será verificado</strong></summary><br />


-   It will be evaluated if the test file`NotFound.test.js`covers 100% of the use cases created by Stryker:
    -   A screen is displayed`h2`with the text`Page requested not found`
    -   There is an image with the`src``https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif`
        </details>

* * *

## 5. Test the component`<Pokedex.js />`

> Component path:`src/pages/Pokedex.js`

-   Test if the page contains a heading`h2`with the text`Encountered pokémons`;

-   <details><summary>Teste se é exibido o próximo pokémon da lista quando o botão <code>Próximo pokémon</code> é clicado:</summary>

    -   The button must contain the text`Próximo pokémon`;

    -   The next Pokemon in the list must be shown, one by one, by successively clicking on the button;

    -   The first pokémon in the list should be shown when clicking the button, if it is in the last pokémon in the list.
        </details>

-   Test if only one pokemon is shown at a time;

-   <details><summary>Teste se a Pokédex tem os botões de filtro:</summary>

    -   There must be a filter button for each type of pokémon, without repetition;
        -   _obs: Buttons must be captured by the`data-testid=pokemon-type-button`_

    -   Once a type button is selected, the Pokédex must circulate only for pokemons of that type;

    -   The button text must match the`nome do tipo`, ex.`Psychic`;

    -   The button`All`need to be**always**visible.
        </details>

-   <details><summary>Teste se a Pokédex contém um botão para resetar o filtro:</summary>

    -   The button text must be`All`;

    -   The Pokedex should show pokemons normally (without filters) when the button`All`is clicked;

    -   When loading the page, the selected filter should be`All`.</detail>

    <details>
    <summary><strong>O que será verificado</strong></summary><br />


-   It will be evaluated if the test file`Pokedex.test.js`covers 100% of the use cases created by Stryker:
    -   Type filter buttons have the correct name
    -   The type filter buttons have the`data-testid=pokemon-type-button`except the button`All`
    -   You can click the filter button`All`
        </details>

* * *

## 6. Test the component`<Pokemon.js />`

> Component path:`src/components/Pokemon.js`

-   <details><summary>Teste se é renderizado um card com as informações de determinado pokémon:</summary>

    -   The correct pokemon name should be shown on the screen;

    -   The correct type of pokemon must be shown on the screen;

    -   The average pokemon weight should be displayed with a text in the format`Average weight: <value> <measurementUnit>`; Where`<value>`e`<measurementUnit>`are, respectively, the average weight of the pokémon and its unit of measurement;

    -   The pokemon image should be displayed. It must contain an attribute`src`with the image URL and an attribute`alt`with the text`<name> sprite`, Where`<name>`It's the Pokemon's name.
        </details>

-   Test if the pokémon card listed in the Pokédex contains a navigation link to view details for that pokémon. The link must have the URL`/pokemons/<id>`, Where`<id>`is the displayed pokemon id;

-   Test if clicking on the pokémon navigation link redirects the application to the pokémon details page;

-   Also test if the URL displayed in the browser changes to`/pokemon/<id>`, Where`<id>`is the id of the pokemon whose details you want to see;

-   <details><summary>Teste se existe um ícone de estrela nos pokémons favoritados:</summary>

    -   The icon must be an image with the attribute`src`containing the path`/star-icon.svg`;

    -   The image must have the attribute`alt`equal to`<pokemon> is marked as favorite`, Where`<pokemon>`is the name of the displayed pokemon.
        </details>

    <details>
    <summary><strong>O que será verificado</strong></summary><br />


-   It will be evaluated if the test file`Pokemon.test.js`covers 100% of the use cases created by Stryker:
    -   The pokemon image has the`src`correct
    -   The pokemon image has the`alt``<name> sprite`
    -   The favorite image :star: has the`src``/star-icon.svg`
    -   The favorite image :star: has the`alt``<name> is marked as favorite`
    -   A text with the type of pokemon is displayed on the screen
    -   A screen is displayed`link`as`href``/pokemons/<id>`
        </details>

* * *

## 7. Test the component`<PokemonDetails.js />`

> Component path:`src/pages/PokemonDetails.js`

-   <details><summary>Teste se as informações detalhadas do pokémon selecionado são mostradas na tela:</summary>

    -   The page must contain text`<name> Details`, Where`<name>`is the name of the pokemon;

    -   **No**there must be a navigation link to the details of the selected pokémon;

    -   The details section must contain a heading`h2`with the text`Summary`;

    -   The details section should contain a paragraph with the summary of the specific pokemon being viewed.
            - _obs: é possível utilizar regex para capturar o parágrafo_
        </details>

-   <details><summary>Teste se existe na página uma seção com os mapas contendo as localizações do pokémon:</summary>

    -   In the details section there should be a heading`h2`with the text`Game Locations of <name>`; Where`<name>`is the name of the displayed pokemon;

    -   All pokemon locations should be shown in the details section;

    -   The location name and a map image should be displayed at each location;

    -   The location image must have an attribute`src`with the URL of the location;

    -   The location image must have an attribute`alt`with the text`<name> location`, Where`<name>`It's the Pokemon's name.
        </details>

-   <details><summary>Teste se o usuário pode favoritar um pokémon através da página de detalhes:</summary>

    -   The page should display a`checkbox`that allows to favorite or pokémon;

    -   Alternate clicks on`checkbox`they must respectively add and remove the pokémon from the favorites list;

    -   O`label`do`checkbox`must contain the text`Pokémon favoritado?`.
        </details>

    <details>
    <summary><strong>O que será verificado</strong></summary><br />


-   It will be evaluated if the test file`PokemonDetails.test.js`covers 100% of the use cases created by Stryker:
    -   A screen is displayed`h2`with the text`<name> Details`
    -   A screen is displayed`h2`with the text`Summary`
    -   A text containing`<summary>`
    -   A screen is displayed`h2`with the text`Game Locations of <name>`
    -   Location images are displayed on the screen with the`src`correct
    -   A screen is displayed`label`with the text`Pokémon favoritado?`
        </details>

* * *

# non-evaluative requirements

What we have below are not bonus requirements - they are ideas for you to delve deeper into the project and**learn more!**How about working on them? We start with something very straightforward:

  <details>
  <summary><strong>A cobertura de testes deve ser 100%</strong></summary>

-   To see the test coverage, run the command in the terminal`npm run test-coverage`.
    </details>

Furthermore, the Pokédex is a static application, with its pre-defined data. Using the[PokéAPI](https://pokeapi.co/), you can make it more dynamic and realistic.

Implement the proposed requirements below and write tests for them. Always try to keep test coverage at 100%, thus ensuring that there is no untested code or logic flows. For an added challenge, try using TDD - write tests as you implement requirements.

-   <details><summary>Adicione uma rota para exibir uma lista de localizações</summary>

    -   The route URL must be`/locations`;

    -   The page should display a list of locations returned by the PokéAPI. You can read[here](https://pokeapi.co/docs/v2#resource-lists-section)e[here](https://pokeapi.co/docs/v2#locations-section)how to use the PokéAPI to fetch a list of locations.
        </details>

-   <details><summary>Adicione na barra de navegação um link para a lista de localizações</summary>

    -   The link must contain the text`Locations`;

    -   When clicking on the link, the page with the list of locations should be displayed.
        </details>

-   <details><summary>Adicione botões de paginação na lista de localizações.</summary>

    By default, the_endpoints_from the PokéAPI return a maximum of 20 results. Using the parameters`limit`e`offset`, you can specify which page you want to fetch and what size it is. Look[here](https://pokeapi.co/docs/v2#resource-lists-section)how to use these parameters.

    -   Add two "Previous" and "Next" buttons that allow you to navigate between the locations list pages;

    -   On the first page, the "Back" button should be disabled. Likewise, when reaching the last page, the "Next" button should be disabled.
        </details>

-   <details><summary>Adiciona uma rota para exibir uma lista de gerações.</summary>

    -   The route URL must be`/generations`;

    -   The page should display a list of generations returned by the PokéAPI. You can read[here](https://pokeapi.co/docs/v2#resource-lists-section)e[here](https://pokeapi.co/docs/v2#generations)how to use the PokéAPI to fetch a list of generations.
        </details>

-   <details><summary>Adicione na barra de navegação um link para a lista de gerações</summary>

    -   The link must contain the text`Generations`;

    -   When clicking on the link, the page with the list of generations should be displayed.
        </details>

-   <details><summary>Adicione uma rota para exibir informações sobre uma geração</summary>

    -   The route URL must be`/generations/<id>`, Where`<id>`is the id of the displayed generation;

    -   The page should display, after searching the PokéAPI, the name of the generation and a list with the names of the pokémons introduced in this generation.
        </details>

-   <details><summary>Adicione a cada geração na lista de gerações um link para a página de detalhes desta geração</summary>

    -   When clicking on the link, the page with information about the clicked generation should be displayed.
        </details>

* * *
