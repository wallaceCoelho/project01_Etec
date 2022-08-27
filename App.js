import React,{useState} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';//importação de componentes

export default function App() {//Permite que essa função seja exposta para toda a aplicação com retorno
  
	//REACT:
	//usando react js Hooks usestate
	
	const [valor1, setValor1] = useState();
	const [valor2, setValor2] = useState();
	const [resultado, setResultado] = useState();
	let res;

	function somar(){
		res = parseFloat(valor1) + parseFloat(valor2);
		setResultado(res);
	}

	function subtrair(){
		res = parseFloat(valor1) - parseFloat(valor2);
		setResultado(res);
	}

	function dividir(){
		res = parseFloat(valor1) / parseFloat(valor2);
		setResultado(res);
	}

	function multi(){
		res = parseFloat(valor1) * parseFloat(valor2);
		setResultado(res);
	}

	function expo(){
		res = parseFloat(valor1) ** parseFloat(valor2);
		setResultado(res);
	}

	return (
	  //Posso fechar as própias tags utiliando a / (<TextInput />)
	  //As tags no React Native sempre iniciam com letras maiúsculas
	  //View é como se fosse as <div> do HTML, a diferença é que preciso ter uma View principal para mostrar tudo e só podemos englobar uma View dentro de outro View 
    
//Marcação de texto:	
	<View style={styles.container}>
		<View style={styles.bloco}>
      		<Text style={styles.titulo}>Calculadora Simples</Text>
      	</View>
		<View style={styles.bloco}>
			<Text> Valor 1: </Text>
			<TextInput 
				style={styles.input}
				value= {valor1}
				onChangeText={(valor) => setValor1(valor)}
				keyboardType="numeric"
			/>
		</View>
		<View style={styles.bloco}>
			<Text> Valor 2: </Text>
			<TextInput 
				style={styles.input}
				value= {valor2}
				onChangeText={(valor) => setValor2(valor)}
				keyboardType="numeric"
			/>
		</View>
		<View style={styles.blocoBtn}>
			<TouchableOpacity 
				style={styles.botao}
				onPress = {somar}>
			
				<Text style={styles.textoBotao}>+</Text>
			</TouchableOpacity>

			<TouchableOpacity 
				style={styles.botao}
				onPress = {subtrair}>
			
				<Text style={styles.textoBotao}>-</Text>
			</TouchableOpacity>

			<TouchableOpacity 
				style={styles.botao}
				onPress = {dividir}>
			
				<Text style={styles.textoBotao}>/</Text>
			</TouchableOpacity>

			<TouchableOpacity 
				style={styles.botao}
				onPress = {multi}>
			
				<Text style={styles.textoBotao}>X</Text>
			</TouchableOpacity>
			<TouchableOpacity 
				style={styles.botao}
				onPress = {expo}>
			
				<Text style={styles.textoBotao}>^</Text>
			</TouchableOpacity>
		</View>
		<View style={styles.bloco}>
			<Text style={styles.titulo}>
				Resultado: {resultado}
			</Text>
		</View>
    </View>
  );
}

//Estilização:
const styles = StyleSheet.create({
	container: {
		display: 'flex',
		flex: 1,
		justifyContent: 'center',
		alignItens: 'center'
  	},
	bloco: {
		display: 'flex',
		marginTop: 10,
		width: '80%',
		marginLeft:'10%',
		justifyContent: 'center'
	},
	blocoBtn: {
		position: 'relative',
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-evenly',
		marginTop: 40,
		width: '100%'
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
		width: '18%',
		margin: 2,
		borderRadius: 10
	},
	textoBotao: {
		color: '#fff',
		textAlign: 'center',
		fontSize: 20
	},
});
