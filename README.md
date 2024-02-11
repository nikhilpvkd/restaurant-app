# Restaurant application

This is a restaurent application working model build in react framework

## Install

    npm install

## Run the app

    npm run dev

## Folder structure

    |-public
    |-src
        |-assets
            |-css
                |-nunito.css     // imported font css file
            |-fonts
                    // containes font files
            |-icons
                |-veg.jsx       // dynamic icon for veg and non-veg dish indication
        |-components            // various re-usable components
            |-DishCard.jsx
            |-Header.jsx
            |-Tabs.js
        |-features
            |-api
                |-api.js      // api instance used for api fetching using rtk query mechanism
            |-orderSlice.js   // redux slice for managing order related states and actions
        |-pages               // pages created
            |-Dishes.jsx
        |-store
            |-store.js
        |-App.jsx
        |-index.css
        |-main.jsx
    |-index.html
    |-package-lock.json
    |-package.json

## packages installed

---

A list of technologies used within the project:

-   [redux-toolkit](https://redux-toolkit.js.org/)
-   [styled-components](https://styled-components.com/)
