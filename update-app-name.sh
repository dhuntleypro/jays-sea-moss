
#!/bin/bash

read -p "Enter the new app name: " newAppName

# Get the root folder name
rootFolderName=$(basename "$PWD")
newAppNameSlug=$(echo "${rootFolderName// /-}" | tr '[:upper:]' '[:lower:]')
newAppNameScheme=$(echo "${rootFolderName//[ -]/}" | tr '[:upper:]' '[:lower:]')

# Path to package.json
packageJsonFile="./package.json"
appJsonFile="./app.json" # Path to app.json

#-------------------------
# Edit
#-------------------------

# 1. Edit Name
jq --arg name "$newAppName" '.expo.name = $name' "$appJsonFile" > tmp.$$.json && mv tmp.$$.json "$appJsonFile"

# 2. Edit CFBundleDisplayName
jq --arg CFBundleDisplayName "$newAppName" '.expo.ios.infoPlist.CFBundleDisplayName = $CFBundleDisplayName' "$appJsonFile" > tmp.$$.json && mv tmp.$$.json "$appJsonFile"

# 3. Edit Slug
jq --arg slug "$newAppNameSlug" '.expo.slug = $slug' "$appJsonFile" > tmp.$$.json && mv tmp.$$.json "$appJsonFile"

# 4. Edit Scheme
jq --arg scheme "$newAppNameScheme" '.expo.scheme = $scheme' "$appJsonFile" > tmp.$$.json && mv tmp.$$.json "$appJsonFile"

# 5. Edit bundleIdentifier
jq --arg scheme "$newAppNameScheme" '.expo.ios.bundleIdentifier = "com.dhuntleyinc.\($scheme)"' "$appJsonFile" > tmp.$$.json && mv tmp.$$.json "$appJsonFile"

# 6. Edit Use jq to update the "name" field in package.json
if command -v jq &> /dev/null; then
  # Update the "name" field to the root folder name
  jq --arg name "$rootFolderName" '.name = $name' "$packageJsonFile" > tmp.$$.json && mv tmp.$$.json "$packageJsonFile"

  echo "The 'name and slug' field in package.json has been set to '$rootFolderName'."
else
  echo "Warning: jq is not installed. Please install jq to update package.json."
fi

# 7. Delete "projectId" key in app.json using jq, if jq is installed
if command -v jq &> /dev/null; then
  jq 'del(.expo.extra.eas.projectId)' "$file2" > tmp.$$.json && mv tmp.$$.json "$file2"
  echo "The 'projectId' field has been removed from 'extra.eas' in $file2."
else
  echo "Warning: jq is not installed. Please install jq to remove 'projectId' from app.json."
fi



# 8. Update package name
echo "Updated !!"