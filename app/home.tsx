import React from "react";
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";

export default function PerfilScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.card}>
        <Image
          source={require("../assets/1.jpg")}
          style={styles.profileImage}
        />
        <Text style={styles.name}>Brandon Morales</Text>
        <Text style={styles.subtitle}>Desarrollador Frontend | Estudiante SENA</Text>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>👨‍💻 Sobre mí</Text>
          <Text style={styles.text}>
            Soy un apasionado por la tecnología y el desarrollo de software. Me gusta aprender nuevas herramientas y crear aplicaciones móviles y web que solucionen problemas reales.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>🎓 Educación</Text>
          <Text style={styles.text}>📘 Tecnólogo en Análisis y Desarrollo de Software - SENA</Text>
          <Text style={styles.text}>💡 Formación en React, React Native, JavaScript, y bases de datos.</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>⚙️ Habilidades</Text>
          <Text style={styles.text}>• React Native</Text>
          <Text style={styles.text}>• JavaScript / TypeScript</Text>
          <Text style={styles.text}>• HTML / CSS</Text>
          <Text style={styles.text}>• Node.js / Express</Text>
          <Text style={styles.text}>• SQL y NoSQL</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>📫 Contacto</Text>
          <Text style={styles.text}>📧 brandon@example.com</Text>
          <Text style={styles.text}>🌐 github.com/brandonmorales</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#F5F7FA",
    padding: 20,
    alignItems: "center",
  },
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 15,
    padding: 20,
    width: "100%",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 4,
    alignItems: "center",
  },
  profileImage: {
    width: 140,
    height: 140,
    borderRadius: 70,
    marginBottom: 15,
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#1E1E1E",
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 16,
    color: "#777",
    marginBottom: 20,
  },
  section: {
    width: "100%",
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#3949AB",
    marginBottom: 5,
  },
  text: {
    fontSize: 15,
    color: "#333",
    lineHeight: 22,
  },
});

