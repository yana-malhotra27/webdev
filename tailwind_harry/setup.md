## how to setup tailwind css ##
1:
```
npm install -D tailwind css
npx install -D tailwindcss@3 postcss autoprefixer
npx tailwindcss init
```
2:update tailwind.conf.js file to include this line
```
content: ["*.html"],
```
3: create src/input.css to include:
```
@tailwind base;
@tailwind components;
@tailwind utilities;
```
4: create src/output.css

5: in package.json file in script under text add:
```
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "build": "npx tailwindcss -i ./src/input.css -o ./src/output.css --watch"
  },
```
then run:
```
npm run build
```

or

5: run
```
npx tailwindcss -i ./src/input.css -o ./src/output.css --watch
```
