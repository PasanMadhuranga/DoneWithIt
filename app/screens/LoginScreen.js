import React from "react";
import { View, StyleSheet, Image } from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";

import Screen from "../components/Screen";
import AppTextInput from "../components/AppTextInput";
import AppButton from "../components/AppButton";
import AppText from "../components/AppText";
import ErrorMessage from "../components/ErrorMessage";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

function LoginScreen(props) {
  return (
    <Screen>
      <View style={styles.container}>
        <Image style={styles.logo} source={require("../assets/Logo.png")} />
        <Formik
          initialValues={{ email: "", password: "" }}
          onSubmit={(values) => console.log(values)}
          validationSchema={validationSchema}
        >
          {({ handleChange, handleSubmit, errors, setFieldTouched, touched }) => (
            <>
              <AppTextInput
                placeholder="Email"
                icon="email"
                autoCapitalize="none"
                autoCorrect={false}
                onBlur={() => setFieldTouched("email")}
                keyboardType="email-address"
                textContentType="emailAddress"
                onChangeText={handleChange("email")}
              />
              <ErrorMessage error={errors.email} visible={touched.email} />
              <AppTextInput
                placeholder="Password"
                icon="lock"
                secureTextEntry
                textContentType="password"
                autoCapitalize="none"
                autoCorrect={false}
                onBlur={() => setFieldTouched("password")}
                onChangeText={handleChange("password")}
              />
              <ErrorMessage error={errors.password} visible={touched.password} />
              <AppButton title="Login" onPress={handleSubmit} />
            </>
          )}
        </Formik>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
  logo: {
    width: 80,
    height: 80,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 20,
  },
});

export default LoginScreen;
