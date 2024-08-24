import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
// import SettingsPageWeb from '@/components/pages/settings/SettingsPage.web'
import SettingsPage from '@/components/TestViews/AccountPage'
import SettingsPageWeb from '@/components/pages/settings/SettingsPage.web'

const settings = () => {
  return (
    // If different from normal settings page - use .web
    // <SettingsPageWeb />

    <SettingsPage />
  )
}

export default settings

const styles = StyleSheet.create({})





// // If mobile and web is different

// // Make sure to also create the folder in components

// export {default} from '@/components/pages/settings/SettingsPage' 