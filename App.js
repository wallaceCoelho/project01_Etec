import react from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';//importação de componentes

export default function App() {//Permite que essa função seja exposta para toda a aplicação com retorno
  return (
	  //Posso fechar as própias tags utiliando a / (<TextInput />)
	  //As tags no React Native sempre iniciam com letras maiúsculas
	  //View é como se fosse as <div> do HTML, a diferença é que preciso ter uma View principal para mostrar tudo e só podemos englobar uma View dentro de outro View 
    <View style={styles.container}>
		<View style={styles.bloco}>
      		<Text style={styles.titulo}>Calculadora Simples!</Text>
      	</View>
		<View style={styles.bloco}>
			<Text> Valor 1: </Text>
			<TextInput style={styles.input}/>
		</View>
		<View style={styles.bloco}>
			<Text> Valor 2: </Text>
			<TextInput style={styles.input}/>
		</View>
		<View style={styles.bloco}>
			<TouchableOpacity style={styles.botao}>
				<Text style={styles.textoBotao}>Somar</Text>
			</TouchableOpacity>
		</View>
    </View>
  );
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItens: 'center',
  	},
	bloco: {
		marginTop: 10,
		width: '80%',
		marginLeft:'10%'
	},
	titulo: {
		fontSize: 30,
		textAlign: 'center'
	},
	input: {
		borderWidth: 2,
		fontSize: 20,
		borderRadius:10
	},
	botao: {
		backgroundColor: '#000',
		padding: 10,
		width: 80,
		margin: 'auto',
		borderRadius: 10
	},
	textoBotao: {
		color: '#fff',
		textAlign: 'center',
		fontSize: 20
	},
});
