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
import { APP_CONFIG } from './config'; // Assuming you've adapted APP_CONFIG
import { useToast } from './useToast'; // Assuming you've adapted useToast
import { supabase } from './supabase'; // Assuming you've adapted supabase

export  default function Signup(){

  const navigation = useNavigation();
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    userType: '',
  });

  const { toast } = useToast();

  const handleChange = (id, value) => {
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleRegister = async () => {
    setIsLoading(true);

    try {
      // Register with Supabase Auth
      const { data, error } = await supabase.auth.signUp({
        email: formData.email,
        password: formData.password,
        options: {
          data: {
            full_name: `${formData.firstName} ${formData.lastName}`,
          },
        },
      });

      if (error) throw error;

      if (data.user) {
        // Create user profile in our database
        const { error: profileError } = await supabase.from('users').insert([
          {
            id: data.user.id,
            email: formData.email,
            name: `${formData.firstName} ${formData.lastName}`,
            avatar: `/placeholder.svg?height=32&width=32`,
            role: formData.userType,
          },
        ]);

        if (profileError) throw profileError;

        toast({
          title: 'Account created',
          description: 'Your account has been created successfully!',
        });

        // Redirect to onboarding after successful registration
        navigation.navigate('Onboarding'); // Replace with your onboarding screen name
      }
    } catch (error) {
      toast({
        title: 'Registration failed',
        description: error.message || 'Could not create your account. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
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
            <Brain stroke="#fff" width={24} height={24} />
          </View>
          <Text style={styles.cardTitle}>Create an account</Text>
          <Text style={styles.cardDescription}>Enter your information to get started</Text>
        </View>

        <View style={styles.cardContent}>
          <View style={styles.grid}>
            <View style={styles.inputGroup}>
              <Text style={styles.label}>First name</Text>
              <TextInput
                style={styles.input}
                placeholder="John"
                value={formData.firstName}
                onChangeText={(text) => handleChange('firstName', text)}
              />
            </View>
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Last name</Text>
              <TextInput
                style={styles.input}
                placeholder="Doe"
                value={formData.lastName}
                onChangeText={(text) => handleChange('lastName', text)}
              />
            </View>
          </View>
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Email</Text>
            <TextInput
              style={styles.input}
              placeholder="name@example.com"
              value={formData.email}
              onChangeText={(text) => handleChange('email', text)}
              keyboardType="email-address"
              autoCapitalize="none"
            />
          </View>
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Password</Text>
            <View style={styles.passwordInputContainer}>
              <TextInput
                style={styles.passwordInput}
                placeholder="••••••••"
                value={formData.password}
                onChangeText={(text) => handleChange('password', text)}
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
          </View>
          <View style={styles.inputGroup}>
            <Text style={styles.label}>I am a</Text>
            <TouchableOpacity style={styles.selectTrigger}>
              <Text style={styles.selectValue}>{formData.userType || 'Select user type'}</Text>
            </TouchableOpacity>
            <View style={styles.selectContent}>
              <TouchableOpacity
                style={styles.selectItem}
                onPress={() => handleChange('userType', 'student')}
              >
                <Text style={styles.selectItemText}>Student</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.selectItem}
                onPress={() => handleChange('userType', 'teacher')}
              >
                <Text style={styles.selectItemText}>Teacher</Text>
              </TouchableOpacity>
            </View>
          </View>
          <TouchableOpacity style={styles.button} onPress={handleRegister} disabled={isLoading}>
            {isLoading ? (
              <ActivityIndicator color="#fff" />
            ) : (
              <Text style={styles.buttonText}>Create account</Text>
            )}
          </TouchableOpacity>
        </View>

        <View style={styles.cardFooter}>
          <Text style={styles.footerText}>
            Already have an account?{' '}
            <Text
              style={styles.signInLink}
              onPress={() => navigation.navigate('Login')} // Replace with your login screen name
            >
              Sign in
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
    top: '33%',
    right: '25%',
    width: 256,
    height: 256,
    backgroundColor: 'green',
  },
  circle2: {
    bottom: '25%',
    left: '33%',
    width: 320,
    height: 320,
    backgroundColor: 'blue',
  },
  circle3: {
    top: '50%',
    right: '50%',
    width: 288,
    height: 288,
    backgroundColor: 'purple',
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
  grid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  inputGroup: {
    marginBottom: 10,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
  },
  passwordInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
  },
  passwordInput: {
    flex: 1,
    padding: 10,
  },
  eyeButton: {
    padding: 10,
  },
  selectTrigger: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
  },
  selectValue: {
    fontSize: 16,
  },
  selectContent: {
    position: 'absolute',
    top: 45,
    left: 0,
    right: 0,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    zIndex: 10,
  },
  selectItem: {
    padding: 10,
  },
  selectItemText: {
    fontSize: 16,
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
  cardFooter: {
    alignItems: 'center',
    marginTop: 15,
  },
  footerText: {
    color: '#888',
  },
  signInLink: {
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
