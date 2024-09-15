# React-Native

# Clean Project
npx tsc --noEmit



# Start exisiting project
npm i
npm start -- --clear





# Build - Production
Build both
1. npx eas build
2. ios


# Build pre 
sudo gem install fastlane
 npm install native-notify
npx expo install expo-device expo-notifications expo-constants









# Navigate pages
[Go to Index](src/app/index.tsx)
[Go to Index _layout (START)](src/app/_layout.tsx)
[Go to Home Page](src/app/(tabs)/(home)/(drawer)/home.tsx)
[Go to Home _layout](src/app/(tabs)/(home)/_layout.tsx)
[Go to Tab _layout](src/app/(tabs)/_layout.tsx)
[Go to Home _layout](src/app/(tabs)/(home)/(drawer)/home.tsx)
[Go to Drawer](src/app/(tabs)/(home)/(drawer)/_layout.tsx)





# Build (not correct)

IOS: eas build --platform ios
WEB: npx expo export --platform web
WEB Quick Deploy : https://app.netlify.com/drop






# Post

Install node
Install vs code
Install xcode
Install git


# Setup

1. Run - npx create-expo-app@latest <Name> -t
2. Select - Blank Typecript
3. Open with - code <Name> 
    -- IF Fail:
         1. In VS Open the Command Palette via [ ⌘ ⇧ P ] and type shell command to find the Shell Command:
         2. Use the "Uninstall" 'code' command in the PATH command 
         3. Use "Install" 'code' command in PATH command.
4. cd <Name>
npm start
    -- If Watchman Error
         1. watchman watch-del-all
         2. watchman shutdown-server
5. open 
    Phone - scan QR Code
    IOS - i (may need to try again if emulator is not ready) [error](#booting-simulator)
    Andriod - a 
        



# Adding Git to project
    
    git website - create repo
    
    git add .
    get status
    git commit -m <message>
    git push
    

# Git Tips

git diff - shows changes
Remove Remote : git remote remove origin



# Packages to install

npx expo install expo-font @expo-google-fonts/inter
npx expo install expo-font @expo-google-fonts/poppins
npx expo install expo-font expo-splash-screen
npx expo install expo-router react-native-safe-area-context react-native-screens expo-linking expo-constants expo-status-bar
npx expo install react-native-web react-dom






# React native tips
1. Some things cant be changes on the fly - so click rr (refresh / reload)


# Publish to Google Play store
1. npm install -g eas-cli
1.5 - Create account with expo if you have not already
2. eas login
3. eas build:configure
4. yes
5. eas build -p android --profile preview
6. Install - No
7. eas build 
8. select andriod 
9. go to expo.dev - website - login - download it (Android Play Store build)
10 Google play store - https://play.google.com/console/









# Errors

Packaging
1. Most things are under react native not - 'react-native-gesture-handler';



# Setup ( Fix )
brew update
brew install watchman


// fix  - not confirmed
sudo sysctl -w kern.maxfiles=10485760
sudo sysctl -w kern.maxfilesperproc=1048576


Run npx expo start --reset-cache

# Booting Simulator

// 1. List out devices 
xcrun simctl list devices   

// 2. Grab id and run
xcrun simctl boot "6B322C39-2BEA-4450-A330-29F5ED26F58B"

// 3. open 
npx expo start -c --ios 



# Link

Link will not work without adding asChild


# To remove a header 
TO remove it correctlyly - what every page your in go into it
ex header in /products - go into that folder


# Resources 

Icons -
https://ionic.io/ionicons


# Permissions

sudo chown -R <name>  <fileName> 
sudo chown -R huntley  node_modules 



# Shortcuts


code tips
    rnfes - react native component
    
    console.log("Hello")
    console.warn("fix me if you want")
    console.error("fix me")

Terminal

    r - reset app
    c - clears the screen




