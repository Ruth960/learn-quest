import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Feather from '@expo/vector-icons/Feather';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { Eye, EyeOff, Brain } from 'react-native-feather'; // Assuming you have these icons installed
import { useToast } from './useToast'; // Assuming you've adapted useToast
import { APP_CONFIG } from './config'; // Assuming you've adapted APP_CONFIG
import { useAuth } from './AuthProvider'; // Assuming you've adapted AuthProvider
 
export default function Signin() {

  const navigation = useNavigation();
  const { toast } = useToast();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { login, googleLogin } = useAuth();

  const handleLogin = async () => {
    setIsLoading(true);
    try {
      await login(email, password);
      navigation.navigate('Dashboard'); // Replace with your dashboard screen name
    } catch (error) {
      // Error is handled in the auth provider
      setIsLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await googleLogin();
      // Redirect is handled by the OAuth flow
    } catch (error) {
      // Error is handled in the auth provider
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Animated Background (React Native doesn't have direct CSS blur, consider using libraries) */}
      <View style={styles.absoluteContainer}>
        <View style={[styles.circle, styles.circle1]} />
        <View style={[styles.circle, styles.circle2]} />
        <View style={[styles.circle, styles.circle3]} />
      </View>

      <View style={styles.header}>
        <TouchableOpacity
          style={styles.headerLink}
          onPress={() => navigation.navigate('Home')} // Replace 'Home' with your main screen name
        >
          <View style={styles.brainIconContainer}>
          <FontAwesome6 name="brain" size={24} color="black" />
          </View>
          <Text style={styles.appName}>{APP_CONFIG.name}</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.card}>
        <View style={styles.cardHeader}>
          <View style={styles.brainIconContainerLarge}>
          <FontAwesome6 name="brain" size={24} color="black" />
          </View>
          <Text style={styles.cardTitle}>Welcome back!</Text>
          <Text style={styles.cardDescription}>
            Enter your credentials to access your account
          </Text>
        </View>

        <View style={styles.cardContent}>
          <View style={styles.tabs}>
            <TouchableOpacity style={styles.tabButton}>
              <Text style={styles.tabText}>Email</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.tabButton}>
              <Text style={styles.tabText}>Google</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.tabContent}>
            <TextInput
              style={styles.input}
              placeholder="name@example.com"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
            />
            <View style={styles.passwordInputContainer}>
              <TextInput
                style={styles.passwordInput}
                placeholder="••••••••"
                value={password}
                onChangeText={setPassword}
                secureTextEntry={!showPassword}
              />
              <TouchableOpacity
                style={styles.eyeButton}
                onPress={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <Feather name="eye-off" size={24} color="black" />
                ) : (
                    <Feather name="eye" size={24} color="black" />
                )}
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              style={styles.forgotPassword}
              onPress={() => navigation.navigate('ForgotPassword')} // Replace with your forgot password screen name
            >
              <Text style={styles.forgotPasswordText}>Forgot password?</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={handleLogin} disabled={isLoading}>
              {isLoading ? (
                <ActivityIndicator color="#fff" />
              ) : (
                <Text style={styles.buttonText}>Sign in</Text>
              )}
            </TouchableOpacity>
          </View>

          <View style={styles.tabContent}>
            <TouchableOpacity
              style={[styles.button, styles.googleButton]}
              onPress={handleGoogleLogin}
              disabled={isLoading}
            >
              <View style={styles.googleIconContainer}>
                {/* Replace with your Google Icon */}
                <View style={styles.googleIcon} />
              </View>
              {isLoading ? (
                <ActivityIndicator color="#000" />
              ) : (
                <Text style={styles.googleButtonText}>Sign in with Google</Text>
              )}
            </TouchableOpacity>

            <View style={styles.demoCredentials}>
              <Text style={styles.demoText}>For demo purposes, you can use:</Text>
              <Text style={styles.demoTextBold}>Email: demo@brainwave.edu</Text>
              <Text style={styles.demoTextBold}>Password: password123</Text>
            </View>
          </View>
        </View>

        <View style={styles.cardFooter}>
          <Text style={styles.footerText}>
            Don't have an account?{' '}
            <Text
              style={styles.signUpLink}
              onPress={() => navigation.navigate('Signup')} // Replace with your register screen name
            >
              Sign up
            </Text>
          </Text>
        </View>
      </View>

      <View style={styles.copyright}>
        <Text style={styles.copyrightText}>
          © {new Date().getFullYear()} {APP_CONFIG.name}. All rights reserved.
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff', // Or your desired background
    padding: 20,
  },
  absoluteContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    overflow: 'hidden',
  },
    circle: {
    position: 'absolute',
    borderRadius: 1000,
    opacity: 0.2,
    },
  circle1: {
    top: '25%',
    left: '25%',
    width: 256,
    height: 256,
    backgroundColor: 'blue',
  },
  circle2: {
    bottom: '33%',
    right: '33%',
    width: 320,
    height: 320,
    backgroundColor: 'purple',
  },
  circle3: {
    top: '66%',
    left: '50%',
    width: 288,
    height: 288,
    backgroundColor: 'pink',
  },
  header: {
    position: 'absolute',
    top: 20,
    left: 20,
    zIndex: 10,
  },
  headerLink: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  brainIconContainer: {
    backgroundColor: '#007bff',
    borderRadius: 5,
    padding: 5,
    marginRight: 8,
  },
    brainIconContainerLarge: {
    backgroundColor: '#007bff',
    borderRadius: 50,
    padding: 10,
    marginRight: 0,
    marginBottom: 10,
  },
  appName: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  card: {
    width: '100%',
    maxWidth: 400,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: 8,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  cardHeader: {
    alignItems: 'center',
    marginBottom: 20,
  },
  cardTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  cardDescription: {
    color: '#888',
  },
    cardContent: {
    },
  tabs: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 15,
  },
  tabButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  tabText: {
    fontSize: 16,
  },
  tabContent: {
    marginBottom: 15,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
  },
  passwordInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 5,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
  },
  passwordInput: {
    flex: 1,
    padding: 10,
  },
  eyeButton: {
    padding: 10,
  },
  forgotPassword: {
    alignSelf: 'flex-end',
    marginBottom: 10,
  },
  forgotPasswordText: {
    color: '#007bff',
  },
  button: {
    backgroundColor: '#007bff',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
    googleButton: {
    backgroundColor: 'transparent',
    borderColor: '#ccc',
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
    googleButtonText: {
    color: '#000',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  googleIconContainer:{
    width:20,
    height:20,
  },
  googleIcon:{
    backgroundColor: 'red',//replace with google Icon
    width:20,
    height:20,
  },
  demoCredentials: {
    marginTop: 10,
    alignItems: 'center',
  },
  demoText: {
    color: '#888',
    fontSize:12,
  },
  demoTextBold: {
    fontWeight: 'bold',
    fontSize:12,
  },
  cardFooter: {
    alignItems: 'center',
    marginTop: 15,
  },
  footerText: {
    color: '#888',
  },
  signUpLink: {
    color: '#007bff',
  },
  copyright: {
    marginTop: 20,
    alignItems: 'center',
  },
  copyrightText: {
    color: '#888',
  },
});

