# Express API Template

## About 
A starter template for Express and Node.js API server w/ Typescript

After copying this template, feel free to make use of the Github actions
files found in the the `.github/workflows` folder. 

If working with non .ts, .js files, you may want to take a look at the `scripts/copyAssets` script to help
you create your distribution bundle.

### Built With
- Typescript
- Node

## API Documentation

### GET `/status` (check status of the server)

Response:
```
OK
```

## Developer Guide

### Getting Started 
1) Clone this repository
```
git clone https://github.com/chumnend/xchumz-auth.git
```

2) Install dependencies 
```
npm install
```

3) Install git hooks
```
npx husky install
```

4) Make a copy of `.env.example` and fill in fields
```
cp .env.example .env
```

```
# EXAMPLE

# node environment setting ie. 'development', 'production', etc
NODE_ENV=development

# node server port ie. 3000
PORT=3000

...
```

5) Start the development server
```
npm run dev
```

### Other Useful Commands
Run production build of the server
```
npm start
```

Run unit tests
```
npm test
```

Check code style
```
npm run lint
```

Format code to match style rules
```
npm run lint:fix
```

### Deployment
This project is not deployed.

## Contact
Nicholas Chumney - nicholas.chumney@outlook.com
