import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ClientOrdersView from '@/components/pages/client-order/ClientOrdersView'
// import NoOrdersView from '@/components/pages/client-order/NoOrdersView' // Assuming this is the correct import path
import { useClientOrder } from '@/contexts/OrderContext';
import NoOrdersView from '@/components/pages/client-order/ClientNoOrdersView';

const ClientOrdersPage = () => {
    const { orders, selectOrder } = useClientOrder();

    return (
        <View style={styles.container}>
            {orders.length < 1 ? (
                <NoOrdersView />
            ) : (
                <ClientOrdersView />
            )}
        </View>
    );
}

export default ClientOrdersPage

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff', // You can change this color based on your theme
    },
});
