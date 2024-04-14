# https://learn.microsoft.com/en-us/azure/container-instances/container-instances-github-action?tabs=userlevel

RESOURCE_GROUP_NAME=rg-dfberry-cloud-basic
SUBSCRIPTION_NAME="Visual Studio Enterprise Subscription"

groupId=$(az group show --subscription "$SUBSCRIPTION_NAME" --name "$RESOURCE_GROUP_NAME" --query id --output tsv)

echo $groupId

az ad sp create-for-rbac \
  --scope $groupId \
  --role Contributor \
  --json-auth