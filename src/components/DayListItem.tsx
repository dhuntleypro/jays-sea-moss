import { StyleSheet, Text, View, Pressable } from 'react-native'
import { Link } from 'expo-router'

type DayListItem = {
    day: number
}


export default function DayListItem(props : DayListItem) {
    return (
        <Link href={'/settings'} asChild>
            <Pressable style={styles.box}>
                <Text style={styles.text}>{props.day}</Text>
            </Pressable>
        </Link>
    )
}

const styles = StyleSheet.create({
    box: {
      backgroundColor: '#F9EDE3',
      flex: 1, // Instead of using width  - flex uses avaliable space
      aspectRatio: 1 , // height: 1 - square , 1/2 - rectangle
      borderWidth: StyleSheet.hairlineWidth, // thinest width
      borderColor: '#9B4521',
      borderRadius: 20,
  
  
      justifyContent: 'center', // center vertically
      alignItems: 'center' // center horizontally
    },
    text: {
      color: '#9B4521',
      fontSize: 40,
      fontFamily: 'poppinsFont' //'interFont'
    }
  });
  