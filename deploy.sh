echo "Switching to branch master"
git checkout master

echo "Building app..."
npm run build

echo "Deploying files to server..."
scp -r build/* umut@172.104.145.104:/var/www/missingpaw.ch/

echo "Deployed successfully!"
