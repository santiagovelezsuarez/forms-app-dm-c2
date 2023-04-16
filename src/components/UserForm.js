import React, {useState, useEffect} from 'react'
import { Image, Modal, Alert, ImageBackground, StyleSheet, Text, TextInput, View, ScrollView, Pressable, TouchableOpacity } from 'react-native'
import DatePicker from 'react-native-date-picker'
const image = require('../assets/dev2.jpg')
const logo = require('../assets/uam.png')

export const UserForm = ({modalVisible, setModalVisible, users, setUsers, user, setUser}) => {  
      
    const [open, setOpen] = useState(false)
    const [regDateLabel, setRegDateLabel] = useState("Fecha de inscripción")

    const [id, setId] = useState()
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [movil, setMovil] = useState("")
    const [regDate, setRegDate] = useState(new Date())
    const [msg, setMsg] = useState("") 
    
    useEffect(() => {
        if (Object.keys(user).length > 0) {          
          setId(user.id)
          setName(user.name)
          setEmail(user.email)
          setMovil(user.movil)          
          setRegDate(user.regDate)
          setMsg(user.msg)
          setRegDateLabel("Fecha Inscripción: "+regDate.getDate()+"/"+(regDate.getMonth()+1)+"/"+regDate.getFullYear());
        }
    }, [user]);
    
    const handleNewUser = (event) => {      
        if([name, email, movil, msg].includes('')){
          Alert.alert('Warning', 'Por favor, llena todos los campos', [
            {text: 'Aceptar', onPress: () => console.log('OK Pressed')},
          ]);
          return;     
        }
        
        if(id){
            user.id = id
            user.name = name
            user.email = email
            user.movil = movil
            user.regDate = regDate
            user.msg = msg            
            setModalVisible(false)
            Alert.alert('Ok', 'Estudiante editado', [
                {text: 'Aceptar', onPress: () => console.log('OK Pressed')},
            ])
            user = {}
            return
        }
        else{
            const newUser = {            
                name: name,
                email: email,
                movil: movil,
                regDate: regDate,
                msg: msg            
            }
            newUser.id = users.length + 1 
        }       
        
        setUsers([...users, newUser])
        setModalVisible(false)
        Alert.alert('Ok', 'Estudiante registrado', [
            {text: 'Aceptar', onPress: () => console.log('OK Pressed')},
        ])
    }
    return(        
            <ImageBackground 
                style={styles.backCover}
                source={image}>
                <Pressable onPress={() => {setModalVisible(false); setUser({})}} style={styles.btnNewUser}>
                    <Image source={logo} style={styles.image}/>
                </Pressable>                
                <ScrollView>
                    <Text style={styles.title}>
                        Inscripción {""}
                        <Text style={styles.titleBold}>Vacaciones UAM</Text>
                    </Text>
                    <View style={styles.campo}>
                        {/* <Text style={styles.text}></Text> */}
                        <TextInput 
                            style={styles.input} 
                            placeholder="Nombre completo"
                            placeholderTextColor={"#F8F9F9"}
                            onChangeText={setName}
                            value={name}/>
                    </View>
                    <View style={styles.campo}>
                        {/* <Text style={styles.text}></Text> */}
                        <TextInput 
                            style={styles.input} 
                            placeholder="@autonoma.edu.co"
                            placeholderTextColor={"#F8F9F9"}
                            keyboardType="email-address"
                            onChangeText={setEmail}
                            value={email}/>
                    </View>
                    <View style={styles.campo}>
                        {/* <Text style={styles.text}></Text> */}
                        <TextInput 
                            style={styles.input} 
                            placeholder="Celular"
                            placeholderTextColor={"#F8F9F9"}
                            keyboardType="phone-pad"
                            onChangeText={setMovil}
                            value={movil}/>
                    </View>
                    <View style={styles.campo}>                                                
                        <TouchableOpacity onPress={() => setOpen(true)}>
                            <Text style={styles.input}>
                                {regDateLabel}
                            </Text>
                        </TouchableOpacity>                         
                        <DatePicker
                            modal
                            open={open}
                            date={regDate}
                            mode="date"
                            onConfirm={date => {
                                setRegDate(date);
                                setOpen(false);
                                setRegDateLabel("Fecha Inscripción: "+date.getDate()+"/"+(date.getMonth()+1)+"/"+date.getFullYear());
                            }}
                            onCancel={() => setOpen(false)}
                        />
                    </View>
                    <View style={styles.campo}>
                        {/* <Text style={styles.text}></Text> */}
                        <TextInput 
                            multiline={true}
                            numberOfLines={4}
                            style={styles.input} 
                            placeholder="Dejanos un mensaje"
                            placeholderTextColor={"#F8F9F9"}
                            keyboardType="phone-pad"
                            onChangeText={setMsg}
                            value={msg}/>
                    </View>
                    <Pressable            
                        onPress={(e) => handleNewUser(e)}
                        style={styles.btnAdd}>
                        <Text style={styles.textStyle}>Aceptar</Text>
                    </Pressable>
                </ScrollView>
            </ImageBackground>
              
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {
        margin: 15,
        width: 125,
        height: 50,
        marginBottom: 15,
    },
    backCover: {
        position: 'absolute',
        marginTop: 0,
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        opacity: 0.7,
        backgroundColor: "rgba(52, 52, 52, alpha)",
    },
    title: {
        textAlign:"center",
        fontSize: 22,
        color: "#FFFFFF",
        marginHorizontal: 30,
        fontWeight: "600",
        marginBottom: 20,
    },
    titleBold: {
        textAlign:"center",
        fontSize: 22,
        color: "#0069a3",
        marginHorizontal: 30,
        fontWeight: "600",
        marginBottom: 20,
    },
    input: {
        backgroundColor: "#000000c0",
        padding: 15,
        borderRadius: 10,
        marginBottom: 10,
        color: "#F8F9F9",
    },
    cmp: {
        backgroundColor: "#000000c0",
        padding: 10,
        borderRadius: 10,
        marginBottom: 10,
        color: "#F8F9F9",
        marginHorizontal: 30,
    },
    campo: {
        marginHorizontal: 30,
    },
    text: {
        fontSize: 20,
        color: '#FFF',
        marginBottom: 8,       
        marginTop: 12,        
    },
    btnAdd: {
        backgroundColor: "#0069a3",
        padding: 10,
        marginTop: 10,  
        marginHorizontal: 30, 
        marginBottom: 10, 
        borderRadius: 10,
    },
    textStyle: {
        textAlign: 'center',
        fontWeight: '700',
        fontSize: 16,
        color: '#FFF',
    },
})