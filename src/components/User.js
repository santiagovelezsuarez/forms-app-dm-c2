import React from 'react'
import { StyleSheet, View, Text, ScrollView, TouchableOpacity } from 'react-native';

export const User = ({item, setModalUserForm, editUser, deleteUser }) => {
    const {name, regDate, id} = item;
    const dateFormated = (date) => {
        const newDate = new Date(date);
        const optionsFormated = {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        };
        return newDate.toLocaleDateString('es-ES', optionsFormated);
    }
    console.log("item: ",item);
    return (
        <ScrollView>
            <View style={styles.content}>
                <Text style={styles.label}>Estudiante</Text>
                <Text style={styles.text}>{name}</Text>                
                <Text style={styles.dateFormated}>{dateFormated(regDate)}</Text>     
                <View style={styles.buttons}>
                    <TouchableOpacity 
                        style={[styles.btn, styles.btnEdit]}
                        onPress={() => {
                            setModalUserForm(true)
                            editUser(id)                            
                        }}
                    >
                        <Text style={styles.buttonText}>Editar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        style={[styles.btn, styles.btnDeleteOne]}
                        onPress={() => {
                            deleteUser(id)
                        }}
                    >
                        <Text style={styles.buttonTextX}>Eliminar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    content: {
        alignItems: "center",
        borderRadius: 5,
        marginVertical: 10, 
        paddingHorizontal: 20, 
        paddingVertical: 10,
        backgroundColor: "rgba(0, 0, 0, 0.3)",
    },
    label: {
        color: "#fff",
        textTransform: "uppercase",
        fontWeight: "700",
        marginBottom: 10,
    },
    text: {
        color: "#CCCCCC",
        fontSize: 20,
        fontWeight: "700",
        marginBottom: 10,
    },
    dateFormated: {
        color: "#CCCCCC",
    },
    buttons: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 20,
    },
    btn: {
        paddingVertical: 5,
        paddingHorizontal: 20,
        borderRadius: 5,
        marginHorizontal: 5,
    },
    btnEdit: {
        backgroundColor: "#CCCCCC"
    },
    btnDeleteOne: {
        backgroundColor: "rgba(255, 80, 80, 0.7)"
    },
    buttonText: {
        textTransform: "uppercase",
        fontWeight: "800",
        fontSize: 12,
        color: "#222222",
    },
    buttonTextX: {
        textTransform: "uppercase",
        fontWeight: "800",
        fontSize: 12,
        color: "#000000",
    },
})