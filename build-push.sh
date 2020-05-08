. "./_Set_Google_Cluster.sh"
docker build . -t us.gcr.io/${CLUSTER}/boilerplate $1
gcloud docker -- push us.gcr.io/${CLUSTER}/boilerplate