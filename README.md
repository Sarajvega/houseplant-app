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
Execute [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) with [npm](https://docs.npmjs.com/cli/init) or [Yarn](https://yarnpkg.com/lang/en/docs/cli/create/) to bootstrap the example:

```bash
npx create-next-app --example progressive-web-app progressive-web-app
# or
yarn create next-app --example progressive-web-app progressive-web-app
```

## Lessons learned

What was your motivation?
Why did you build this project?
What problem does it solve?
What did you learn?
What makes your project stand out? If your project has a lot of features, consider adding a "Features" section and listing them here.

## Contributing
For changes, please open an issue first to discuss what you would like to change.





