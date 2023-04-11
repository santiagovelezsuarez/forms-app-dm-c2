import React, {useState} from 'react';
import { UserForm } from "./src/components/UserForm";
import { User } from "./src/components/User";
import { Pressable, SafeAreaView, StyleSheet, Text, Modal, FlatList } from 'react-native';

export default function App(){
    const [modalVisible, setModalVisible] = useState(false);
    const [modalVisible2, setModalVisible2] = useState(false);
    const [users, setUsers] = useState([{ 
                                            id: 1,
                                            name: "Santiago Velez S",
                                            email: "santiago.velezs@autonoma.edu.co",
                                            movil: "300 000 0000",
                                            regDate: new Date("2021-01-01"),
                                            msg: "Hola, lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vel tincidunt lacinia, nunc nisl aliquam nisl, eget aliquam nunc nisl eget nisl. Sed euismod, nunc vel tincidunt lacinia, nunc nisl aliquam nisl, eget aliquam nunc nisl eget nisl."            
                                        }]);
    const [user, setUser] = useState({});   
    
    const editUser = (id) => {
        const user = users.find((user) => user.id === id);
        setUser(user);
        setModalVisible(true);
    } 
    
    const deleteUser = (id) => {
        const newUsers = users.filter((user) => user.id !== id);
        setUsers(newUsers);
    }
    
    return(
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>
                Registrate en la {""}
                <Text style={styles.titleBold}>UAM</Text>
            </Text>            

            <Pressable onPress={() => setModalVisible(true)} style={styles.btnNewUser}>
                <Text style={styles.titleButton} hoverStyle={styles.hoverStyle}>Nuevo Usuario</Text>
            </Pressable>

            <Modal animationType="slide" visible={modalVisible}>
                <UserForm  
                    modalVisible={modalVisible} 
                    setModalVisible={setModalVisible} 
                    users={users} 
                    setUsers={setUsers}
                    user={user}
                />
            </Modal>            

            <Pressable onPress={() => setModalVisible2(true)} style={styles.btnNewUser}>
                <Text style={styles.titleButton} hoverStyle={styles.hoverStyle}></Text>
            </Pressable>            

            <Modal animationType="slide" visible={modalVisible2}>               
                <Pressable onPress={() => setModalVisible2(false)} style={styles.btnX}><Text>X</Text></Pressable>
                <Text>Desde modal</Text>
            </Modal>

            {users.length === 0 ? 
                <Text style={styles.titleUsers}>No hay usuarios registrados.</Text> : 
                <FlatList
                    style={styles.userList} 
                    data={users} 
                    keyExtractor={(item) => item.id}
                    renderItem={({item})=>{
                    return(
                        <User 
                            item={item}
                            setModalUserForm={setModalVisible}
                            editUser={editUser}
                            deleteUser={deleteUser}
                        >                            
                        </User>
                    )
                }}>
                </FlatList>
            }

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#0069A3",
        marginTop: 0,
        flex: 1,
    },
    title: {
        textAlign:"center",
        fontSize: 22,
        color: "#FFFFFF"
    },
    titleUsers: {
        textAlign:"center",
        fontSize: 22,
        color: "#FFFFFF",
        marginTop: 30,
    },
    titleBold: {
        fontWeight: "900",
        color: "#f4d73b",
    },
    btnNewUser: {
        backgroundColor: "#f4d73b",
        padding: 10,
        marginTop: 30,
        marginHorizontal: 20,
        borderRadius: 10,
    },   
    titleButton: {
        textAlign: "center",
        fontSize: 20,
        color: "#000",        
    },
    btnX: {
        backgroundColor: "#f4d73b",
        padding: 10,
        marginTop: 30,
        marginHorizontal: 20,
        borderRadius: 10,
        position: "absolute",
        top: 0,
        right: 0,
    },
    userList: {
        marginTop: 50,
        marginHorizontal: 30,
    },
});