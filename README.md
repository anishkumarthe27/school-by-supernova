# SchoolERP Pro – Dashboard

React dashboard for SchoolERP Pro (Create React App).

## Hosting on GitHub Pages (free)

This app is **static** (HTML/CSS/JS after build). You can host it for free on GitHub Pages.

1. Push this repo to GitHub (any repo name, e.g. `dashboard` or `school-erp`).
2. In the repo: **Settings → Pages** (left sidebar).
3. Under **Build and deployment**, set **Source** to **GitHub Actions** (not "Deploy from a branch").
4. Save. On every push to `main` (or `master`), the workflow builds the app and deploys it.
5. Live URL: `https://<your-username>.github.io/<repo-name>/`  
   Example: `https://anishkumarthe27.github.io/school-by-supernova/`

No need to commit the `build` folder or run `npm run build` locally; the GitHub Action does it.

### If you see this README on your live URL instead of the app

Your site is still serving the **repository** (e.g. README), not the **built React app**. Fix it:

1. Open your repo on GitHub → **Settings** → **Pages**.
2. Under **Build and deployment**, find **Source**.
3. Change it from **"Deploy from a branch"** to **"GitHub Actions"**.
4. Save. Re-run the latest workflow: **Actions** tab → **Deploy to GitHub Pages** → **Run workflow** (or push a small commit).
5. Wait 1–2 minutes, then open your site again. You should see the SchoolERP Pro dashboard (top bar, sidebar, role selector), not this README.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
