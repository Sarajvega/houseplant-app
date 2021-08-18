<div style="text-align:center"><img src="https://github.com/Sarajvega/houseplant-app/assets/header.png" /></div><br>

# houseplant-app

houseplant-app is a progressive web app that helps the novice horticulturalist identify their first house plants with machine learning!

[Deployed Version](https://houseplant-app-4fjtk0ich-sarajvega.vercel.app/)

## How it works
houseplant-app is a [progressive web app](https://dev.to/milindsoorya/make-your-website-pwa-compatible-next-js-part-1-2ccj) built with Next.js. Utilizing a tensorflow model assembled with user-friendly [Lobe](lobe.ai), a [base64](https://en.wikipedia.org/wiki/Base64) version of the image captured with your webcam or mobile device's camera is passed to a [prediction service](https://github.com/Sarajvega/plant-prediction-service), which returns an id. The id is then used to dynamically load a page containing information about your plant.

## Technologies
- [React](https://reactjs.org/)
- [Next.js](https://nextjs.org/)
- [PWA](https://web.dev/progressive-web-apps/)
- [react-webcam](https://github.com/mozmorris/react-webcam)
- [Firebase](https://firebase.google.com/)

## Usage

Without Docker
1. Git clone repo
2. Cd into repo
3. Install dependencies with `$ yarn`
4. Start server with `$ yarn dev`
5. Open http://localhost:3000/ in your browser to see application. 

With Docker
1. Git clone repo
2. Cd into repo
3. Build image upon which the container is built
```zsh
docker build -t ps-container:dev .
```

4. confirm image exists
```zsh
docker image ls
```

5. Run command to create and run container
```zsh
docker run -it --rm \
-v ${PWD}:/app \
-v /app/node_modules \
-p 3001:3000 \
-e CHOKIDAR_USEPOLLING=true \
ps-container:dev
```
Note: This code 1. it starts the container in interactive mode. 2. -rm removes the container and volumes after the container exits. 3. v ${PWD}:/app mounts the code into the container at /app.

## Lessons learned

What was your motivation?
Why did you build this project?
What problem does it solve?
What did you learn?
What makes your project stand out? If your project has a lot of features, consider adding a "Features" section and listing them here.

## Contributing
For changes, please open an issue first to discuss what you would like to change.





