### Run Locally 
`npm install`

`npm run start`

### Docker
`docker build .`

will output a hash like so > `Successfully built aa3c5c583ccd`

`docker run -it -p 3000:3000 aa3c5c583ccd`

### Deploy to GCloud

`./build-push.sh`

`cd k8s`

`kubectl create -f services.yaml`

`kubectl create -f VolumeClaim.yaml`

`kubectl create -f app.yaml`